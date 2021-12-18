import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminProfile = (props) =>{
    const {id} = useParams();
    useEffect(() => {
        document.title = "Detailed Posts"
      }, [])
    const[profile, setMessages] = useState([]);

    useEffect(()=>{
        axios.get("admin/edit/"+id)
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
            <h4 style={{color:'#664411', display:'inline'}}>Admin ID: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Admin_id}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Name: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Name}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Email: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Email}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Phone: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Phone}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Username: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Username}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Dob: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Dob}</h4><hr/>
            <h4 style={{color:'#664411', display:'inline'}}>Gender: </h4><h4 style={{color:'#045869', display:'inline'}}>{profile.Gender}</h4><hr/>
                        <a class="button-update" href={"/admin/profile/update/"+profile.Admin_id}>Update Profile</a>
            </div>
            </section>
        </div>
    )
}
export default AdminProfile;