import React, { useState } from "react";
import AdminForm from "./AdminForm";
import StoreReports from "./StoreReports";

function SideBar({ onAddAdmin, admins, mStores, onDeleteAdmin, onAddStore }) {
  const [showAdmin, setSetShowAdmin] = useState(true);

  function handleLogout(){

  }
  return (
    <div>
      {/* sidebar dashboard */}
      <div className="container-fluid mt-5">
        <div className="row flex-nowrap">
          <nav className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  merchant-sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
              
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <div>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setSetShowAdmin(true);
                    }}
                  >
                    <a
                      href="#"
                      className="nav-link align-middle px-0 text-white"
                    >
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Admins</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="nav-link px-0 align-middle text-white"
                    >
                      <i className="fs-4 bi-table"></i>{" "}
                      <span
                        onClick={() => {
                          setSetShowAdmin(false);
                        }}
                        className="ms-1 d-none d-sm-inline"
                      >
                        Stores
                      </span>
                    </a>
                  </li>
                </div>
              </ul>
              <button onClick={handleLogout} className="merchant-log-out">Log out</button>
              <hr />
            </div>
          </nav>
          <div className="col py-3">
            {showAdmin ? (
              <AdminForm onAddAdmin={onAddAdmin} admins={admins} onDeleteAdmin={onDeleteAdmin} mStores={mStores} />
            ) : (
              <StoreReports mStores={mStores} onAddStore={onAddStore} admins={admins} /> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
