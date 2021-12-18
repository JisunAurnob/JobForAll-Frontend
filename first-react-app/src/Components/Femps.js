import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Femps = () => {

    useEffect(() => {
        document.title = "Freelance Employers"
      }, [])
    const[femps, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("femp/list")
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
            <ul><center><h3>Freelance Employers</h3></center>
                {
                    femps.map(s=>(
                        <li key={s.Freelance_id}><hr/> Name: <Link style={{color:'#f08f11'}} to={"/femp/details/"+s.Freelance_id}>{s.Name} </Link><br/>
                        Email: {s.Email}<br/>
                        Phone: {s.Phone}<br/>
                        Username: {s.Username}<br/>
                        Address: {s.Address}<br/>
                        NID: {s.NID}<br/>
                        <br/>
                        <a class="button-update" href={"/femps/update/"+s.Freelance_id }>Update</a> {" "}
                        <a class="button-delete" href={"/femps/delete/"+s.Freelance_id }>Delete</a>
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

export default Femps;