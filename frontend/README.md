# Project Overview

The frontend of the project is built using Vite, React, and Tailwind CSS. It provides a user interface for a web application where users can register, login, create nested folders, upload images, and manage their content.

# Tech Stack used

- React
- Tailwind CSS
- Axios
- React-Cookies
- React-Router-Dom
- React-Dom

# Project Structure

```
frontend/
│
├── public/             # Static assets
│   └── index.html      # HTML template
│
├── src/                # Source files
│   ├── assets/         # Assets such as images, fonts
│   ├── components/     # React components
│   ├── pages/          # Pages for routing
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main component
│   ├── index.jsx       # Entry point
│   └── ...
│
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Frontend readme file
```

# Running the Project Locally

To run the frontend project locally:

1. Clone the repository:

   ```
   git clone https://github.com/chiragyadav2003/Image-Uploader/tree/master/frontend

   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Access the application:\
   Open your browser and go to http://localhost:5173
