# Getting Started with Create React App
Before running make sure you have done some settings.
1) Run the fallowing command to create folder structure for react js
```
npx create-react-app resume-builder
```
3) paste these folders there
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
In place of AI_API_KEY 
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
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
