import React from 'react'
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Mchangepassword() {
    const params=useParams();
  const {id}=params;
  const [val,setVal]=useState([]);
  const [data,setData]=useState([]);
  const handler = (e) => {
    const { name, value } = e.target

    setData((prevstate) =>
        ({ ...prevstate, [name]: value }))
  }
const nav=useNavigate();
    const changepassword=(e)=>{
      e.preventDefault();
     const details={
          currentpassword:data.currentpassword,
          newpassword:data.newpassword,
          password:data.password
          
          
      }
      
      axios.post(`http://localhost:6600/manchangepassword/${id}`,details).then((res)=>{
          if(res!==''){
              alert("password changed successfully");
              setVal(val+1);
              nav(`/employee_details/${id}`)
          
          }
          else{
            alert("wrong password");
            console.log('error')
          }
        }
      )
    
    }
  
  return(
<>
<form method='post' onSubmit={changepassword} key={val}>
<div style={{height:'450px',width:'450px',background:'whitesmoke',borderRadius:'20px',marginTop:'200px',marginLeft:'35%',boxShadow:'2px 2px 2px grey'}}>

  <h1 style={{height:"50px",paddingTop:'20px',paddingLeft:'40px'}}>change password</h1>
  <hr/>
  <div  style={{background:'whitesmoke',marginLeft:'20px',marginTop:'30px'}}>
                   <label style={{fontSize:'20px',paddingLeft:'10px',fontWeight:'bold'}}> <FaLock />current password</label><br/><input style={{height:'50px',borderRadius:'5px',background:'whitesmoke',width:'90%',marginTop:'10px',border:'none',boxShadow:'2px 2px 2px grey'}} type='password' onChange={handler}   name='currentpassword'  placeholder='Current password'  />
</div>
<div  style={{background:'whitesmoke',marginLeft:'20px',marginTop:'30px'}}>
                   <label style={{fontSize:'20px',paddingLeft:'10px',fontWeight:'bold'}}> <FaLock/>New password</label><br/><input style={{height:'50px',borderRadius:'5px',background:'whitesmoke',width:'90%',marginTop:'10px',border:'none',boxShadow:'2px 2px 2px grey'}} type='password' onChange={handler}  name='newpassword' placeholder='New password'  />
</div>
<button style={{height:'50px',width:'90%',background:'#4c7766',color:'white',border:'none',marginLeft:'22px',fontSize:'20px',fontWeight:'bold',marginTop:'50px'}} type='submit' >change</button>
</div>
</form>
</>  
)
}
