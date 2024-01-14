import React, { useState } from "react";
import axios from 'axios'; //handle http request through backend

  const AddPost =() => {

  //create states
  const [state,setState] = useState({
    topic:"",
    description:"",
    postCategory:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;

    setState({
      ...state,
      [name]:value
    })
  }

  //after click submit button this function have to execute
  const onSubmit = (e)=> {
    e.preventDefault(); 

    const {topic,description,postCategory} = state;
   
    //create js object
    const newPost = {
      topic: topic,
      description: description,
      postCategory: postCategory
    }
   

    //to add post
    axios.post("http://localhost:8060/post/add",newPost)
    .then((res)=>{
      alert("Post Added!!!");
      //clear data after added
      if(res.data.success){
        setState({
          topic: "",
          description: "",
          postCategory: ""
        })
      }
      
    })
    

   // console.log(newPost);  display data in console


  }
  

  return (
   
    <div className="container">
    <br/><br/>

      <div className="mb-3 mt-3">
      <label htmlFor="topic">Topic:</label><br/>
      <input type="text" name="topic" className="form-control" placeholder="Enter Topic Here"
       value={state.topic}
      onChange={handleChange}/>
     <br/><br/>
      </div>

      <div className="form-group">
      <label htmlFor="description">Description:</label><br/>
      <input type="text" name="description" className="form-control"  placeholder="Enter Description Here"
       value={state.description}
      onChange={handleChange}/>
     <br/><br/>

      </div>
      <div className="form-group">
      <label htmlFor="postCategory">Post Category:</label><br/>
      <input type="text" name="postCategory" className="form-control"  placeholder="Enter Category Here"
       value={state.postCategory}
      onChange={handleChange}/>
     <br/><br/>
      </div>

      <button className="btn btn-success" type="submit" onClick={onSubmit} >
      <i >&nbsp; Submit</i></button>
    
      </div>

   
  )
}

export default AddPost;