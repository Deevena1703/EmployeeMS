import React from 'react'
import lp from './Assets/lp.png'
import { useNavigate,Link, Outlet} from 'react-router-dom'
import './menu.css'
import { BiLogOut } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { IoPersonSharp } from 'react-icons/io5';
import { BsCash } from 'react-icons/bs';
import { ImParagraphJustify } from 'react-icons/im';
//import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Menu() {

  const id=localStorage.getItem('id');
  const fullname=localStorage.getItem('fullname');
      
    const nav=useNavigate();
   
    function logout()
        {
            localStorage.clear();
            alert("logout successful");
            nav('/');
    
        }
        
    return (
        
        <><div className='div' >
            <img src={lp} alt='logo' height={'70Px'} width={'100px'}  />
       
             {localStorage.getItem('role')==='admin'?  <li><Link  style={{textDecoration:'none',color:'white'}}to={'/admin_dashboard'}><MdSpaceDashboard/> Dashboard</Link></li> :""}
             {localStorage.getItem('role')==='admin'?  <li><Link style={{textDecoration:'none',color:'white'}} to={'/managers'}><GrUserManager/> Managers</Link> </li> :""}
             {localStorage.getItem('role')==='admin'?  <li> <Link style={{textDecoration:'none',color:'white'}} to={'/employees'}><IoPersonSharp /> Employees</Link></li> :""}
             {localStorage.getItem('role')==='admin'?  <li> <Link style={{textDecoration:'none',color:'white'}} to={'/salary'}><BsCash/> Salary</Link></li> :""}
             {localStorage.getItem("role")==='employee'? <li style={{display:"block"}}> <Link  style={{textDecoration:'none',color:'white'}}to={'/emp_dashboard'}><MdSpaceDashboard/> Dashboard</Link></li> :""}
             {localStorage.getItem('role')==='manager'?  <li> <Link  style={{textDecoration:'none',color:'white'}}to={'/manager_dashboard'}><MdSpaceDashboard/> Dashboard</Link></li> :""}
             {localStorage.getItem('role')==='employee'?  <li><Link style={{textDecoration:'none',color:'white'}} to={`/employee_details/${id}`}><IoPersonSharp/>profile</Link></li> :""}
            
             
             {localStorage.getItem("role")==='manager'?  <li><Link  style={{textDecoration:'none',color:'white'}}to={`/manager_details/${fullname}`}><GrUserManager/> Employees</Link></li> :""}
             {localStorage.getItem('role')==='manager'?  <li><Link  style={{textDecoration:'none',color:'white'}}to={'/about'}><ImParagraphJustify /> About us</Link></li> :""}
             {localStorage.getItem("role")==='manager'?  <li><Link  style={{textDecoration:'none',color:'white'}}to={`/managerprofile/${id}`}><IoPersonSharp/> profile</Link></li> :""}
             {localStorage.getItem("role")==='employee'?  <li><Link  style={{textDecoration:'none',color:'white'}}to={'/about'}><ImParagraphJustify/>About us</Link></li> :""}
           
          {localStorage.getItem('email')!==null?   <button style={{float:'right'}} onClick={logout}><BiLogOut/>Logout</button>:""}
           
        </div>
        <Outlet/>
        </>
    )
}

