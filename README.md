# PERN Stack App with Rate Limiting, Bot Detection & Zustand

## 🌟 Tech Stack

- **P**ostgreSQL
- **E**xpress.js (Backend)
- **R**eact.js (Frontend)
- **N**ode.js (Backend)
- **TailwindCSS**
- **DaisyUI**
- **Zustand** (Global state management)

## 🚀 Features

- **Rate Limiting & Bot Detection**: Protects your app from excessive requests and automated bots.
- **Global State Management with Zustand**: Centralized state management for your app.
- **Error Handling**: Graceful error handling on both server and client.
- **Free Deployment**: Full deployment instructions for free hosting.
- **And much more!**

## 🔧 Setup

### 1. **Environment Setup**

Make sure to create a `.env` file at the root of your project. This file should contain the following variables:

```env
PORT=3000

PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGHOST=your_pg_host
PGDATABASE=your_pg_database

ARCJET_KEY=your_arcjet_api_key
ARCJET_ENV=development

2. Install Dependencies
Run the following commands to install the required dependencies for both backend and frontend.

```
Install Backend Dependencies:
```
npm install

```
Change to the frontend directory and install the dependencies:
```
cd frontend
npm install

```
Run the Server
```
npm run dev
```
Run the Frontend
To run the frontend React app, use:
```
cd frontend
npm run dev
```

## 🚀 Deployment

### 1. **Backend Deployment on Render**

1. **Sign up on Render**: [Vercel Sign Up](https://render.com).
2. **Link GitHub Repo**: Create a new project and link your backend repository.
3. **Set Environment Variables**:
   - Add the following in Render settings:
     - `PORT=3000`
     - `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGDATABASE`
     - `ARCJET_KEY`, `ARCJET_ENV=development`


### 2. **Frontend Deployment on Render**

1. **Build the Project**:
   ```bash
   cd frontend
   npm install
   npm run build


👩‍💻 Contributing
Feel free to fork the repository and create pull requests for improvements, bug fixes, or new features. Please ensure that your code follows the existing code style
and includes appropriate tests.

Steps for contributing:
Fork the repository.

Create a feature branch.

Make your changes.

Submit a pull request with a detailed explanation of the changes.


























