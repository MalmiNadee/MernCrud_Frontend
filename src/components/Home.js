import React,{useState,useEffect} from "react";
import axios from "axios";

const Home = ()=> {

    const [state,setState] = useState({
        posts: []
    })

    useEffect(() =>{
            axios.get("http://localhost:8060/post/")
            .then(res =>{
               if(res.data){
                setState({
                    posts:res.data
                })
               }
            })
        },[state]);

    //to delete a post
    const onDelete = (id) =>{
        axios.delete(`http://localhost:8060/post/delete/${id}`)
        .then((res) =>{
            alert("Deleted Successfully!!!");
        })
    }

    // to search a post
    const handleSearchArea = (e)  =>{
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8060/post/")
        .then((res) =>{
            if(res.data){
                filterData(res.data,searchKey)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    } 

    // to filter post
    function filterData(posts,searchKey){
        const result = posts.filter((post) =>
            post.topic.toLowerCase().includes(searchKey) ||
            post.description.toLowerCase().includes(searchKey) ||
            post.postCategory.toLowerCase().includes(searchKey)
        )
        setState({
            ...state,
            posts:result
          });
       
    }


   
    

    return(
        <div className="container">   
             <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
            <h1>All Posts</h1>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
                <input className="form-control" type="search" 
                placeholder="Search" name="searchQuery"
                onChange={handleSearchArea}>
                </input>
            </div>
         </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Description</th>
                        <th scope="col">Post Category</th>
                        <th scope="col">Action</th>    
                    </tr>
                </thead>
                <tbody>
                    {state.posts.map((posts,index)=>(
                        <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>
                                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                                    {posts.topic}</a></td>
                            <td>{posts.description}</td>
                            <td>{posts.postCategory}</td>
                            <td>
                                <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" onClick={() =>onDelete(posts._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-success">
                <a href="/add" style={{textDecoration:'none',color:'white'}}>
                    Create New Post
                </a>
            </button>
        </div>
    )

}

export default Home;
