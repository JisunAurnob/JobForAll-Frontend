import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"

const UpdatePost = () => {
    const {id} = useParams();
    useEffect(() => {
        document.title = "Update Post"
      }, [])
    const[post, setMessages] = useState([]);
//Getting Post Data From Database
    useEffect(()=>{
        axios.get("post/"+id)
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    //-------------------------------------------------------------------------------
    //Posting Updated Data
    const [errorList,setError]= useState([]); 
    let[Post_Title, setPost_Title] = useState("");
    let[Post_Description, setPost_Description] =useState("");
    let[Job_Requirement, setJob_Requirement] = useState("");
    let[Salary, setSalary] = useState("");
    let[Vacancy, setVacancy] =useState("");
    let[Employment_Status, setEmployment_Status] =useState("");
    let[Workplace, setWorkplace] = useState("");
    let[Compensation, setCompensation] = useState("");
    let[Job_Location, setJob_Location] = useState("");
    let[Deadline, setDeadline] = useState("");
    let[Post_Status, setPost_Status] =useState("");
    let history = useHistory();

    const updatePost= ()=>{
        if(Post_Title==""){
            Post_Title = post.Post_Title;
        }
        if(Post_Description==""){
            Post_Description = post.Post_Description;
        }
        if(Job_Requirement==""){
            Job_Requirement = post.Job_Requirement;
        }
        if(Salary==""){
            Salary = post.Salary;
        }
        if(Vacancy==""){
            Vacancy = post.Vacancy;
        }
        if(Employment_Status==""){
            Employment_Status = post.Employment_Status;
        }
        if(Workplace==""){
            Workplace = post.Workplace;
        }
        if(Compensation==""){
            Compensation = post.Compensation;
        }
        if(Job_Location==""){
            Job_Location = post.Job_Location;
        }
        if(Deadline==""){
            Deadline = post.Deadline;
        }
        if(Post_Status==""){
            Post_Status = post.Post_Status;
        }
        var obj = {id: post.Post_id, Post_Title: Post_Title, Post_Description: Post_Description, Job_Requirement: Job_Requirement, Salary: Salary, Vacancy: Vacancy, Employment_Status: Employment_Status, Workplace: Workplace, 
            Compensation: Compensation, Job_Location: Job_Location, Deadline: Deadline, Post_Status: Post_Status};
        console.log(obj);
        axios.post('/post/update', obj)
        .then(resp=>{
             console.log(resp.data);
             history.push("/post/list");
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
                        <h2>Update Post</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-7">
                                <form role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                        <label style={{color:'#b38505'}} for="Post_Title">Post Title</label>
                                            <input type="text" class="form-control" name="Post_Title" id="Post_Title" placeholder="Post Title" 
                                            defaultValue={post.Post_Title} onChange={(e)=>setPost_Title(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Post_Title}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Salary">Salary</label>
                                            <input type="text" class="form-control" name="Salary" id="Salary" placeholder="Salary" 
                                            defaultValue={post.Salary} onChange={(e)=>setSalary(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Salary}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                    <label style={{color:'#b38505'}} for="Post_Description">Post Description</label>
                                        <textarea class="form-control" name="Post_Description" id="Post_Description" placeholder="Post Description Needed"  
                                            defaultValue={post.Post_Description} onChange={(e)=>setPost_Description(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Post_Description}</span>
                                    </div>
                                    <div class="form-group mt-3">
                                    <label style={{color:'#b38505'}} for="Job_Requirement">Job Requirement</label>
                                    <textarea class="form-control" name="Job_Requirement" id="Job_Requirement" placeholder="Job Requirement Needed"
                                         defaultValue={post.Job_Requirement} onChange={(e)=>setJob_Requirement(e.target.value)}/>
                                         <span style={{color:'red'}}>{errorList.Job_Requirement}</span>
                                    </div><br/>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                        <label style={{color:'#b38505'}} for="Vacancy">Vacancy</label>
                                            <input type="text" name="Vacancy" class="form-control" id="Vacancy" placeholder="Vacancy" required 
                                            defaultValue={post.Vacancy} onChange={(e)=>setVacancy(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Vacancy}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Employment_Status">Employment Status</label>
                                            
                                            <select name="Employment_Status" class="form-control" onChange={(e)=>setEmployment_Status(e.target.value)}>
                                            <option value="Full Time" selected={post.Employment_Status == "Full Time"}>Full Time</option>
                                            <option value="Part Time" selected={post.Employment_Status == "Part Time"}>Part Time</option>
                                            <option value="Freelance" selected={post.Employment_Status == "Freelance"}>Freelance</option>
                                            </select>
                                            <span style={{color:'red'}}>{errorList.Employment_Status}</span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <label style={{color:'#b38505'}} for="Deadline">Deadline</label>
                                            <input type="date" class="form-control" name="Deadline" id="Deadline" placeholder="Deadline For Application" required  
                                            defaultValue={post.Deadline} onChange={(e)=>setDeadline(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Deadline}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Workplace">Workplace</label>
                                            <select name="Workplace" class="form-control" onChange={(e)=>setWorkplace(e.target.value)}>
                                            <option value="Office" selected={post.Workplace == "Office"}>Office</option>
                                            <option value="Work From Home" selected={post.Workplace == "Work From Home"}>Work From Home</option>
                                            <option value="Mixed" selected={post.Workplace == "Mixed"}>Mixed</option>
                                            </select>
                                            <span style={{color:'red'}}>{errorList.Workplace}</span>
                                        </div>
                                        <br/><br/><br/><br/><br/>
                                        <div class="row">
                                        <div class="col-md-6 form-group">
                                        <label style={{color:'#b38505'}} for="Posted_By">Posted By</label>
                                            <input type="text" name="Posted_By" class="form-control" id="Posted_By" 
                                            value={post.Posted_By} readOnly/>
                                            <span style={{color:'red'}}>{errorList.Posted_By}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Post_Status">Post Status</label>
                                            
                                            <select name="Post_Status" class="form-control" onChange={(e)=>setPost_Status(e.target.value)}>
                                            <option style={{color:'green'}} value="Approved" selected={post.Post_Status == "Approved"}>Approved</option>
                                            <option style={{color:'red'}} value="Rejected" selected={post.Post_Status == "Rejected"}>Rejected</option>
                                            <option style={{color:'skyblue'}} value="Pending" selected={post.Post_Status == "Pending"}>Pending</option>
                                            </select>
                                            <span style={{color:'red'}}>{errorList.Post_Status}</span>
                                        </div><br/><br/><br/><br/>
                                        <div class="col-md-6 form-group">
                                        <label style={{color:'#b38505'}} for="Compensation">Compensation</label>
                                            <input type="text" name="Compensation" class="form-control" id="Compensation" placeholder="Compensation Required" required 
                                            defaultValue={post.Compensation} onChange={(e)=>setCompensation(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Compensation}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label style={{color:'#b38505'}} for="Job_Location">Job Location</label>
                                            <input type="text" class="form-control" name="Job_Location" id="Job_Location" placeholder="Job Location" required 
                                            defaultValue={post.Job_Location} onChange={(e)=>setJob_Location(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.Job_Location}</span>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                <button class="button-update" onClick={updatePost}>Update!</button>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default UpdatePost;