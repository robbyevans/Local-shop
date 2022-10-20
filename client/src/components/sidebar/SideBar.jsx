import React from 'react'
import { Link } from 'react-router-dom'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import Inventory from '../inventory/Inventory'
import ClerkForm from '../clerks/ClerkForm';
import Monthly from '../analytics/Monthly';

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
                           <Inventory2OutlinedIcon/><span className="ms-1 d-none d-sm-inline">INVENTORY</span>
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/analytics" className="nav-link align-middle px-0">
                           <TimelineOutlinedIcon/><span className="ms-1 d-none d-sm-inline">ANALYTICS</span>
                        </Link>
                    </li>
                    
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <ShoppingCartCheckoutOutlinedIcon/> <span className="ms-1 d-none d-sm-inline">ORDER REQUESTS</span></a>
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
                        <Link to="/reports" className="nav-link px-0 align-middle">
                        <TopicOutlinedIcon/> <span className="ms-1 d-none d-sm-inline">REPORTS</span></Link>
                    </li>
                    
                    <li>
                              <Link to="clerks" className="nav-link px-0 align-middle">
                                  <PeopleAltOutlinedIcon/>
                      <span className="ms-1 d-none d-sm-inline">CLERKS</span></Link>
                    </li>
                   
                    
                    <li>
                        <Link href="#" className="nav-link px-0 align-middle">
                            <PowerSettingsNewOutlinedIcon/> <span className="ms-1 d-none d-sm-inline">LOGOUT</span> </Link>
                    </li>
                </ul>
                <hr/>
            </div>
        </nav>
              <div className="col-md-12 py-3 offset-md-1">
                 
                  <Inventory/>
                  <Monthly/>
                  <hr/>
                  <ClerkForm/>
                  
                  <div className="clerks"></div>

        </div>
    </div>
</div>
  )
}

export default SideBar