import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPost = () =>{

    const params = useParams();

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
   
    
    const data = {
      topic: topic,
      description: description,
      postCategory: postCategory
    }
      //to update post
    axios.put(`http://localhost:8060/post/update/${params.id}`,data)
    .then((res)=>{
      alert("Post Updated Successfully!!!");
      if(res.data.success){
        setState({
          topic: "",
          description: "",
          postCategory: ""
        })
      }
      
    })
    
  }

  useEffect(() => {
    axios.get(`http://localhost:8060/post/get/${params.id}`)
    .then((res) =>{
        if(res.data){
            setState({
                topic : res.data.topic,
                description : res.data.description,
                postCategory : res.data.postCategory
            })
        }
    })
  },[params.id]);

    return(
        <div className="container">
           <center><h2>Edit Post</h2></center>
      <form onSubmit={onSubmit}>
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

      <button className="btn btn-success" type="submit" >
      <i >&nbsp; Update</i></button>
    </form>
     </div>
    )
}

export default EditPost;
