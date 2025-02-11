import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ViewResume from './components/view-resume';
import ResumeForm from './components/resume-form';
import Navbar from './components/navbar';
import Profile from './components/profile';
import LogIn from './components/login';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ResumeForm}></Route>
        </Routes>
        <Routes>
          <Route path='/view-resume' Component={ViewResume}></Route>
        </Routes>
        <Routes>
          <Route path='/login' Component={LogIn}></Route>
        </Routes>
        <Routes>
          <Route path='/profile' Component={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
