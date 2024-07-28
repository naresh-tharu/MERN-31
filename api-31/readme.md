# Server side API Development

## Framework

- Express js

# API

- Application Programming Interface
- that connects our Frontend applications with Backend Server
- URL - Endpoints

## CRUD Operation
C = Create
  - post method
R = Read
  - get method
U = Update
  - put/patch method
D = Delete
  - delete method

## Design Pattern
- MVC Pattern
  - Model-View-Controller Pattern 
  - Model => DB structure/data => mongodb
  - View => Presentation /Display => react js
  - Controller => logic /Business logic => express js

## Express Feature

- Routing
  - Endpoints defined on BE Server API
    => Listens for te request
    => Response to the client
  - RESTful services
    => 5 method to handle to request
        -> get, post, put, patch, delete
  - triggers the action based on url and method (controller)

## MVC flow                             .......................................
user ------> API request------> Routing---------->middleware/optional---------> controller<----------------> Service<------------------>Model<------------->Real Database
Agent       logic, post       ur, method          Validation                   Business logic
                                                                              - respose to client -> json reponse
                                                ----> response to client -------------> json response

## Ecommerce
CRUD => create, read, update, delete

- Auth
  - login
  - register
  - activate
  - forget
  - reset
  - logout
- User
  - CRUD
- Product
  - CRUD
- Category
  - CRUD
- Brand
  - CRUD
- Banner
  - CRUD
- Orders
  - CRUD


## MVC Pattern
### General
    - src/
        - config/
          => all the configuration files
        - routes/
          => modular routes
          e.g. auth.routes.js, user.routes.js, ...
        - middleware/
        - controller/
          => auth.controller.js, user.controller.js, ....
        - services/
          => auth.service.js, ....
        - model/
        => auth.model.js, ...

### Modular Pattern
- src/
  - config/
    => express.config.js
    => router.config.js
  - modules/app
    - auth/
      -> auth.router.js
      -> auth.middleware.js
      -> auth.controller.js
      -> auth.service.js
      -> auth.model.js
      -> index.js====> expose point
    - user/
    - brand/
    - category/
    - product/
  - services/
  - middlewares/
  
===> nest.js ==>framework based on express js