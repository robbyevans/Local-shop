import React, { useState, useEffect } from "react";
import AdminForm from "../components/AdminForm";
import AdminList from "../components/AdminList";
import StoreReports from "../components/StoreReports";

function MerchantPage({ admins, getAdmins, mStores, getmStores, onAddAdmin }) {
  const [showAdmin, setSetShowAdmin] = useState(false);
  const [showAdminList, setSetShowAdminList] = useState(false);
  const [showStoreReports, setShowStoreReports] = useState(false);

  let adminsUrl = "http://localhost:3000/admins";
  let storesUrl = "http://localhost:3000/stores";

  //fetch admins from db
  useEffect(() => {
    fetch(`${adminsUrl}`).then((r) => {
      if (r.ok) {
        r.json().then((admins) => getAdmins(admins));
      }
    });
  }, []);

  //fetch stores from db
  useEffect(() => {
    fetch(`${storesUrl}`).then((r) => {
      if (r.ok) {
        r.json().then((stores) => getmStores(stores));
      }
    });
  }, []);

  return (
    <div>
      {/* top navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <a
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            href="#"
          >
            Local Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <form className="d-flex ms-auto my-3 my-lg-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Merchant
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Clerk
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* sidebar dashboard */}
      <div className="container-fluid mt-5">
        <div className="row flex-nowrap">
          <nav className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">
                  Merchant Dashboard
                </span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <div>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setShowStoreReports(false);
                      setSetShowAdmin(true);
                    }}
                  >
                    <a
                      href="#"
                      className="nav-link align-middle px-0 text-white"
                    >
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Admin</span>
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
                          setShowStoreReports(true);
                        }}
                        className="ms-1 d-none d-sm-inline"
                      >
                        Store Reports
                      </span>
                    </a>
                  </li>
                </div>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Logout</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </nav>
          <div className="col py-3">
            {showAdmin ? <AdminForm onAddAdmin={onAddAdmin} /> : null}

            {showAdminList ? <AdminList admins={admins} /> : null}
            {showStoreReports ? <StoreReports mStores={mStores} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantPage;
