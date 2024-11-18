import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FaEnvelope, FaFemale, FaLock, FaMale, FaPhoneAlt, FaUser } from 'react-icons/fa'
import './employee_register.css';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdAssignmentInd } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
export default function Empupdate() {
    const [data,setData]=useState([]);
    const params=useParams();
    const {id}=params;
    const [val, setVal] = useState([]);
    const nav=useNavigate();
    const handler = (e) => {
      const { name, value } = e.target
  
      setData((prevstate) =>
          ({ ...prevstate, [name]: value }))
  }
  const update=(e)=>{
    e.preventDefault();
   const details={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
        phone:data.phone,
        designation:data.designation,
        reportedto:data.reportedto,
        doj:data.doj,
        gender:data.gender
        
    }
    axios.post(`http://localhost:6600/employeeupdate/${id}`,details).then((res)=>{
        if(res!==''){
            alert("data updated successfully");
            setVal(val+1);
            nav('/employees')
        
        }
        else{
          alert("error");
          console.log('error')
        }
      }
    )
  }

      
  

  React.useEffect(()=>{
    axios.get(`http://localhost:6600/employeedata/${id}`).then((res)=>{
       setData({fullname: res.data[0].fullname,email: res.data[0].email,password: res.data[0].password,phone:res.data[0].phone,reportedto:res.data[0].reportedto,designation:res.data[0].designation,doj:res.data[0].doj,gender:res.data[0].gender})
    })
  },[id])  

  const [data1, setData1] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:6600/getmanager")
          .then((res) => {
              if (res !== '') {
                  setData1(res.data);
              }
              else {
                  console.log("data error")
              }
          })
  }, []);
  return (
    <>
    <body className='body'>
       
    <form className='main' method='post'  key={val}>
        <div className='box'>
            <h1 className='heading'> Employee Update</h1>
            <div className='inputs'>
                <div className='input' >
                   
                    <FaUser/>
                    
                    <input type='text' name="fullname"  placeholder='fullname' onChange={handler} value={data.fullname}/>
                    
                    
    
                    </div>
                <div className='input'>
                    <label><FaEnvelope/></label><input type='email' value={data.email} onChange={handler} name='email' autoComplete='none' placeholder='Email'/>
                </div>
                <div className='input'>
                    <FaLock/><input type='password' onChange={handler} value={data.password} name='password' placeholder='password'/>
                </div>
                <div className='input'>
                    <FaPhoneAlt/><input type='text' onChange={handler} value={data.phone} name='phone' placeholder='phone Number'/>
                </div>
                
                <div className='input'>
                    <BsPersonWorkspace/><input type='text' onChange={handler} value={data.designation} name='designation' placeholder='Designation'/>
                </div>
               
                <div className='input'>
                    <MdAssignmentInd/>
                    
                    <select name='reportedto' value={data.reportedto} onChange={handler}  >
                        <option style={{color:'gray'}}>Reported To</option>
                        {data1.map((item)=>(
                        
                            <option value={item.fullname} >{item.fullname}</option>
                            
                            
                        ))}
                        </select>
                        
                   
                </div>
               
                <div className='input'>
                    <FaCalendar /><input type='date' onChange={handler} value={data.doj} name='doj' placeholder='Date of joining'/>
                </div>
                <div className='gender'>
                    <label>Gender</label>
                    <FaMale/><input type='radio'  value={'male'}  onChange={handler} name='gender' />
                    <FaFemale/><input type='radio' value={'female'} onChange={handler} name='gender' />
                </div>
                <div className='text'><input type='checkbox' required/>
                <span>I agree all terms and conditions</span></div>
                <div className='btn'>
               <button onClick={update} >Register</button>
               </div>
            </div>
           
                    </div>
                    
    </form>
    </body>
    </>
  )
}

