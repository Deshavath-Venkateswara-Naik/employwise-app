# EmployWise - React User Management App

A simple React application integrated with the [Reqres API](https://reqres.in/) to demonstrate user authentication and user management functionalities.

---

## 🚀 Features

### ✅ Level 1: Login
- User login using Reqres credentials.
- API token is saved in localStorage.
- Redirects to user list page on success.

### ✅ Level 2: User List
- Displays a paginated list of users.
- Shows user’s first name, last name, and avatar.
- Pagination supported.

### ✅ Level 3: Edit / Delete Users
- Edit user’s name and email using a form.
- Delete a user from the list.
- Shows success/error messages for actions.

---

## 🔐 Test Login Credentials

employwise-app/ ├── public/ ├── src/ │ ├── api.js │ ├── App.js │ ├── index.js │ ├── pages/ │ │ ├── LoginPage.js │ │ ├── UsersPage.js │ │ └── EditUserPage.js │ └── components/ │ ├── Login.js │ ├── UserCard.js │ └── EditUserForm.js

---

## ▶️ Running Locally

1. Clone the repo  
```bash
git clone https://github.com/YOUR_USERNAME/employwise-app.git
cd employwise-app
