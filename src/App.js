import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ViewResume from './components/view-resume';
import ResumeForm from './components/resume-form';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ResumeForm}></Route>
        </Routes>
        <Routes>
          <Route path='/view-resume' Component={ViewResume}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
