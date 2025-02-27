# AI Resume Builder

## Overview  
AI Resume Builder is a web application that allows users to create and customize resumes with an intuitive interface. Users can enter their details and generate a professional resume in minutes. The project consists of a **React.js frontend** and a **Node.js backend** with MongoDB for data storage.

### **Key Features**
- Create and edit resumes dynamically.
- Save and manage multiple resumes.
- Download resumes as PDFs.
- AI-powered suggestions for resume content (via OpenRouter API).

# Getting Started with Create React App
Follow these steps to set up and run the project.

## Prerequisites
Before running the project, ensure you have the following installed:

Node.js (Download from [here](https://nodejs.org/en/download))

npm (Comes with Node.js)
## Project Setup
1) Run the fallowing command to create folder structure for react js.
```
npx create-react-app resume-builder
```
3) paste these folders there.
4) run the fallowing command to install dependancies.
```
npm install
```
3) create a .env file in router folder and write the fallowing code

```
HOST_NAME = "127.0.0.1"
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
