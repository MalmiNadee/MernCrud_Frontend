import './App.css';
import Header from './components/header';
import axios from 'axios';
import AddPost from './components/AddPost';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './components/Home';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';



//import CounterClass from './components/CounterClass'; //import class component and path
//import CounterFunction from './components/CounterFunction';  //import functional component and path


const App =() => {
  return (
      <BrowserRouter>
      <div >
      <Header/>
      <Routes>
        <Route path="/add" element={<AddPost/>}></Route>
        <Route path="/edit/:id" element={<EditPost/>}></Route>
        <Route path="/post/:id" element={<PostDetail/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        
      
      </Routes>  

      </div>
     
      
      </BrowserRouter>

   
   
    //<CounterClass/>
    //<CounterFunction/>
  );
}

export default App;
