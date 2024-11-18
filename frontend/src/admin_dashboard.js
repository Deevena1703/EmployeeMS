import React, { useState } from 'react'
import { FaCashRegister, FaRegUser } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { GrUserManager } from 'react-icons/gr';
import Graph from './graph';
import Chart from './piechart';
import axios from "axios";
import { useEffect } from 'react';
import { GiCash } from 'react-icons/gi';
import { BsCash } from 'react-icons/bs';
import './dashboard.css'
export default function Dashboard() {
    const [count, setCount] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/employeerowcount")
            .then((res) => {
                if (res !== '') {
                    setCount(res.data);
                }
                else {
                    console.log("data error")
                }
            })
    }, []);

    const ecount = JSON.stringify(count);
    var empcount = ecount.replace(/[^0-9]*/g, '');

    const [mcount, setMcount] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/managerrowcount")
            .then((res) => {
                if (res !== '') {
                    setMcount(res.data);
                }
                else {
                    console.log("data error")
                }
            })
    }, []);

    const managercount = JSON.stringify(mcount);
    var mancount = managercount.replace(/[^0-9]*/g, '');


    const [msalary, setMsalary] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/msumsalary")
            .then((res) => {
                if (res !== '') {
                    setMsalary(res.data);
                }
                else {
                    console.log("data error")
                }
            })
    }, []);

    const msum = JSON.stringify(msalary);
    var s = msum.replace(/[^0-9]*/g, '');

    const [esalary, setEsalary] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6600/esumsalary")
            .then((res) => {
                if (res !== '') {
                    setEsalary(res.data);
                }
                else {
                    console.log("data error")
                }
            }
            )
    }, []);

    const esum = JSON.stringify(esalary);
    var e = esum.replace(/[^0-9]*/g, '');
    var tsalary = (s + e) / 1000000;
    var revenue = ((s + e) * 5) / 1000000;
    return (
        <>
            <div className='dashboard'>
                <div>

                    <div className='flex'>
                        <div className='box1' >

                            <div className='box2' ><div className='box3' ><center style={{ marginTop: '20px' }}><FaRegUser /></center></div>
                                <div className='box4' > Employees:&nbsp;&nbsp;{empcount}</div>
                            </div>
                        </div>



                        <div className='box1' >

                            <div className='box2'><div className='box3'><center style={{ marginTop: '20px' }}><GrUserManager /></center></div>
                                <div className='box4' > Managers:&nbsp;&nbsp;{mancount}</div>
                            </div>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='box1' >

                            <div className='box2'><div className='box3'><center style={{ marginTop: '20px' }}><GoProjectSymlink /></center></div>
                                <div className='box4' > Projects:&nbsp;&nbsp;{mancount}</div>
                            </div>
                        </div>

                        <div className='box1' >

                            <div className='box2'><div className='box3'><center style={{ marginTop: '20px' }}><GoProjectSymlink /></center></div>
                                <div className='box4' > Leaves:&nbsp;&nbsp;4</div>
                            </div>
                        </div>

                    </div>
                </div >

                <div style={{ marginTop: '100px' }}>
                    <h2 style={{ marginLeft: '100px' }}>Number of Employees assigned for project</h2><div style={{ marginTop: "-220px", marginLeft: '-80px' }}><Chart /></div></div>
            </div >
            <hr />
            <div className='ss'>
                <div style={{ marginLeft: '10px' }}>
                    <h1 style={{ marginLeft: '200px', marginTop: '50px', fontSize: '30px' }}>sales of projects</h1>

                    <div style={{ marginTop: "50px" }}>
                        <b> <Graph /></b>
                    </div>
                </div>

                <div className='f'>
                    <h1 className='hf'>finance</h1>
                    <div className='ff'>

                        <div className='finance'><h2>Total Revenue<h4><GiCash />{revenue}</h4></h2></div>
                        <div className='finance'><h2>monthly Salaries<h4><BsCash />{tsalary}</h4></h2></div>
                    </div>
                </div>
            </div>
        </>
    )
}
