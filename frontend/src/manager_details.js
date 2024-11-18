import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'
 import { useParams } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
//import { Link } from 'react-router-dom';
export default function ManagerDetails() {
   
    const params=useParams();
    const {fullname}=params;
  //const del = ((id) => {
    //axios.post(`http://localhost:6600/delrec/${id}`).then((res) => {

       // alert("record deleted successfully");

   // }
   // )
//})
const [data, setData] = useState([]);
useEffect(() => {
    axios.get(`http://localhost:6600/managerteam/${fullname}`)
        .then((res) => {
            if (res !== '') {
                setData(res.data);
            }
            else {
                console.log("data error")
            }
        })
}, [fullname]);
return (
    <>
        <div className='table'>
            <h1 style={{ height: '70px', paddingTop: '50px', marginLeft: '30px',paddingBottom:'-50px' }}>Employees 
            <span className='searchbar'>
                        <input type='text' placeholder='search' />
                        <span style={{ fontSize: "22px" }}><IoSearchSharp /></span >
                    </span>
                    </h1>
            <hr/>
            <table width='100%' marginLeft='10%' style={{fontSize:'18px',marginLeft:'20px'}}>
                <tr style={{ height: '80px'}}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Designation</th>
                    <th>Reportedto</th>
                    <th>Action</th>

                </tr>

                {data.map(item => (
                    <tr style={{ height: '80px', width: '100%', textAlign: 'center' }}>

                        <td>{item.id}</td>
                        <td>{item.fullname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.designation}</td>
                        <td>{item.reportedto}</td>
                        <td><button style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'70px',fontSize:'15px'}}>Edit</button>&nbsp; <button style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'80px',fontSize:'15px'}}>Delete</button></td>
                        <hr />
                    </tr>

                ))}
            </table>
        </div>
    </>
)
};


