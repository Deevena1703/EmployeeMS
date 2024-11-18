import React from 'react'
import { useState,useEffect} from 'react';
import axios from "axios";
import { FaEnvelope, FaFemale, FaLock, FaMale, FaPhoneAlt, FaUser } from 'react-icons/fa'
import './employee_register.css';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdAssignmentInd } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import { PiX } from 'react-icons/pi';
//import { Form,InputGroup} from 'react-bootstrap';

export default function Register() {
    const nav=useNavigate();
    const [data, setData] = useState({fullname:'',email:'',password:'',phone:'',designation:'',reportedto:'',doj:'',gender:''});
    const [val, setVal] = useState([]);
    const handler = (e) => {
        const { name, value } = e.target
        setData((prevstate) =>
        ({
            ...prevstate, [name]: value
        }))
    }
    const submithandler = (e) => {
        e.preventDefault();
        const details = {fullname: data.fullname, email: data.email, password: data.password,phone:data.phone, designation: data.designation, reportedto:data.reportedto, doj: data.doj, gender: data.gender }
    
            axios.post('http://localhost:6600/empregister', details).then((err,res) => {
                if (res !== '') {
                    alert(' registration successful');
                    setVal(val + 1);
                    nav('/employees')
                }
                else
                {
                    console.log(err);
                }
            });
        }
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
       
    <form className='main' method='post' onSubmit={submithandler}  key={val}>
        <div className='box'>
            <h1 className='heading'> Employee Register</h1>
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
                    <BsPersonWorkspace/><input type='text' onChange={handler} name='designation' placeholder='Designation'/>
                </div>
               
                <div className='input'>
                    <MdAssignmentInd/>
                    
                    <select name='reportedto'  onChange={handler}  >
                        <option style={{color:'gray'}}>Reported To</option>
                        {data1.map((item)=>(
                        
                            <option value={item.fullname} >{item.fullname}</option>
                            
                            
                        ))}
                        </select>
                        
                   
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
    </>
  )
}
