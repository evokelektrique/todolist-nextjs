# Next.js Frontend Application for Laravel Todo List API

This is a Next.js frontend application that interacts with the Laravel Todo List API. The application allows users to manage their tasks by creating, updating, and deleting them. It also provides authentication features for user registration and login.

## Getting Started

To get started with this Next.js application:

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the project dependencies.
3. Create a `.env.development` file and configure your API endpoints, such as the Laravel API base URL. For example:

```env
API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Start the development server by running npm run dev. The application will be accessible at <http://localhost:3000>.

## Features

### User Authentication

The application provides user registration and login features to interact with the Laravel API.

### Todo List Management

Users can view their tasks, create new tasks, update existing tasks, and delete tasks through the frontend connected to the Laravel Todo List API.

### Components and Pages

The project structure is organized into components and pages to provide a clear separation of concerns for UI elements and routing.

### API Interaction

The application uses Axios, a popular HTTP client, to interact with the Laravel Todo List API. The Axios configuration can be found in the lib/axios.js file.

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow. Contributions and bug reports are welcome.
License

This project is licensed under the MIT License. See the LICENSE file for details.