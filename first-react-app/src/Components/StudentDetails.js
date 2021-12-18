import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails= () =>{
    const {name} = useParams();
    return(
        <h1 style={{ color: 'gray' }}>Student Details</h1>,
        <h1 style={{ color: 'gray' }}>Student Name: {name}</h1>
    )
}
export default StudentDetails;