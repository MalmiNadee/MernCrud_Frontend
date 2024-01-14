import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () =>{
    const params = useParams();

    const [state,setState] = useState ({
        posts : []
    })

    useEffect(() => {
        axios.get(`http://localhost:8060/post/get/${params.id}`)
        .then((res) =>{
            if(res.data){
               setState({
                    posts:res.data
                });
                
            }
        })
        
    },[params.id]);
   

    return(

        <div style={{marginTop:'20px'}}>
            <center> <h1>Post Details</h1></center>
            <h4>{state.posts.topic}</h4>
           
            <hr/>

            <d1 className="row">
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{state.posts.description}</dd>

                <dt className="col-sm-3">Post Category</dt>
                <dd className="col-sm-9">{state.posts.postCategory}</dd>
            </d1>
          
        </div>
    )
}

export default PostDetail;