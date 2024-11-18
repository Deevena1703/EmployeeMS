import React from 'react'
import Graph from './graph'
import Bargraph from './bargraph'
import { FaRegUser } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { IoPersonAddSharp, IoPersonSharp } from 'react-icons/io5'
export default function Managerdashboard () {
  return(
    <>
    <div style={{display:'flex',gap:'50px'}}>
      <div className='container' style={{ height: "80px", width: "300px", background: '#ffff', borderRadius: "15px", marginLeft: "100px", display: 'flex', boxShadow: '2px 2px 2px lightgrey' ,marginTop:'150px'}}>

<div style={{ display: 'flex' }}><div style={{ color: '#ffff', background: '#385347', fontSize: '40px', height: '80px', width: '100px', borderRadius: "10px" }}><center style={{ marginTop: '20px' }}><FaRegUser /></center></div>
    <div style={{ fontSize: '22px', color: '#385347', fontWeight: 'bold', padding: '30px' ,paddingBottom:'20px'}}> Team members:&nbsp;6</div>
</div>
</div>
<div className='container' style={{ height: "80px", width: "300px", background: '#ffff', borderRadius: "15px", marginLeft: "100px", display: 'flex', boxShadow: '2px 2px 2px lightgrey' ,marginTop:'150px'}}>

<div style={{ display: 'flex' }}><div style={{ color: '#ffff', background: '#385347', fontSize: '40px', height: '80px', width: '100px', borderRadius: "10px" }}><center style={{ marginTop: '20px' }}><GoProjectSymlink/></center></div>
    <div style={{ fontSize: '22px', color: '#385347', fontWeight: 'bold', padding: '30px' }}>projects :&nbsp;&nbsp;6</div>
</div>
</div>
<div className='container' style={{ height: "80px", width: "300px", background: '#ffff', borderRadius: "15px", marginLeft: "100px", display: 'flex', boxShadow: '2px 2px 2px lightgrey' ,marginTop:'150px'}}>

<div style={{ display: 'flex' }}><div style={{ color: '#ffff', background: '#385347', fontSize: '40px', height: '80px', width: '100px', borderRadius: "10px" }}><center style={{ marginTop: '20px' }}><IoPersonSharp/></center></div>
    <div style={{ fontSize: '22px', color: '#385347', fontWeight: 'bold', padding: '30px' }}> Leaves:&nbsp;&nbsp;6</div>
</div>
</div>
</div>
    <div style={{display:'flex',marginBottom:'100px'}}>
     <div style={{marginTop:'100px'}}>
      <h1 style={{marginLeft:'100px'}}>sales of project</h1>
    <Graph/>
    </div>
    <div style={{marginTop:'100px',marginLeft:'100px'}}>
      <h1 style={{marginLeft:'100px'}}>Assigned projects</h1>
      <Bargraph/>
    </div>
    </div>
    </>
  )
}
