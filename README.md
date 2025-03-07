# AI Resume Builder

## Overview  
AI Resume Builder is a web application that allows users to create and customize resumes with an intuitive interface. Users can enter their details and generate a professional resume in minutes. The project consists of a **React.js frontend** and a **Node.js backend** with MongoDB for data storage.

### **Key Features**
- Create and edit resumes dynamically.
- Save and manage multiple resumes.
- Download resumes as PDFs.
- AI-powered suggestions for resume content (via OpenRouter API).

# Getting Started with Create React App
Fallow these steps to set up and run the project.

## Prerequisites
Before running the project, ensure you have the fallowing installed:

Node.js (Download from [here](https://nodejs.org/en/download))

npm (Comes with Node.js)
## Project Setup
1) Open main directory and run the fallowing command to install dependancies.
```
npm install
```
2) create a .env file and write the fallowing code.
```
REACT_APP_BACKEND_URL=http://127.0.0.1:5500
```
3) create another .env file in router folder and write the fallowing code
```
PORT = 5500
MONGO_DB_URL = "mongodb://localhost:27017/react-resume-builder"
SECRETE_KEY = "<Write randomised collections of charecters and numbers"
AI_API_KEY = "<place your API KEY>"
```
In place of AI_API_KEY .
  ### login to [openRouter](https://openrouter.ai/).
  ### It is a platform where one API key is used to access thousand's of models.
  ### Create an API key and paste there.
4) Now You can start project by fallowing command.
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


5) Start backend by opening command prompt in router folder and paste the fallowing command
```
npm start
```
The page will reload when you make changes.

# Sample images how project looks like

![project 4](https://github.com/user-attachments/assets/e0fb06d8-1004-4de6-85f0-b6123f3d92bc)
![project 3](https://github.com/user-attachments/assets/ae2a9c1f-f039-42ba-a8ea-000dc086fc63)
![project 1](https://github.com/user-attachments/assets/989ddb48-3923-4c2e-9c77-def6cb5e887b)
![project 2](https://github.com/user-attachments/assets/3639dd28-f0a5-4987-a2d0-8077ac9166ce)
