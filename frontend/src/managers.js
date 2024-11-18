import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';

export default function Manager() {

    const del = ((id) => {
        axios.post(`http://localhost:6600/delrec/${id}`).then((res) => {

            alert("record deleted successfully");

        }
        )
    })
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/managerlist")
            .then((res) => {
                if (res !== '') {
                    setData(res.data);
                }
                else {
                    console.log("data error")
                }
            })
    }, []);


    return (
        <>
            <div className='table'>
                <h1 className='header'>Managers
                <span className='searchbar' > <input type='text' placeholder='search' /><span style={{fontSize:"22px"}}><IoSearchSharp /></span ></span> 
               
               
      
                     <button id='rbutton'><Link to='/manager_register' style={{textDecoration:'none',color:'white'}}>Add a candidate</Link></button></h1>
                <hr/>
                <table width='100%' marginLeft='10%' style={{fontSize:'18px',marginLeft:'20px'}}>
                  <tr style={{ height: '80px'}}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Action</th>

                    
                    </tr>

                    {data.map(item => (
                        <tr style={{ height: '80px', width: '100%', textAlign: 'center' }}>

                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.department}</td>
                            <td>{item.experience}</td>
                            <td><button style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'70px',fontSize:'15px'}}><Link to={`/manager_update/${item.id}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>&nbsp; <button onClick={()=>del(item.id)} style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'80px',fontSize:'15px'}}>Delete</button></td>
                            <hr />
                        </tr>

                    ))}
                </table>
            </div>
        </>
    )
};
