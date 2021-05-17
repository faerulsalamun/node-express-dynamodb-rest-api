# Node Rest API
> A starter project with Node.js, Express and DynamoDB

### Structure

```
.
├── README.md
├── src
│   ├── helpers
│   ├── modules
│   ├── routes
├── app.js
├── server.js
├── .env.example
└── .gitignore

```

## How To Run

1. Copy file .env.example to .env and change with your configuration
2. Run node app.js

## Endpoints

1. GET      /api/v1/users/:UserID       fetch data user by UserID
2. POST     /api/v1/users           create data user
3. PATCH    /api/v1/users/:UserID       update data user by UserID
4. DELETE    /api/v1/users/:UserID      delete data user by UserID
