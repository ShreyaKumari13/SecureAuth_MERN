# Full Stack Authentication Application

This is a full-stack web application built with React.js for the frontend and Node.js/Express.js for the backend, featuring user authentication functionality.

## Key Features:
✨ Modern React.js frontend 

🔒 Secure JWT authentication 

🎨 Stylish Tailwind CSS design 

🚀 Express.js REST API 

🗄️ MongoDB integration 

🛡️ Protected routes

## Project Structure

The project is divided into two main directories:

### Client (Frontend)
- Built with React.js
- Uses Tailwind CSS for styling
- Features React Router for navigation
- Axios for API communication

### Server (Backend)
- Node.js/Express.js REST API
- MongoDB database connection
- JWT-based authentication
- Secure password hashing with bcrypt

## Features

- User Registration
- User Login
- Protected Dashboard Route
- JWT Authentication
- Secure Password Storage
- CORS Enabled
- Environment Variable Configuration

## Prerequisites

- Node.js (v12 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies for both client and server

### Server Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Client Setup
```bash
cd client
npm install
```

## Running the Application

### Start the Server
```bash
cd server
npm run dev     # for development with nodemon
# or
npm start       # for production
```
The server will run on http://localhost:5000

### Start the Client
```bash
cd client
npm start
```
The client will run on http://localhost:3000

## API Endpoints

### Authentication Routes
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/dashboard` - Protected dashboard route (requires JWT token)

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cors
- dotenv

## Security Features

- Password Hashing
- JWT Authentication
- Protected Routes
- Environment Variables
- CORS Configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

