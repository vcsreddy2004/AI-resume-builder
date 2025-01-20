import { useState } from "react";

let ResumeForm = () => {
    let [resumeData,setResumeData] = useState({
        name:"",
        email:"",
        phNumber:"",
        programingLanguages:"",
        techStack:"",
        masterType:"",
        masterCollageName:"",
        masterBranch:"",
        masterResultType:'',
        masterResults:"",
        bachelorType:"",
        bachelorCollageName:"",
        bachelorBranch:"",
        bachelorResultType:"",
        bachelorResult:"",
        diplomaType:"",
        diplomaCollageName:"",
        diplomaBranch:"",
        diplomaResultType:"",
        diplomaResult:"",
    });
    let [showMasters,setShowMasters] = useState(null);
    let handleCheckboxChange = (event) => {
        setShowMasters((prev)=>!prev);
    }
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
            <pre>{JSON.stringify(resumeData)}</pre>
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
                                            <input type="text" name="name" onChange={updateResumeData} placeholder="Enter your name" className="col-md-12" />
                                            &nbsp;
                                        </td>
                                        <td>
                                            <span>Phone Nummber <br /></span>
                                            <input type="number" name="phNumber" onChange={checkPhoneNumber} placeholder="Enter your Phone number" className="col-md-12" />
                                            <span id="phNumberCount">{resumeData.phNumber.length}</span>/10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Email <br /></span>
                                            <input type="email" name="email" onChange={updateResumeData} placeholder="Enter your email address" className="col-md-12" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="card col-md-12">
                            <div className="card-header bg-dark text-white">
                                Skills
                            </div>
                            <div className="card-body">
                                <table className="col-md-12">
                                    <tr>
                                        <td className="col-md-6">
                                            <span>Programming Languages <br /></span>
                                            <input type="text" name="programingLanguages" onChange={updateResumeData} placeholder="ex:- c,c++,java..." className="col-md-12" />
                                        </td>
                                        <td>
                                            <span>Tech Stack <br /></span>
                                            <input type="text" name="techStack" onChange={updateResumeData} placeholder="ex:- Django, spring boot..." className="col-md-12" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Tools <br /></span>
                                            <input type="text" name="tools" onChange={updateResumeData} placeholder="ex:- git,jira,ubantu..." className="col-md-12" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="card col-md-12">
                            <div className="card-header bg-dark text-white">
                                Education
                            </div>
                            <div className="card-body">
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="showMastersCheckbox"
                                        checked={showMasters}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className="form-check-label" htmlFor="showMastersCheckbox">
                                        Show Masters Section
                                    </label>
                                </div>
                                {showMasters && (
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            Masters
                                        </div>
                                        <div className="card-body">
                                            <table className="col-md-12">
                                                <tr>
                                                    <td className="col-md-6">
                                                        <span>Type <br /></span>
                                                        <select name="masterType" onChange={updateResumeData} className="col-md-12">
                                                            <option value="" disabled selected>
                                                                Select your degree
                                                            </option>
                                                            <option value="MTech">MTech</option>
                                                            <option value="MSc">MSc</option>
                                                            <option value="MBA">MBA</option>
                                                            <option value="MA">MA</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <span>collage Name <br /></span>
                                                        <input type="text" name="masterCollageName" onChange={updateResumeData} className="col-md-12" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>Branch <br /></span>
                                                        <input type="text" name="masterBranch" onChange={updateResumeData} className="col-md-12" />
                                                    </td>
                                                    <td> 
                                                        <input type="radio" id="CGPA" name="masterResultType" value="CGPA" onChange={updateResumeData} />
                                                        <label htmlFor="CGPA">CGPA</label>
                                                        <input type="radio" id="percentage" name="masterResultType" value="Percentage" onChange={updateResumeData} />
                                                        <label htmlFor="percentage">Percentage</label>
                                                        <input type="email" name="masterResults" onChange={updateResumeData} className="col-md-12" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                )}
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        Bachelors
                                    </div>
                                    <div className="card-body">
                                        <table className="col-md-12">
                                            <tr>
                                                <td className="col-md-6">
                                                    <span>Type <br /></span>
                                                    <select name="bachelorType" onChange={updateResumeData} className="col-md-12">
                                                        <option value="" disabled selected>
                                                            Select your bachelor's degree
                                                        </option>
                                                        <option value="BTech">BTech</option>
                                                        <option value="BSc">BSc</option>
                                                        <option value="BBA">BBA</option>
                                                        <option value="BA">BA</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <span>collage Name <br /></span>
                                                    <input type="text" name="bachelorCollageName" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Branch <br /></span>
                                                    <input type="text" name="bachelorBranch" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                                <td> 
                                                    <input type="radio" id="CGPA" name="bachelorResultType" value="CGPA" onChange={updateResumeData} />
                                                    <label htmlFor="CGPA">CGPA</label>
                                                    <input type="radio" id="percentage" name="bachelorResultType" value="Percentage" onChange={updateResumeData} />
                                                    <label htmlFor="percentage">Percentage</label>
                                                    <input type="email" name="bachelorResult" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        Diploma / Intermediate
                                    </div>
                                    <div className="card-body">
                                        <table className="col-md-12">
                                            <tr>
                                                <td className="col-md-6">
                                                    <span>Type <br /></span>
                                                    <select name="diplomaType" onChange={updateResumeData} className="col-md-12" >
                                                        <option value="" disabled selected>
                                                            Select your bachelor's degree
                                                        </option>
                                                        <option value="Diploma">Diploma</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <span>collage Name <br /></span>
                                                    <input type="text" name="diplomaCollageName" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>Branch <br /></span>
                                                    <input type="text" name="diplomaBranch" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                                <td> 
                                                    <input type="radio" id="CGPA" name="diplomaResultType" value="CGPA" onChange={updateResumeData} />
                                                    <label htmlFor="CGPA">CGPA</label>
                                                    <input type="radio" id="percentage" name="diplomaResultType" value="Percentage" onChange={updateResumeData} />
                                                    <label htmlFor="percentage">Percentage</label>
                                                    <input type="email" name="diplomaResult" onChange={updateResumeData} className="col-md-12" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ResumeForm