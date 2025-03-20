import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import LogOut from './components/logout';
import ProtectedRoute from './components/protectedRoute';
import React, { Suspense } from 'react';
const LogIn = React.lazy(() => import("./components/login"));
const Register = React.lazy(() => import("./components/register"));
const Profile = React.lazy(() => import("./components/profile"));
const ResumeForm = React.lazy(() => import("./components/resume-form"));
const ViewResume = React.lazy(() => import("./components/view-resume"));
const ResumeList = React.lazy(() => import("./components/resumeList"));
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<div className="d-flex align-items-center justify-content-center vh-100"><div className="spinner-border text-success display-1"></div></div>}>
          <Routes>
            <Route path='/logout' element={<LogOut />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<ResumeForm />} />
              <Route path='/profile' element={<Profile />} />
              <Route exact path='/view-resume/:resumeId' element={<ViewResume />} />
              <Route path='/resume-list' element={<ResumeList />} />
            </Route>
            <Route path='*' element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
