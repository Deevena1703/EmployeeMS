import React from 'react'
import { FaEnvelope, FaFemale, FaLock, FaMale, FaPhoneAlt, FaUser } from 'react-icons/fa'
import './employee_register.css';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdAssignmentInd } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa6';
import { useState} from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function ManagerRegister(){
    const [data, setData] = useState({fullname:'',email:'',password:'',phone:'',designation:'',reportedto:'',doj:'',gender:''});
    const [val, setVal] = useState([]);
    const handler = (e) => {
        const { name, value } = e.target
        setData((prevstate) =>
        ({
            ...prevstate, [name]: value
        }))
    }
    
    const nav=useNavigate();
    const submithandler = (e) => {
        e.preventDefault();
        const details = {fullname: data.fullname, email: data.email, password: data.password,phone:data.phone, department: data.department, experience:data.experience, doj: data.doj, gender: data.gender }
    
            axios.post('http://localhost:6600/managerregister', details).then((err,res) => {
                if (res !== '') {
                    alert(' registration successful');
                    nav('/managers')
                    setVal(val + 1);
                }
                else
                {
                    console.log(err);
                }
            });
        }
        


  return (
    <body className='body'>
   
    <form className='main' method='post' onSubmit={submithandler}  key={val} >
    <div className='box'>
        <h1 className='heading'>Manager Register</h1>
        <div className='inputs'>
            <div className='input' >
               
                <FaUser/>
                
                <input type='text' name="fullname"  placeholder='fullname' onChange={handler}/>
                
                

                </div>
            <div className='input'>
                <label><FaEnvelope/></label><input type='email' onChange={handler} name='email' autoComplete='none' placeholder='Email'/>
            </div>
            <div className='input'>
                <FaLock/><input type='password' onChange={handler}  name='password' placeholder='password'/>
            </div>
            <div className='input'>
                <FaPhoneAlt/><input type='text' onChange={handler} name='phone' placeholder='phone Number'/>
            </div>
            
            <div className='input'>
                <BsPersonWorkspace/><input type='text' onChange={handler} name='department' placeholder='Department'/>
            </div>
           
            <div className='input'>
                <MdAssignmentInd/><input type='text' onChange={handler} name='experience' placeholder='Experience'/>
            </div>
           
            <div className='input'>
                <FaCalendar /><input type='date' onChange={handler} name='doj' placeholder='Date of joining'/>
            </div>
            <div className='gender'>
                <label>Gender</label>
                <FaMale/><input type='radio'  value={'male'} onChange={handler} name='gender' />
                <FaFemale/><input type='radio' value={'female'} onChange={handler} name='gender' />
            </div>
            <div className='text'><input type='checkbox' required/>
            <span>I agree all terms and conditions</span></div>
            <div className='btn'>
           <button type='submit' >Register</button>
           </div>
        </div>
       
                </div>
                
</form>
</body>
  )
}
