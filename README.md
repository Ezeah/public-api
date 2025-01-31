# Public API for Basic Information Retrieval

This project is a simple public API built using Node.js and Express. It provides basic information including a registered email address, the current datetime in ISO 8601 format, and the GitHub URL of the project's codebase.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/your-repo.git
   ```
   
2. **Navigate to the project directory:**
   ```
   cd your-repo
   ```

3. **Install the dependencies:**
   ```
   npm install
   ```

4. **Start the server:**
   ```
   npm start
   ```

The server will start on `http://localhost:3000`.

## API Documentation

### Endpoint

- **GET** `/`

### Request Format

No request body is required.

### Response Format

On a successful request, the API will respond with a JSON object in the following format:

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Example Usage

You can test the API using a tool like Postman or by simply visiting the endpoint in your web browser:

```
http://localhost:3000/
```

## Backlink

For more information on hiring Node.js developers, visit [HNG Tech](https://hng.tech/hire/nodejs-developers).