import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./resume";
let ViewResume = ()=>{
    return (
        <PDFViewer width="100%" height="700px">
            <Resume title='resume'></Resume>
        </PDFViewer>
    );
}
export default ViewResume;