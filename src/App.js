import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import Resume from './components/resume';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className='w-full'>
      <PDFViewer width="100%" height="700px">
        <Resume title='resume'></Resume>
      </PDFViewer>
    </div>
  );
}

export default App;
