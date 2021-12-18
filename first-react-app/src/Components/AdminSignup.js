import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

const AdminSignup = () => {
    useEffect(() => {
        document.title = "Signup!"
      }, [])
    const [errorList,setError]= useState([]); 
    let[name, setName] = useState("");
    let[email, setEmail] =useState("");
    let[phone, setPhone] = useState("");
    let[username, setUsername] = useState("");
    let[password, setPassword] =useState("");
    let[password_confirmation, setPassword_confirmation] =useState("");
    let[dob, setDob] = useState("");
    let[gender, setGender] =useState("");
    let history = useHistory();

    const signupSubmit= ()=>{
        var obj = {name: name, email: email, phone: phone, username: username, password: password, password_confirmation: password_confirmation, dob: dob, gender: gender};
        console.log(obj);
        axios.post('/admin/signup', obj)
        .then(resp=>{
             console.log(resp.data);
             history.push("/login");
        })
        .catch(err=>{
            console.log(err);
            console.log(err.response.data.errors);
            setError(err.response.data.errors)
        });
        
    }


    return (
        <div>
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2>Admin Signup</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-7">
                                <form role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required 
                                            value={name} onChange={(e)=>setName(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.name}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required 
                                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.email}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone" required  
                                            value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.phone}</span>
                                    </div>
                                    <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="username" id="username" placeholder="Username"
                                         required  value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                         <span style={{color:'red'}}>{errorList.username}</span>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" required  
                                            value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.password}</span>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Retype Password" required  
                                            value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.password_confirmation}</span>
                                    </div><br/>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <label for="dob">Date of Birth</label>
                                            <input type="date" class="form-control" name="dob" id="dob" placeholder="Your Birth Date" required  
                                            value={dob} onChange={(e)=>setDob(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.dob}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <label for="gender">Gender</label><br />
                                            <input type="radio" id="male" name="gender" 
                                            value={'Male'} onChange={(e)=>setGender(e.target.value)}/>{" "}
                                            <label for="male">Male</label>{" "}
                                            <input type="radio" id="female" name="gender"  
                                            value={'Female'} onChange={(e)=>setGender(e.target.value)}/>{" "}
                                            <label for="female">Female</label>{" "}
                                            <input type="radio" id="other" name="gender"  
                                            value={'Other'} onChange={(e)=>setGender(e.target.value)}/>{" "}
                                            <label for="other">Other</label><br />{" "}
                                        <span style={{color:'red'}}>{errorList.gender}</span>
                                        </div>
                                    </div>
                                </form>
                                <div class="php-email-form"><button type="submit" onClick={signupSubmit}>Signup</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default AdminSignup;