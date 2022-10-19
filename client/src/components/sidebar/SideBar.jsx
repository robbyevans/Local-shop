import React from 'react'
import { Link } from 'react-router-dom'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import Inventory from '../inventory/Inventory'
import ClerkForm from '../clerk/ClerkForm';

const SideBar = () => {
  return (
    <div className="container-fluid mt-5 overflow-hidden">
    <div className="row flex-nowrap">
        <nav className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark fixed-top">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <SpeedOutlinedIcon/>
                    <span className="fs-5 d-none d-sm-inline">DASHBOARD</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">INVENTORY</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">ORDER REQUESTS</span></a>
                    </li>
                    {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Orders</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Order Requests</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">New Order</span></a>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <TopicOutlinedIcon/> <span className="ms-1 d-none d-sm-inline">REPORTS</span></a>
                    </li>
                    
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                      <span className="ms-1 d-none d-sm-inline">CLERKS</span></a>
                    </li>
                   
                    
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <PowerSettingsNewOutlinedIcon/> <span className="ms-1 d-none d-sm-inline">LOGOUT</span> </a>
                    </li>
                </ul>
                <hr/>
            </div>
        </nav>
              <div className="col-md-12 py-3 offset-md-1">
                 
                  <Inventory/>
                   <Inventory/>
                  <ClerkForm/>
                  
                  <div className="clerks"></div>

        </div>
    </div>
</div>
  )
}

export default SideBar