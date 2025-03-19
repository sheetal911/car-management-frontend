🚗 Car Management Application - Frontend

📌 Overview

The Car Management Frontend is a web application that allows users to manage car listings with features like authentication, adding/updating cars, image uploads, and global search functionality. Users can only view and manage their own listings.

🎯 Features

✅ User authentication (Signup/Login)

✅ Add a car with up to 10 images, title, description, and tags (car_type, company, dealer, etc.)

✅ View all cars added by the logged-in user

✅ Global search for cars based on title, description, or tags

✅ View detailed information for a specific car

✅ Update a car’s title, description, tags, or images

✅ Delete a car

✅ Responsive and user-friendly interface

🛠️ Tech Stack

Frontend Framework: React.js (or your chosen framework)

State Management: React Hooks / Context API (if used)

Styling: CSS / Tailwind CSS / Bootstrap

API Calls: Axios / Fetch API

Authentication: JWT-based token storage

🚀 Getting Started

🔹 1. Install Dependencies

npm install

🔹 2. Configure Environment Variables

Create a .env file in the root directory and add the backend API URL:

REACT_APP_API_URL=http://localhost:5000   # Change to deployed backend URL when available

🔹 3. Run the Application

npm start

Your frontend will be running at http://localhost:3000

📌 Pages and Components

🔹 Authentication

Signup Page → Register a new user

Login Page → Authenticate existing users

🔹 Car Management

Home Page → Displays all cars added by the logged-in user

Add Car Page → Upload images, enter title, description, and tags

Car Detail Page → View car details with edit and delete options

Edit Car Page → Modify an existing car’s details

Search Feature → Search for cars based on title, description, or tags

📌 API Integration

The frontend interacts with the backend through the following API calls:

Signup → POST /api/users/signup → Registers a new user.

Login → POST /api/users/login → Authenticates an existing user and returns a token.

Get Cars → GET /api/cars → Fetches all cars added by the logged-in user.

Get Car Detail → GET /api/cars/:id → Retrieves details of a specific car.

Add Car → POST /api/cars → Allows a user to add a new car with images, title, description, and tags.

Update Car → PUT /api/cars/:id → Updates an existing car’s details, including title, description, tags, or images.

Delete Car → DELETE /api/cars/:id → Deletes a specific car from the user's collection.

Search Cars → GET /api/cars/search?query=keyword → Searches for cars based on title, description, or tags.

🏗️ Future Enhancements

Deploy the frontend on Vercel/Netlify

Implement pagination for car listings

Improve UI/UX with better design and animations

