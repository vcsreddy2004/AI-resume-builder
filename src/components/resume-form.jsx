import { useState } from "react";

let ResumeForm = () => {
    let [resumeData,setResumeData] = useState({
        name:"",
        email:"",
        phNumber:""
    });
    let checkPhoneNumber = (event) => {
        if(event.target.value.length!==10)
        {
            document.querySelector("#phNumberCount").classList.remove("text-success");
            document.querySelector("#phNumberCount").classList.add("text-danger");
        }
        else
        {
            document.querySelector("#phNumberCount").classList.remove("text-danger");
            document.querySelector("#phNumberCount").classList.add("text-success");
        }
        setResumeData((state)=>({
            ...state,
            phNumber:event.target.value
        }));
    }
    let updateResumeData = (event) => {
        setResumeData((state)=>({
            ...state,
            [event.target.name]:event.target.value,
        }));
    }
    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-header">
                        Resume Form
                    </div>
                    <div className="card-body">
                        <div className="card col-md-12">
                            <div className="card-header bg-dark text-white">
                                Personal data
                            </div>
                            <div className="card-body">
                                <table className="col-md-12">
                                    <tr>
                                        <td className="col-md-6">
                                            <span>Name <br /></span>
                                            <input type="text" name="name" onChange={updateResumeData} className="col-md-12" />
                                            &nbsp;
                                        </td>
                                        <td>
                                            <span>Phone Nummber <br /></span>
                                            <input type="number" name="phNumber" onChange={checkPhoneNumber} className="col-md-12" />
                                            <span id="phNumberCount">{resumeData.phNumber.length}</span>/10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Email <br /></span>
                                            <input type="email" name="email" onChange={updateResumeData} className="col-md-12" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ResumeForm