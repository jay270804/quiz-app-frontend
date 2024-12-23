
# Quiz App Frontend

This repository contains the frontend for the Quiz App, built using React.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later recommended)
- npm or yarn

## Getting Started

Follow the steps below to set up and run the frontend locally.

### 1. Clone the Repository

```bash
git clone https://github.com/jay270804/quiz-app-frontend.git
```

### 2. Navigate to the Project Directory

```bash
cd quiz-app-frontend
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 4. Configure Environment Variables(Optional)
NOTE: The backend url is hardcoded as http://localhost:8000/api/ in `services/api.js`   
If you want to change it simply change the value of hardcoded url in api.js to `REACT_APP_API_BASE_URL`  
Create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_API_BASE_URL=http://localhost:8000/api/
```

Update the `REACT_APP_API_BASE_URL` if your backend runs on a different URL.

### 5. Start the Development Server

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

This will start the development server, and you can access the app at `http://localhost:3000`.

## Build for Production

To create an optimized production build:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The production-ready files will be available in the `build` directory.

## Additional Notes

- Ensure the backend is running and accessible at the URL configured in the `.env` file.
- To reset the dependencies, you can delete the `node_modules` folder and reinstall dependencies using `npm install` or `yarn install`.
