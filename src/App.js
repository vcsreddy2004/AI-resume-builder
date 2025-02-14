import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import ViewResume from './components/view-resume';
import ResumeForm from './components/resume-form';
import Navbar from './components/navbar';
import Profile from './components/profile';
import LogIn from './components/login';
import Register from './components/register';
import ProtectedRoute from './components/protectedRoute';
import LogOut from './components/logout';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={LogIn}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/logout' Component={LogOut}></Route>
          <Route element={<ProtectedRoute/>}>
            <Route path='/login' element={<Navigate to="/profile" />}></Route>
            <Route path='/register' element={<Navigate to="/profile" />}></Route>
            <Route path='/' Component={ResumeForm}></Route>
            <Route path='/profile' Component={Profile}></Route>
            <Route path='/view-resume' Component={ViewResume}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
