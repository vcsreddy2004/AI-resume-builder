import pdfLogo from "./../assets/pdf.png"
let ResumeList = () =>{
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card col-md-3 p-0 border-3 shadow-lg mx-3">
                        <div className="card-header row p-0 align-items-center m-0">
                            <img src={pdfLogo} height='50px' className="col-md-2 m-0 p-0" alt="pdf" />
                            <div className="col-md-10 justify-content-center">
                                <span className="text-center">Resume Title</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={pdfLogo} height='200px' className="col-md-12 m-0 p-5" alt="pdf" />
                        </div>
                    </div>
                    <div className="card col-md-3 p-0 border-3 shadow-lg mx-3">
                        <div className="card-header row p-0 align-items-center m-0">
                            <img src={pdfLogo} height='50px' className="col-md-2 m-0 p-0" alt="pdf" />
                            <div className="col-md-10 justify-content-center">
                                <span className="text-center">Resume Title</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={pdfLogo} height='200px' className="col-md-12 m-0 p-5" alt="pdf" />
                        </div>
                    </div>
                    <div className="card col-md-3 p-0 border-3 shadow-lg mx-3">
                        <div className="card-header row p-0 align-items-center m-0">
                            <img src={pdfLogo} height='50px' className="col-md-2 m-0 p-0" alt="pdf" />
                            <div className="col-md-10 justify-content-center">
                                <span className="text-center">Resume Title</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={pdfLogo} height='200px' className="col-md-12 m-0 p-5" alt="pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ResumeList;