import React from 'react'
import Graph from './graph'
import Chart from './piechart'
import { FaRegUser } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { useState,useEffect } from 'react'
import axios   from "axios";

export default function Empdashboard() {
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

  return (
    <>
    <div style={{display:'flex',gap:'50px',marginTop:'200px'}}>
    <div className='box1' >

<div className='box2' ><div className='box3' ><center style={{ marginTop: '20px' }}><FaRegUser /></center></div>
    <div className='box4' > Team members:&nbsp;&nbsp;{empcount}</div>
</div>
</div>
<div className='box1' >

<div className='box2' ><div className='box3' ><center style={{ marginTop: '20px' }}><GoProjectSymlink/></center></div>
    <div className='box4' > Projects:&nbsp;&nbsp;6</div>
</div>
</div>
<div className='box1' >

<div className='box2' ><div className='box3' ><center style={{ marginTop: '20px' }}><GoProjectSymlink/></center></div>
    <div className='box4' > Leaves:&nbsp;&nbsp;2</div>
</div>
</div>



</div>
    <div style={{display:'flex'}}>
    <div style={{marginTop:'200px',marginLeft:'100px'}}>
      <center><h1>Project Sales</h1></center>
    <Graph/>
    </div>
    
    <div>
    <h1 style={{marginTop:'200px',marginLeft:'350px'}}>projects Assigned</h1>
    <div style={{marginTop:'-200px'}}>
     
    <Chart/>
    </div>
    </div>
    </div>
    </>
  )
}
