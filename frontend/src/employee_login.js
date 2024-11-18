import React from 'react'
import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa'
import './employee_register.css'
import { useNavigate } from 'react-router-dom';
export default function Loginpage() {
    const nav = useNavigate();
    const [data, setData] = useState({ email: '', password: '', role: '' });
    //const [val, setVal] = useState([]);



    const handler = (e) => {
        const { name, value } = e.target

        setData((prevstate) =>
            ({ ...prevstate, [name]: value }))
    }

    const submit = (e) => {
        e.preventDefault();

        const details = { email:data.email, password: data.password };

        axios.post('http://localhost:6600/adminLogin', details)
            .then((res) => {
                if (res && res.data && res.data.length > 0) {
                    localStorage.setItem('email', res.data[0].email);
                    localStorage.setItem('role', res.data[0].role);

                    if (res.data[0].role === 'admin') {
                        alert('Admin login successful');
                        nav('/admin_dashboard');
                        
                    }
                }

                    else {
                        return axios.post('http://localhost:6600/managerLogin', details);
                    }
                
                
            })
            .then((res) => {
                if (res && res.data && res.data.length > 0) {
    
                    localStorage.setItem('role', res.data[0].role);
                    localStorage.setItem('email',res.data[0].email)
                    localStorage.setItem('id',res.data[0].id);
                    localStorage.setItem('fullname',res.data[0].fullname);
                    if (res.data[0].role === 'manager') {
                        alert('Manager login successful');
                        nav('/manager_dashboard');
                        
                    }
                }
                    
                 else {
                    return axios.post('http://localhost:6600/employeeLogin', details);
                }
            
            })
            .then((res) => {
                if (res && res.data && res.data.length > 0) {
                    localStorage.setItem('id',res.data[0].id);
                    localStorage.setItem('email', res.data[0].email);
                    localStorage.setItem('role', res.data[0].role);
                    if (res.data[0].role === 'employee') {
                        alert('Employee login successful');
                        nav('/emp_dashboard');
                        
                    }
                }
            })
            .catch((error) => {
                console.error("Error in login request:", error);
                
            });
    };
    return (
        <>
            <body className='body'>
                <form method="post" id="form"  className='main'  style={{ height: '320px', width: '400px',marginTop:'200px',borderRadius:'10px' }}>
                    <div>
                        <h1 className='heading'>Login</h1>

                        <div className='input'>
                            <label><FaEnvelope /></label><input type='email' onChange={handler} name='email' autoComplete='none' placeholder='Email' />
                        </div>
                        <div className='input'>
                            <FaLock /><input type='password' name='password' onChange={handler} placeholder='password' />
                        </div>
                        <div className='btn'>
                            <button onClick={submit}>Login</button>
                        </div>
                    </div>
                </form>
            </body>
        </>
    )
}
