import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    
    useEffect(() => {
        document.title = "Dashboard"
      }, [])
      var aa = JSON.parse(localStorage.getItem('user'));
      const[dashData, setMessages] = useState([]);
      const [lastPost,setPost]= useState([]);
      const[date, setDate]=useState("");
      const[time, setTime]=useState("");
      useEffect(()=>{
        axios.get("admin/dash")
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
        setPost(resp.data.latestPost);
        setDate(resp.data.latestPost.created_at);
        setTime(resp.data.latestPost.created_at);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return(
            <div>
                <section id="contact" class="contact">
                <div class="container"><br/><br/>
                <center><h3 style={{color:'#1c0869'}}>Admin Dashboard</h3></center>
                <p style={{color:'#5a046e'}}>Total Admins: {dashData.admins}</p>
                <p style={{color:'#04362d'}}>Total Corporate Employers: {dashData.cemps}</p>
                <p style={{color:'#5a046e'}}>Total Freelance Employers: {dashData.femps}</p>
                <p style={{color:'#04362d'}}>Total Job Seekers: {dashData.seekers}</p>
                <p style={{color:'#5a046e'}}>Total Users: {dashData.seekers+dashData.femps+dashData.cemps+dashData.admins}</p>
                <p style={{color:'#04362d'}}>Total Posted Jobs: {dashData.posts}</p>
                
                
                <hr/><h4 style={{color:'#16a4a6', fontWeight: 'bold'}}>Last Post</h4><div style={{float: 'right'}}>
                <p style={{color:'#3aad0c'}}>Posted At <br/>Date: {date.substring(0, 10)}<br/>
                Time: {time.substring(11, 19)}</p>     
                <a class="button-update" href="/post/list" role="button">Show All Posts</a></div><br/>Title: <Link style={{color:'#f08f11'}} to={"/posts/details/"+lastPost.Post_id}>{lastPost.Post_Title} </Link><br/>
                Salary: {lastPost.Salary}
                
                        <br/>Posted By: {lastPost.Posted_By}<br/> Post Status: <p style={ lastPost.Post_Status=="Approved" ? { color:'#2cbf51',  display:'inline'} : 
                        lastPost.Post_Status=="Rejected" ? { color:'red',  display:'inline'} :
                        lastPost.Post_Status=="Pending" ? { color:'#8ba807',  display:'inline'} : {}}> {lastPost.Post_Status}</p>
                        <hr/>
                </div>
                </section>
            </div>
    )
}

export default AdminDashboard;