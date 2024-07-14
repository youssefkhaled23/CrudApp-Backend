# CRUD App with Node.js, Express, and Static Data

## Overview

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and Express. The application manages a collection of items using static data.

## Features

- Create new items
- Read existing items
- Update existing items
- Delete items

## Requirements

- Node.js (version 12 or later)
- npm (version 6 or later)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/youssefkhaled23/CrudApp-Backend.git
    cd CrudApp-Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### Create an Item
- **URL:** `/api/courses`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "title": "course title",
        "price": "course price"
    }
    ```
- **Success Response:**
    - **Code:** `201`
    - **Content:** `{"message": "course Add successfully", "course": { ... }}`

### Read All Items
- **URL:** `/api/courses`
- **Method:** `GET`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `[{"id": 1, "name": "title", "price"}, {...}]`

### Read a Single Item
- **URL:** `/api/courses/:id`
- **Method:** `GET`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{"id": 1, "name": "title", "price"}`

### Update an Item
- **URL:** `/api/courses/:id`
- **Method:** `PATCH`
- **Body:**
    ```json
    {
        "title": "Updated Title",
        "description": "Updated Price"
    }
    ```
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{"message": "Course updated successfully", "item": { ... }}`

### Delete an Item
- **URL:** `/api/courses/:id`
- **Method:** `DELETE`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{"message": "course deleted successfully"}`

## Static Data

The static data is stored in the `data/items.js` file. You can modify this file to add, update, or delete items.

## Project Structure

```
crud-app-nodejs-express-static/
├── data/
│   └── items.js
├── routes/
│   └── items.js
├── app.js
├── package.json
├── .env
└── README.md
```

- `data/items.js`: Contains the static data for the items.
- `routes/items.js`: Defines the API routes for the items.
- `indedx.js`: Main application file.
- `package.json`: Contains the project dependencies and scripts.

## License

This project is licensed under the MIT License.

---

Feel free to customize this template to match the specifics of your project.
