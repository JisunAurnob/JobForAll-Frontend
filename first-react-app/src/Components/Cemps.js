import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cemps = () => {

    useEffect(() => {
        document.title = "Corporate Employers"
      }, [])
    const[cemps, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("cemp/list")
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
            <ul><center><h3>Corporates Employers</h3></center>
                {
                    cemps.map(s=>(
                        <li key={s.Corporate_id}><hr/> Company Name: <Link style={{color:'#f08f11'}} to={"/corporates/details/"+s.Corporate_id}>{s.CompanyName} </Link><br/>
                        Company Address: {s.CompanyAddress}<br/>
                        Trade License: {s.TradeLicense}<br/>
                        Email: {s.Email}<br/>
                        Phone: {s.Phone}<br/>
                        Username: {s.Username}<br/>
                        Website: {s.Website}<br/>
                        <br/>
                        <a class="button-update" href={"/cemps/update/"+s.Corporate_id }>Update</a> {" "}
                        <a class="button-delete" href={"/cemps/delete/"+s.Corporate_id }>Delete</a>
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

export default Cemps;