# To-Do List API with Authentication (Login & Register)

This is a RESTful API built with **Node.js** and **Express.js** that provides user authentication (login and register) and management of personal to-do lists. Authentication is handled using **JWT (JSON Web Tokens)**.

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Authentication](#authentication)
    - [Register](#register)
    - [Login](#login)
3. [To-Do Management](#to-do-management)
    - [Create To-Do](#create-to-do)
    - [Get To-Do List](#get-to-do-list)
    - [Get Single To-Do](#get-single-to-do)
    - [Update To-Do](#update-to-do)
    - [Delete To-Do](#delete-to-do)
4. [Authentication Tokens](#authentication-tokens)
5. [Error Responses](#error-responses)

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
     http://localhost:3000/api
   ```

