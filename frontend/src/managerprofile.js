import React from 'react'
import axios from "axios";
import { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
//import { FaUser } from 'react-icons/fa6';
export default function Mandetails() {
  const [data,setData]=useState([]);
  const params=useParams();
  const {id}=params;
  //const eid=localStorage.getItem('id');
    React.useEffect(()=>{
        axios.get(`http://localhost:6600/mandetails/${id}`).then((res)=>{
        
           setData({fullname:res.data[0].fullname,email:res.data[0].email,password:res.data[0].password,id:res.data[0].id,phone:res.data[0].phone,salary:res.data[0].salary})
      })
    },[id])  
  return (
    <>
    <div style={{marginTop:'100px', height:'600px',width:'35%', border:'1px solid black',marginLeft:'32%'}}>
    <center>  <h2 style={{width:'100%',fontSize:'24px',borderBottom:'1px solid black',paddingBottom:'10px'}}>Employee Information</h2></center>
    <center style={{height:'80px',width:'100px',marginLeft:'200px'}}><img src='https://cdn3.iconfinder.com/data/icons/black-easy/512/538474-user_512x512.png' alt='user'height={'150px'} width={'150px'}/></center>
    <div style={{paddingLeft:'50px',fontSize:'20px',marginTop:'100px'}}>
      <center>
    <p style={{fontSize:'30px'}}>{data.fullname}</p>
      <p>Id: {data.id}</p>
    
    <p>Email: {data.email}
    </p>
    <p>Phone:{data.phone}</p>
    <p>salary:{data.salary}</p>
    <button style={{height:'45px',width:'180px',background:'#4c7766',color:'white',marginLeft:'0px',fontSize:'18px',border:'none',marginTop:'10px',borderRadius:'5px'}}><Link style={{textDecoration:'none',color:'white'}} to={`/echangepassword/${id}`}>change password</Link></button>
    </center>
    </div>
    </div>
   
    </>
  )
}
