import React from 'react'
import axios from "axios";
import { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
//import { FaUser } from 'react-icons/fa6';
export default function Empdetails() {
  const [data,setData]=useState([]);
  const params=useParams();
  const {id}=params;
  //const eid=localStorage.getItem('id');
    React.useEffect(()=>{
        axios.get(`http://localhost:6600/empdetails/${id}`).then((res)=>{
        
           setData({fullname:res.data[0].fullname,email:res.data[0].email,password:res.data[0].password,id:res.data[0].id,phone:res.data[0].phone})
      })
    },[id])  
  return (
    <>
    <div style={{marginTop:'100px', height:'550px',width:'35%', border:'1px solid black',marginLeft:'32%'}}>
    <center>  <h2 style={{width:'100%',fontSize:'24px',borderBottom:'1px solid black',paddingBottom:'10px'}}>Employee Information</h2></center>
    <center style={{height:'100px',width:'100px',marginLeft:'180px'}}><img src='https://cdn0.iconfinder.com/data/icons/business-finance-flat-7/128/1_10-512.png' alt='user'height={'200px'} width={'200px'}/></center>
    <div style={{paddingLeft:'50px',fontSize:'20px',marginTop:'100px'}}>
      <center>
    <p style={{fontSize:'30px'}}>{data.fullname}</p>
      <p>Id: {data.id}</p>
    
    <p>Email: {data.email}
    </p>
    <p>Phone:{data.phone}</p>
    <button style={{height:'45px',width:'180px',background:'#4c7766',color:'white',marginLeft:'0px',fontSize:'18px',border:'none',marginTop:'10px',borderRadius:'5px'}}><Link style={{textDecoration:'none',color:'white'}} to={`/echangepassword/${id}`}>change password</Link></button>
    </center>
    </div>
    </div>
   
    </>
  )
}
