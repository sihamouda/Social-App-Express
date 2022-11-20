import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFetch = (data) => {
    fetch("/SignUp/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        rePassword: data.rePassword,
      }),
    });
  };

  const valideToast = (msg) => {
    toast.success(msg, {
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
      if (errors.username) {
        if (errors.username.type === "required") {
          errorToast("Username is Required!");
        } else if (errors.username.type === "maxLength") {
          errorToast(errors.username.message);
        }
      } else if (errors.email) {
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
      } else if (errors.rePassword) {
        if (errors.rePassword.type === "required") {
          errorToast("Re-enter Password, please");
        }
        if (errors.rePassword.type === "minLength") {
          errorToast(errors.rePassword.message);
        }
      }
    }
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        var valide = false;
        if (
          errors &&
          Object.keys(errors).length === 0 &&
          Object.getPrototypeOf(errors) === Object.prototype
        ) {
          console.log(data);
          if (data.password != data.rePassword) {
            errorToast("password mismatch!");
          } else {
            valide = true;
          }
          if (valide) {
            handleFetch(data);
            valideToast("Account Created!");
          }
        }
      })}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          {...register("username", {
            required: { value: true, message: "required" },
            maxLength: {
              value: 20,
              message: "username must be max of 20 characters",
            },
          })}
        />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Re-enter password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("rePassword", {
            required: true,
            minLength: {
              value: 4,
              message: "password should be min of 4 characters",
            },
          })}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleToast}>
        Submit
      </Button>
      <ToastContainer />
    </Form>
  );
}

export default SignUp;
