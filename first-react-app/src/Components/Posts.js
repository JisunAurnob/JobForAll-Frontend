import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {

    useEffect(() => {
        document.title = "All Jobs"
      }, [])
    const[posts, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("posts/list")
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
            <ul>
                {
                    posts.map(p=>(
                        <li key={p.Post_id}><hr/> Title: <Link style={{color:'#f08f11'}} to={"/posts/details/"+p.Post_id}>{p.Post_Title} </Link><br/>Salary: {p.Salary}
                        <br/>Posted By: {p.Posted_By}<br/> Post Status: <p style={ p.Post_Status=="Approved" ? { color:'green',  display:'inline'} : 
                        p.Post_Status=="Rejected" ? { color:'red',  display:'inline'} :
                        p.Post_Status=="Pending" ? { color:'#8ba807',  display:'inline'} : {}}> {p.Post_Status}</p><br/><br/>
                        <a class="button-update" href={"/posts/update/"+p.Post_id}>Update</a>
                        {" "}<a class="button-delete" href={"/post/delete/"+p.Post_id}>Delete</a><hr/></li>
                    ))
                }
            </ul>
            </div>
            </section>
        </div>
    )
}

export default Posts;