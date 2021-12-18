import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"

const AdminProfileUpdate = () => {
    const {id} = useParams();
    useEffect(() => {
        document.title = "Update profile"
      }, [])
    const[profile, setMessages] = useState([]);
//Getting profile Data From Database
    useEffect(()=>{
        axios.get("admin/edit/"+id)
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    //-------------------------------------------------------------------------------
    //posting Updated Data
    const [errorList,setError]= useState([]); 
    let[Name, setName] = useState("");
    let[Email, setEmail] =useState("");
    let[Phone, setPhone] = useState("");
    let[Username, setUsername] = useState("");
    let[Dob, setDob] = useState("");
    let[Gender, setGender] =useState("");
    let history = useHistory();

    const updateprofile= ()=>{
        if(Name==""){
            Name = profile.Name;
        }
        if(Email==""){
            Email = profile.Email;
        }
        if(Phone==""){
            Phone = profile.Phone;
        }
        if(Username==""){
            Username = profile.Username;
        }
        if(Dob==""){
            Dob = profile.Dob;
        }
        if(Gender==""){
            Gender = profile.Gender;
        }
        var obj = {Admin_id: profile.Admin_id, Name: Name, Email: Email, Phone: Phone, Username: Username, Dob: Dob, Gender: Gender};
        console.log(obj);
        axios.post('/admin/edit', obj)
        .then(resp=>{
             console.log(resp.data);
             history.push("/admin/dashboard");
        })
        .catch(err=>{
            console.log(err);
            console.log(err.response.data.errors);
            setError(err.response.data.errors)
        });
        
    }
//--------------------------------------------------------------------------------------------

    return (
        <div>
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2>Admin Profile Update</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-7">
                                <form role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                        <label style={{color:'#b38505'}} for="Name">Name</label>
                                            <input type="text" class="form-control" name="Name" id="Name" placeholder="Your Name" 
                                            defaultValue={profile.Name} onChange={(e)=>setName(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Name}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Email">Email</label>
                                            <input type="text" class="form-control" name="Email" id="Email" placeholder="Your Email" 
                                            defaultValue={profile.Email} onChange={(e)=>setEmail(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Email}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                    <label style={{color:'#b38505'}} for="Phone">Phone</label>
                                    <input type="text" class="form-control" name="Phone" id="Phone" placeholder="profile Description Needed"  
                                            defaultValue={profile.Phone} onChange={(e)=>setPhone(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Phone}</span>
                                    </div>
                                    <div class="form-group mt-3">
                                    <label style={{color:'#b38505'}} for="Username">Username</label>
                                    <input type="text" class="form-control" name="Username" id="Username" placeholder="Username Is Required"
                                         defaultValue={profile.Username} onChange={(e)=>setUsername(e.target.value)}/>
                                         <span style={{color:'red'}}>{errorList.Username}</span>
                                    </div><br/>
                                    <br/>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <label style={{color:'#b38505'}} for="Dob">Date Of Birth</label>
                                            <input type="date" class="form-control" name="Dob" id="Dob" placeholder="Birth Date Required" required  
                                            defaultValue={profile.Dob} onChange={(e)=>setDob(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Dob}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Gender">Gender</label>
                                            <select name="Gender" class="form-control" onChange={(e)=>setGender(e.target.value)}>
                                            <option value="Male" selected={profile.Gender == "Male"}>Male</option>
                                            <option value="Female" selected={profile.Gender == "Female"}>Female</option>
                                            <option value="Other" selected={profile.Gender == "Other"}>Other</option>
                                            </select>
                                            <span style={{color:'red'}}>{errorList.Gender}</span>
                                        </div>
                                        <br/><br/><br/><br/>
                                    </div>
                                </form>
                                <button class="button-update" onClick={updateprofile}>Update!</button>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default AdminProfileUpdate;