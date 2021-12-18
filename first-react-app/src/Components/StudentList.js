import React from "react";
import Student from './Student';

const StudentList = () => {
    return(
        <div>
        <section id="students" class="students">
        <div class="container">
            <br/>
        <h1>Student List</h1>
        <Student name="Jisun Aurnob" id="19-40318-1" cgpa="3.87"/>
        <Student name="Hamid Uddin" id="19-40318-1" cgpa="3.99"/>
        <Student name="Ariyan Jahangir" id="19-40318-1" cgpa="4.00"/>
        </div>
        </section>
        </div>
    )
}

export default StudentList;