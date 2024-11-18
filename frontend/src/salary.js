
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,  } from 'react-router-dom';
export default function Salary() {


    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/salarylist")
            .then((res) => {
                if (res !== '') {
                    setData(res.data);
                }
                else {
                    console.log("data error")
                }
            })
    }, []);

    const [data1, setData1] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/managerlist")
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
        <div style={{display:'flex'}}>
            <div style={{ marginTop: '100px', background: 'whitesmoke', height: '100%', width: '40%', marginLeft: '8%', borderRadius: '20px' ,marginBottom:'100px'}}>
            <h1 style={{ height: '50px', paddingTop: '30px', marginLeft: '30px' }}> Employee Salaries</h1>
                <hr/>
                <table width='100%' marginLeft='10%' style={{fontSize:'18px',marginLeft:'20px'}}>
                    <tr style={{ height: '80px'}}>
                        <th>Id</th>
                        <th>Name</th>
                        
                        <th>Designation</th>
                        <th>salary</th>
                        <th>Action</th>

                    </tr>

                    {data.map(item => (
                        <tr style={{ height: '80px', width: '100%', textAlign: 'center' }}>

                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                    
                            <td>{item.designation}</td>
                            <td>{item.salary}</td>
                            <td><button style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'80px',fontSize:'15px'}}><Link to={`/empsalary_update/${item.id}`} style={{textDecoration:'none',color:'white'}}>Increment</Link></button>&nbsp; </td>
                            <hr />
                        </tr>

                    ))}
                </table>
            </div>

            <div style={{ marginTop: '100px', background: 'whitesmoke', height: '100%', width: '40%', marginLeft: '8%', borderRadius: '20px' ,marginBottom:'100px'}}>
            <h1 style={{ height: '50px', paddingTop: '30px', marginLeft: '30px' }}> Manager Salaries</h1>
                <hr/>
                <table width='100%' marginLeft='10%' style={{fontSize:'18px',marginLeft:'20px'}}>
                    <tr style={{ height: '80px'}}>
                        <th>Id</th>
                        <th>Name</th>
                        
                        <th>Department</th>
                        <th>salary</th>
                        <th>Action</th>

                    </tr>

                    {data1.map(item => (
                        <tr style={{ height: '80px', width: '100%', textAlign: 'center' }}>

                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                    
                            <td>{item.department}</td>
                            <td>{item.salary}</td>
                            <td><button style={{background:'#4c7766',color:'white',borderRadius:'5px',border:'none',height:'30px',width:'80px',fontSize:'15px'}}><Link to={`/mansalary_update/${item.id}`} style={{textDecoration:'none',color:'white'}}>Increment</Link></button>&nbsp; </td>
                            <hr />
                        </tr>

                    ))}
                </table>
            </div>
            </div>
        </>
    )
};
