import React from 'react';

const Student = (props) => {
    return(
        <div>
        <h4>Student</h4>
        <p>Name: {props.name} <br/> ID: {props.id} <br/> CGPA: {props.cgpa}</p>
    </div>
    )
}

export default Student;