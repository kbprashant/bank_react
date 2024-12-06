import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column pt-3">
          <div>
            <a
              className="text-decoration-none text-white d-none d-sm-inline d-flex align-items-center ms-3 mt-3"
              href="#"
            >
              <span className="ms-1 fs-4 d-none d-sm-inline"><strong>BankNex</strong></span>
            </a>
            <hr className="text-secondary d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/home" className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className="bi bi-speedometer2 me-3"></i>
                  <span className="text-nowrap">Dashboard</span>
                </Link>
              </li>
              
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <Link to="/viewbanks" className="nav-link text-white fs-5 d-flex align-items-center">
                <i className="bi bi-house me-3"></i>
                <span className="text-nowrap">View Banks</span>
              </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/transactions" className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className="bi bi-grid me-3"></i>
                  <span className="text-nowrap">Transaction History</span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/transferfunds" className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className="bi bi-people me-3"></i>
                  <span className="text-nowrap">Transfer Funds</span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/addbank" className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className="bi bi-table me-3"></i>
                  <span className="text-nowrap">Connect Bank</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown open">
            <a
              className="text-decoration-none text-white dropdown-toggle p-3 d-flex align-items-center"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 d-none d-sm-inline">Prasanth B</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
