import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Seekers = () => {

    useEffect(() => {
        document.title = "Job Seekers"
      }, [])
    const[seekers, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("seeker/list")
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
        
    return(
        <div>
            <section id="contact" class="contact">
                <div class="container"><br/><br/>
            <ul><center><h3>Job Seekers</h3></center>
                {
                    seekers.map(s=>(
                        <li key={s.Seeker_id}><hr/> Name: <Link style={{color:'#f08f11'}} to={"/seeker/details/"+s.Seeker_id}>{s.Name} </Link><br/>
                        Email: {s.Email}<br/>
                        Phone: {s.Phone}<br/>
                        Username: {s.Username}<br/>
                        Dob: {s.Dob}<br/>
                        <br/>
                        <a class="button-update" href={"/seekers/update/"+s.Post_id}>Update</a> {" "}
                        <a class="button-delete" href={"/post/delete/"+s.Post_id}>Delete</a>
                        <hr/>
                        </li>
                    ))
                }
            </ul>
            </div>
            </section>
        </div>
    )
}

export default Seekers;