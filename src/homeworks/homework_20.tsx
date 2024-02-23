import React from "react";
import "./style.css";
function HW20 () {
    let firstName:string = "John";
    let lastName:string = " Doe";
    let job:string = "Software Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs: [string, string, string] = ["JavaScript", "Python", "Machine Learning"]; // tupel
    return (
        <div className="container-Wrapper">
            <div className="pesonalCard">
            <h2 className="name">{firstName} {lastName}</h2>
{/* we can also use table here */}
<ul className="lineSpace">
<li><span className="bold-text">Job:</span> {job}</li>
                    <li><span className="bold-text">Position:</span> {isManager ? 'Manager' : 'Employee'}</li>
                    <li><span className="bold-text">Experience:</span> {experience}</li>
                    <li><span className="bold-text">E-mail:</span> {email}</li>
                    <li><span className="bold-text">
                        Programming languages: </span> 
                        <ul>
                            {programLangs.map((lang, index) => (
                                <li key={index}>{lang}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>

        </div>

    );
}
export default HW20;