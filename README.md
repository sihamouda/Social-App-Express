# Simple Express App

This is an Express.JS REST API for a blog website.

It is a personal project to help me improve my devolepment skills and my network protocols knowledge.

![Logo](https://miro.medium.com/max/800/1*M10QaO1mZCk_jvH2EBNmaQ.jpeg "title")

## Instructions

1. Fill the .env files
2. Run docker-compose: `docker-compose up`

## Next Steps

### New checklist - Microsevices

- [ ] Move from monolithic app to a microservices
  - [ ] API gateway
  - [x] User service
  - [x] Blogs service
  - [ ] Implement RabbitMQ to increase reading speed: 2DBs mongo (for writing) and elastic (for reading)

#### API gateway

- [ ] Routes all requests
- [ ] Move Token management to the gateway
- [x] Add to docker-compose

#### User service

- [x] Signup
- [x] Login
- [x] Add to docker-compose
- [x] Has its own database

#### Blog service

- [x] Create a blog API
- [x] List all blogs API
- [ ] List blogs by id
- [ ] Link blog with user
- [ ] Comment a blog
- [ ] React a blog
- [x] Add to docker-compose
- [x] Has its own database

### Old checklist - Monolithic app

- [x] Authentication APIs : signup & login
- [x] Access Token generation
- [x] Refresh Token generation
- [x] Protection of APIs with Access Token
- [x] Refresh Token Rotation
- [x] Reuse Detection
