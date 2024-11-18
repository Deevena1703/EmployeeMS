import React from 'react'
import { useState } from 'react';
import { GiTakeMyMoney } from "react-icons/gi";
import './employee_register.css'
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Mansalary() {
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
    const salaryupdate=(e)=>{
      e.preventDefault();
     const details={
          salary:data.salary
          
          
      }
      axios.post(`http://localhost:6600/managersalaryupdate/${id}`,details).then((res)=>{
          if(res!==''){
              alert("salary updated successfully");
              setVal(val+1);
              
          nav('/salary');
          }
          else{
            alert("error");
            console.log('error')
          }
        }
      )
    }
  
    React.useEffect(()=>{
      axios.get(`http://localhost:6600/managerdata/${id}`).then((res)=>{
         setData({salary: res.data[0].salary})
      })
    },[id]) 
  return (
<>
<form method='post' onSubmit={salaryupdate} key={val}>
<div style={{height:'350px',width:'450px',background:'whitesmoke',borderRadius:'20px',marginTop:'200px',marginLeft:'35%',boxShadow:'2px 2px 2px grey'}}>

  <h1 style={{height:"50px",paddingTop:'20px',paddingLeft:'40px'}}>Update salary<GiTakeMyMoney /></h1>
  <hr/>
  <div  style={{background:'whitesmoke',marginLeft:'20px',marginTop:'30px'}}>
                   <label style={{fontSize:'20px',paddingLeft:'10px',fontWeight:'bold'}}> <FaRegMoneyBillAlt />Previous Salary</label><br/><input style={{height:'50px',borderRadius:'5px',background:'whitesmoke',width:'90%',marginTop:'10px',border:'none',boxShadow:'2px 2px 2px grey'}} type='number'  value={data.salary} name='salary' placeholder='Previous salary' onChange={handler} />
</div>

<button style={{height:'50px',width:'90%',background:'#4c7766',color:'white',border:'none',marginLeft:'22px',fontSize:'20px',fontWeight:'bold',marginTop:'50px'}} type='submit' >Update</button>
</div>
</form>
</>
  )
}
