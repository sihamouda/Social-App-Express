# Social App

In this repository, you will find my personal web project: It's a simple social media app made of React, React-Bootstrap as a Front-End and Express.JS as Back-end.

This project is made for learning purpose. I wanted to improve my skills in JavaScript and especially understand how Frond-End and Back-End communicates in Real-Life.

## Progress

### Day 1 - 3:

In these days, I learned more about Express.JS where I discovered Routing, Middlewares and Templating.
When I discovered Pug, I decided to a more Real-Life project so that I can encounter more Real-Life scenarios.

Therefore, I started a React Front-End: I'm using React-Bootstrap so I can gain time and focus more on the Front-Back communication.

I fixed a Navbar in the App component, integrated React-Router v6 so we can route from component to another (For now, we have Home , About , SignIn, LogIn Components).

Finally I made a RESTful API to get the submitted data from the SignIn component.

### Day 4 - 6:

I spend most of the time understanding some core concepts in web form, like where should I validate the data: is it in the Front or the Back? How should I integrate the form notification system: should the Back send messages to the Front about some fields requirements?

I concluded that I have to validate data from the Client-Side before sending it to the Server, I could have some test in the Back-End, but Front-End validation is cruitial!

Therefore, after googling and asking some friends, I used react-hook-form for validation data (it took fewer lines than using setState) and react toastify for simple notification like error notificatation. Reading their documentation wasn't that hard. What I loved about this project that I just can look on the internet for some opensource hooks that facilitate Front development and focus more on JavaScript itself and the Back-End

I also made two simple APIs in the Server-Side to receive the data from SignUp and LogIn after validation

## Nextstep

Connect to a database and save accounts

connect to an account and sessions
