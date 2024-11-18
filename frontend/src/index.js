import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './employee_register';
import Menu from './menu';
import Loginpage from './employee_login';
import Dashboard from './admin_dashboard';
import Graph from './graph';
import Empdashboard from './emp_dashboard';
import Managerdashboard from './manager_dashboard ';
import Empdetails from './employee_details';

import Employee from './employees';
import Manager from './managers';
import ManagerRegister from './manager_register';
import ManagerDetails from './manager_details';
import Empupdate from './emp_update';
import Managerupdate from './manage_update';
import Salary from './salary';
import Empsalary from './empsalary_update';
import Mansalary from './mansalary_update';
import Echangepassword from './echangepassword';
import Mandetails from './managerprofile';
import Footer from './about';

//import Menubar from './website/Menubar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Menu/>
            <Routes>
              
            <Route path='/' element={<Loginpage/>}></Route>
              
              
              
            <Route path='/admin_dashboard' element={<Dashboard/>}></Route>
               <Route path='/employee_register' element={<App/>}></Route>
               <Route path='/menu' element={<Menu/>}></Route>
               <Route path='/graph' element={<Graph/>}></Route>
              <Route path='/emp_dashboard' element={<Empdashboard/>}></Route>
              <Route path='/manager_dashboard' element={<Managerdashboard/>}></Route>
              <Route path='/employee_details/:id' element={<Empdetails/>}></Route>
              <Route path='/managerprofile/:id' element={<Mandetails/>}></Route>
              <Route path='/managers' element={<Manager/>}></Route>
              <Route path='/employees' element={<Employee/>}></Route>
              <Route path='/manager_register' element={<ManagerRegister/>}></Route>
              <Route path='/manager_details/:fullname' element={<ManagerDetails/>}></Route>
              <Route path='/emp_update/:id' element={<Empupdate/>}></Route>
              <Route path='/empsalary_update/:id' element={<Empsalary/>}></Route>
              <Route path='/mansalary_update/:id' element={<Mansalary/>}></Route>
              <Route path='/manager_update/:id' element={<Managerupdate/>}></Route>
              <Route path='/echangepassword/:id' element={<Echangepassword/>}></Route>
              <Route path='/salary' element={<Salary/>}></Route>
              <Route path='/about' element={<Footer/>}></Route>

            </Routes>
        </BrowserRouter>
);



