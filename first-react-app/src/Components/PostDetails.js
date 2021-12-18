import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetails = (props) =>{
    const {id} = useParams();
    useEffect(() => {
        document.title = "Detailed Posts"
      }, [])
    const[post, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("post/"+id)
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    // const sDataStyle={
    //     backgroundColor: "#7badd1",
    //     color:"#fff",
    //     padding: "10px",
    // }
    return(
        <div>
            <section id="contact" class="contact">
                <div class="container"><br/><br/>
            <h5 style={{color:'#664411', display:'inline'}}>Title: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Post_Title}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Post Description: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Post_Description}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Job Requirement: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Job_Requirement}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Salary: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Salary}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Vacancy: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Vacancy}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Employment Status: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Employment_Status}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Workplace: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Workplace}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Compensation: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Compensation}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Job Location: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Job_Location}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Deadline: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Deadline}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Posted By: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Posted_By}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Job Type: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.userType}</h5><hr/>
            <h5 style={{color:'#664411', display:'inline'}}>Post Status: </h5><h5 style={{color:'#045869', display:'inline'}}>{post.Post_Status}</h5><hr/>
                        <a class="button-update" href={"/posts/update/"+post.Post_id}>Update</a>
                        {" "}<a class="button-delete" href={"/post/delete/"+post.Post_id}>Delete</a>
            </div>
            </section>
        </div>
    )
}
export default PostDetails;