import React,{useState,useEffect} from 'react';
import Home from './Home';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details';
import FormData from './FormData';

const App=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        async function  getData(){
            const res=await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
            console.log(res.data);

            setData(res.data);
           
        }
        getData();
    
    },[])
    return(
        <BrowserRouter>
        
        <h1 className="heading_style">ReactJS Developer Profile Assignment </h1> 
        <Routes>

            <Route path="/" element={<Home data={data}/>} />  
            <Route path="details/:id" element={<Details data={data}/>} /> 
            <Route path="book-now/:id" element={<FormData data={data}/>}/>

    
        </Routes>
      

        </BrowserRouter>
        
    )
}
export default App;