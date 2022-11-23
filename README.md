# Interexy
[`Interexy`](https://koridzeg.github.io/interexy/)
## Usage

Create .env in backend and add your MONGO_URI,PORT,JWT_LIFETIME and JWT_SECRET.
Run npm start on both files after downloading dependencies.

### Install dependencies

```
# Backend deps
cd backend
npm install

# Frontend deps
cd frontend
npm install
```

## Frontend

- **src/**

  - **/components/** - JSX components (Login & Register etc.)
  - **/pages/** - pages (Login & Register pages,etc.)
  
  ## Backend
  
     - **/db/** - connection to the database
  - **/controllers/** - user&auth controllers.
  - **/middleware/** - authentication and error middleware
  - **/models/** - call&user schemas
  - **/routes/** - call&user routes.
  - **/routes/** - error handling
  
  ## Tools used during development
  
  [`axios`](https://github.com/axios/axios)
  [`MUI`](https://github.com/mui/material-ui)
  [`formik`](https://github.com/jaredpalmer/formik)
  [`react-router`](https://github.com/remix-run/react-router)
  
  [`bcryptjs`](https://github.com/kelektiv/node.bcrypt.js/)
  [`cors`](https://github.com/expressjs/cors)
  [`dotenv`](https://github.com/motdotla/dotenv)
  [`express`](https://github.com/expressjs/express)
  [`mongoose`](https://github.com/Automattic/mongoose)
  [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken) 
  [`http-status-codes`](https://github.com/prettymuchbryce/http-status-codes)
