# Nhosa Secondary School Website

A modern, full-stack website for Nhosa Secondary School in Abeokuta, Nigeria, built using the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.

## Features

- Modern and responsive design
- School information pages (About, Academics, Admissions)
- News and events section
- Contact form
- Admission application system
- Backend API for dynamic content

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

#### Development Mode
```
npm run dev
```
This will start both the backend server and the React development server concurrently.

#### Backend Only
```
npm run server
```

#### Frontend Only
```
npm run client
```

## Project Structure

- `/public` - Static files
- `/src` - React frontend
  - `/components` - Reusable UI components
  - `/pages` - Page components
- `/models` - MongoDB schemas
- `/routes` - API routes
- `server.js` - Express server

## API Endpoints

- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get a specific news article
- `POST /api/news` - Create a news article
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get a specific event
- `POST /api/events` - Create an event
- `POST /api/admissions` - Submit an admission application
- `POST /api/contact` - Submit a contact form

## License

This project is licensed under the MIT License.