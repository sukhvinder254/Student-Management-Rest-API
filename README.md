# Student Management REST API

A REST API built with Node.js and Express.js to perform CRUD operations on student data. Data is stored in memory (array), with no database.

## Features

- 5 REST API endpoints (CRUD)
- Modular routing using Express Router
- Custom logger middleware
- Error handling with proper status codes
- Tested using Postman

## Tech Stack

- Node.js
- Express.js
- Postman

## Project Structure

```
student-api/
├── app.js
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
├── data/
│   └── students.js
└── package.json
```

## How to Run

```bash
git clone https://github.com/sukhvinder254/Student-Management-Rest-API.git
cd Student-Management-Rest-API
npm install
node app.js
```

Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint        | Description         | Success Code |
|--------|-----------------|---------------------|--------------|
| GET    | `/students`     | Get all students    | 200          |
| GET    | `/students/:id` | Get student by ID   | 200          |
| POST   | `/students`     | Add a new student   | 201          |
| PUT    | `/students/:id` | Update a student    | 200          |
| DELETE | `/students/:id` | Delete a student    | 200          |

## Sample Request Body (POST / PUT)

```json
{
  "name": "Sukhvinder",
  "course": "BCA"
}
```

## Status Codes

| Code | Meaning               |
|------|-----------------------|
| 200  | Success               |
| 201  | Created               |
| 400  | Bad Request (name or course missing) |
| 404  | Student Not Found     |
| 500  | Internal Server Error |

## Middleware

A custom logger prints the method, URL and time of every request in the terminal.

## Note

Data resets when the server restarts because it is stored in memory.

## Author

Sukhvinder
