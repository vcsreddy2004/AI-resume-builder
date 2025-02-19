import pdfLogo from "./../assets/pdf.png"
let ResumeList = () =>{
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card col-md-3 p-0 border-0">
                        <div className="card-header p-0">
                            <img src={pdfLogo} height='200px' className="col-md-10 m-0"  alt="pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}
export default ResumeList;