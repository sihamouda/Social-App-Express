import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFetch = (data) => {
    fetch("/LogIn/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  };

  const errorToast = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleToast = () => {
    if (errors) {
      if (errors.email) {
        if (errors.email.type === "required") {
          errorToast("Email is Required!");
        }
      } else if (errors.password) {
        if (errors.password.type === "required") {
          errorToast("Password is Required!");
        }
        if (errors.password.type === "minLength") {
          errorToast(errors.password.message);
        }
      }
    }
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Form
        onSubmit={handleSubmit((data) => {
          handleFetch(data);
        })}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: {
                value: 4,
                message: "password should be min of 4 characters",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Keep me connected"
            {...register("connected")}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleToast}>
          Submit
        </Button>
        <ToastContainer />
      </Form>
    </Col>
  );
}

export default LogIn;
