# Project Overview

The backend of the project is built using Node.js, Express, and MongoDB. It provides REST API endpoints for user authentication, folder management, image uploads, and search functionality.

# Tech Stack used for backend

- Express
- Mongoose
- Multer
- Bcrypt
- CORS
- Dotenv
- Cookie-Parser
- JsonWebToken

# Project structure

```
backend/
│
├── controllers/ # Route controllers
│ ├── authController.js
│ ├── folderController.js
│ ├── imageController.js
│ └── ...
│
├── middleware/ # Middleware functions
│ ├── authMiddleware.js
│ └── ...
│
├── models/ # Mongoose models
│ ├── User.js
│ ├── Folder.js
│ ├── Image.js
│ └── ...
│
├── routes/ # Route definitions
│ ├── auth.js
│ ├── folder.js
│ ├── image.js
│ └── ...
│
├── uploads/ # Folder for uploaded images
│
├── .env # Environment variables
├── .env.sample # Environment variables reference
├── package.json # Dependencies and scripts
└── README.md # Backend readme file
```

# Running the project locally

To run the backend project locally:

1. CLone the repository

   ```
   git clone https://github.com/chiragyadav2003/Image-Uploader/tree/master/backend
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables: Create a .env file in the root of the backend directory and add necessary environment variables y taking reference from .env.sample
4. Start the server:

   ```
   npm run dev
   ```
