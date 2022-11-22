# Interexy

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
  
