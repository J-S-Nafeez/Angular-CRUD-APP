# ✅ Full Stack MEAN Project: People Manager Application

## 🚀 Overview

This is a full-stack CRUD (Create, Read, Update, Delete) application built using the MEAN stack:

- **Frontend**: Angular 8 (Single Page Application with Reactive Forms)
- **Backend**: Node.js with Express
- **Database**: MongoDB (Local or Atlas)
- **API Testing**: Thunder Client / Postman

---

## 👨‍💻 FRONTEND — Angular 8

### 📌 Project Title: People Manager Angular App

A single-page Angular application to manage a list of people using standard CRUD operations.

### 🎯 Features

- ✅ Display all people (List View)
- ✏️ Edit person details
- 🗑️ Delete a person with confirmation
- ⚡ Reactive forms with validations
- 🧭 Angular routing for navigation
- 📱 Mobile-responsive layout
- 🔄 Integration with RESTful API

### 🛠️ Technologies Used

| Technology       | Description                        |
|------------------|------------------------------------|
| Angular 8        | Frontend framework                 |
| TypeScript       | Language used with Angular         |
| Angular CLI      | Angular command line interface     |
| Reactive Forms   | For form validation and control    |
| CSS              | Styling the components             |
| Angular Routing  | SPA page routing/navigation        |
| HTTPClient       | To connect to backend REST API     |

### 📸 Screenshots

> _Include screenshots here for:_
> - List View
> - Edit Person
> - Confirm Delete

### 🔗 API Integration (Frontend ↔ Backend)

| HTTP Method | Endpoint         | Action            |
|-------------|------------------|-------------------|
| GET         | `/person`        | Fetch all persons |
| PUT         | `/person/:id`    | Update a person   |
| DELETE      | `/person/:id`    | Delete a person   |

### 🚀 How to Run the Frontend Locally

```bash
# Clone the repository
git clone https://github.com/your-username/people-manager-angular.git
cd people-manager-angular

# Install dependencies
npm install

# Run Angular app
ng serve
Open your browser at: http://localhost:4200
⚠️ Ensure the backend is running at http://localhost:3000

📂 Folder Structure
src/
├── app/
│   ├── components/
│   │   ├── people-list/
│   │   ├── edit-person/
│   │   └── confirm-delete/
│   ├── services/
│   │   └── person.service.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
✍️ Author
Shaik Nafeez
📧 Email: ahamednafeez70@gmail.com
🔗 www.linkedin.com/in/jammalamadugu-shaik-nafeez
 • GitHub:https://github.com/J-S-Nafeez/

###🔧 BACKEND — Node.js + Express + MongoDB
📌 Project Title: People Manager REST API
A backend REST API for managing person data, built using Express.js and MongoDB with Mongoose.

🎯 Features
✅ Create a new person

📋 Get all persons

✏️ Update existing person

🗑️ Delete a person

🧩 MongoDB integration with Mongoose

🔐 CORS enabled for Angular communication

🛠️ Technologies Used
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Server framework
MongoDB	NoSQL database
Mongoose	ODM for MongoDB
CORS	Cross-Origin Resource Sharing
Body-Parser	To parse request body
🔗 API Endpoints
Method	Route	Description
GET	/person	List all persons
POST	/person	Add a new person
PUT	/person/:id	Update existing person
DELETE	/person/:id	Delete a person by ID
📥 Sample JSON for POST Request
{
  "name": "Shaik Nafeez",
  "age": 23,
  "gender": "Male",
  "mobile": "9876543210"
}
⚙️ How to Run the Backend Locally
# Clone the repository
git clone https://github.com/your-username/people-manager-api.git
cd people-manager-api

# Install dependencies
npm install

# Start the server
node server.js
The API will be running at: http://localhost:3000
⚠️ Ensure MongoDB is running at mongodb://127.0.0.1:27017/personDB

🧪 How to Test API (Postman / Thunder Client)
🔸 GET All Persons
GET http://localhost:3000/person
🔸 POST a New Person
POST http://localhost:3000/person
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "age": 25,
  "gender": "Male",
  "mobile": "1234567890"
}
🔸 PUT (Update Person)
PUT http://localhost:3000/person/<person_id>
🔸 DELETE a Person
DELETE http://localhost:3000/person/<person_id>
📂 Folder Structure
people-manager-api/
├── models/
│   └── person.js
├── routes/
│   └── person.js
├── server.js
└── package.json
🗃️ Database Model (Mongoose Schema)
const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobile: String
});
✍️ Author
Shaik Nafeez
📧 Email: nafeezshaik@example.com
🔗 LinkedIn • GitHub

✅ Thank you for checking out this MEAN stack project! Contributions and feedback are welcome. Happy coding!


---

Let me know if you'd like me to create a downloadable `README.md` file or include live links for LinkedIn/GitHub.

