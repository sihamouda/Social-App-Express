# Simple Express App

The main purpose of this readme is to present, explain, and document what I have done and learned while working on this project.
It is a personal project to help me improve my devolepment skills and my network protocols knowledge.
Therefore, I used Express.JS instead of Nest.JS or any other framwork. I found my self read a lot of articles about JavaScript, ECMAscript, Back-End Architecture ...
 
![Logo](https://miro.medium.com/max/800/1*M10QaO1mZCk_jvH2EBNmaQ.jpeg "title")

# Deployment

First install all node dependencies:

```bash
$ npm install
```

**Don't forget to make your own .env as it s essential to start the app. You will need port of each app, mongo-express credentials and mongoURL.**

Then you can start the MongoDB containers:

```bash
$ docker-compose up
```

Finally start the project:

```bash
$ npm start index.js
```

# What I have done (not final - project still in progress)

- Create user LogIn and SignUp Routes and their Controllers (Day 1-3)

- Create user Model (After one week) 

- Save user to database with hashed password

# My Progress

### First couple of days

I spent most of the time learning about the Express.js and its basics: routes, middlewares ...

I build a API that receives data from POST request and console log it.
I wasn't following a specific tutorial or course at first.
Then I realized that the project was going to get bigger very fast and I need to orginazed in a structured way.

### A week after

I spent like most of these days understanding some Back-End fundamentals. 
Mainly I try to learn the difference between Back-End architectures like MVC, MVP, micro-service...

To start my journey, I chose MVC as Back-End Architecture to begin with as it is a fundamental architecture.
Yes, I know that I could have just chosen another Back-End framework that supports mainly MVC but like I said in the top of the README, this project is for educative purpose only.

After understanding how MVC works and how the folders are orginazed, I started looking for some YouTube Playlists to follow so I can save time and focus on learning how client and server interact with each other using HTTP.

Then comes the populor question: would I use a relational or non-relational database ?

After some research I chose MongoDB for several reasons:

- I wanted to learn non-relational databases as we learned SQL in the University

- non-relational databases are the best choice for my case as i dont need a lot a relations between data


I'm sure that in the end of the project I will discover more reasons but for now these are that I'm going to stick with.

So another question pops up in my head: How am I going to send data form Express to MongoDB?

And that's how I learned about ORM (Object Relational Mapping) and ODM (Object Document Mapping). And after some researches I chose mongose.

And after all this time, the signup routes works properly. The only thing is missing are Tokens.

I dockerized the Mongo at this level only to make deployment easy for the ones who want to test it.

## Resources that helped me

[YouTube Playlist: ExpressJS 2022 Course](https://www.youtube.com/playlist?list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2)

[YouTube Playlist: MERN Auth Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

[YouTube Video: How Does JWT Authentication Work](https://www.youtube.com/watch?v=hoBSjmrwF1k)