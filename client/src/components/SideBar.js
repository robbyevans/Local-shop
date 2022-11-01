import React, { useState } from "react";
import AdminForm from "./AdminForm";
import StoreReports from "./StoreReports";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { useNavigate } from "react-router-dom";

function SideBar({setAdminUser,adminUser, onAddAdmin, admins, mStores, onDeleteAdmin, onAddStore,setUser  }) {
  
  const [showAdmin, setSetShowAdmin] = useState();

  const navigate = useNavigate();

  function handleLogout() {
    fetch("auth/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/mlog-in")
      }
    });
    
  }

  return (
    <div>
      {/* sidebar dashboard */}
      <div className="container-fluid mt-5">
        <div className="row flex-nowrap">
          <nav className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  merchant-sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              
              <div className="mNav-items">
              <List>
                <ListItem  onClick={() => {
                      setSetShowAdmin(false);
                    }}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                  <ShoppingCartCheckoutOutlinedIcon color="#ffffff"/>
                  </ListItemIcon>
                  <ListItemText>Stores</ListItemText>
                </ListItem>

                <ListItem    onClick={() => {
                      setSetShowAdmin(true);
                    }}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                     <PeopleAltOutlinedIcon color="#ffffff"/>
                  </ListItemIcon>
                  <ListItemText>Admins</ListItemText>
                </ListItem>
                <ListItem onClick={handleLogout}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                 
                  </ListItemIcon>
                  <ListItemText>Log out</ListItemText>
                </ListItem>
              </List>
              </div>
              <hr />
            </div>
          </nav>
          <div className="col py-3">
            {showAdmin ? (
              <AdminForm
                onAddAdmin={onAddAdmin}
                admins={admins}
                onDeleteAdmin={onDeleteAdmin}
                mStores={mStores}
                setAdminUser={setAdminUser}
                adminUser={adminUser}
              />
            ) : (
              <StoreReports
                mStores={mStores}
                onAddStore={onAddStore}
                admins={admins}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
