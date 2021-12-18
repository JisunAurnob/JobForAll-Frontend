import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 import { useHistory } from "react-router-dom"

const PostDelete = (props) =>{
    const {id} = useParams();
    //const[post, setMessages] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        if(axios.get("post/delete/"+id)){
            history.push("/post/list");
        }
    },[]);

    return(
        <div>
        </div>
    )
}
export default PostDelete;