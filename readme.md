# TODO List API with Authentication (Login & Register)

This is a RESTful API built with **Node.js** and **Express.js** that provides user authentication (login and register) and management of personal to-do lists. Authentication is handled using **JWT (JSON Web Tokens)**.

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Authentication](#authentication)
    - [Register](#register)
    - [Login](#login)
3. [TODO](#TODO)
    - [Create TODO](#create-to-do)
    - [Get TODO List](#get-to-do-list)
    - [Get Single TODO](#get-single-to-do)
    - [Update TODO](#update-to-do)
    - [Delete TODO](#delete-to-do)
    - [Delete All TODO](#delete-all-to-do)


---

## Installation & Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine
- A **MongoDB** database (or any other database) for storing user and to-do data

### Steps

1. **Clone the Repository**  
   Clone the project to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-api.git
   ```

2. **Install Dependencies**  
   Clone the project to your local machine:

   ```bash
       npm install
   ```

3. **Environment Variables**  
   Create a .env file in the root of the project and set the following environment variables:

   ```bash
      PORT=3000
      JWT_KEY=your_JWT_KEY
      DB_URL=mongodb://localhost:27017/todo-db
   ```

4. **Run the Application**  
   Start the development server:

   ```bash
      npm start
   ```

5. **Access API**  
   The API will be running at:

   ```bash
     http://localhost:3000/todos
   ```

## Authentication

### Register

- Endpoint: POST /auth/regis
- Description: Registers a new user.

  Request Body :
  ```bash
     {
        "email": "<example@example.com>",
        "password": "password123"
     }

  ```

  Response Body :
  - Status Code : 201
  ```bash
    {
        message: "berhasil register"
    }
  ```

  Error Response :
    - Status Code : 400
  ```bash
    {
        "message": "Email sudah terdaftar"
    }
  ```

### Login

- Endpoint: POST /auth/login
- Description: Login 

  Request Body :

  ```bash
     {
        "email": "<example@example.com>",
        "password": "password123"
     }

  ```

  Response Body :
  - Status Code : 201

  ```bash
    {
        message: "berhasil Login"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        "message": "tidak ada email yg didaftarkan"
    }
  ```

  - Status Code : 401

  ```bash
    {
        "message": "password yg diberikan salah"
    }
  ```

## TODO


### Get TO-DO List

- Endpoint: GET /todos
- Description: get all data todo


  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditemukan",
          "data":[]
    }
  ```

### Create To-Do

- Endpoint: POST /todos
- Description: create 1 data todo

  Request Body :

  ```bash
     {
        "title": "lorem ipsum",
        "description": "lorem ipsum",
        "completed":false  
    }
  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditambahkan"
    }
  ```

### Get Single TO-DO

- Endpoint: GET /todos/{id}
- Description: get single data

  Request Body :

  ```bash
     {
        "email": "<example@example.com>",
        "password": "password123"
     }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "1 Data todo berhasil ditemukan",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
         message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

### Update TO-DO

- Endpoint: PUT /todos/{id}
- Description: edit 1 data

  Request Body :

  ```bash
    {
      "title": "lorem ipsum",
      "description": "lorem ipsum",
      "completed":true
    }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Data berhasil diubah",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

### Delete TO-DO

- Endpoint: DEL /todos/{id}
- Description: delete 1 data


  Response Body :
  - Status Code : 200

  ```bash
    {
        message: "Data berhasil dihapus"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

### Delete ALL TO-DO

- Endpoint: DEL /todos
- Description: delete all data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Semua data todo berhasil dihapus"
    }
  ```
