import React from 'react'
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function Rightbar() {
  const usagePercentage = 70;

  return (

  <>
    <div className="card" style={{width: 'auto'}}>
        <img src="/src/assets/16.webp" className="card-img-top" alt="..." height={'90px'}></img>
        <div className="card-body">
            <h5 className="card-title">Prasanth B</h5>
            <p className="card-text">tbkprashant@gmail.com</p>
        </div>
    </div>

    <br></br>

    <nav className="navbar navbar-light bg-light justify-content-between">
    <a className="navbar-brand"><b>My Banks</b></a>
      <form className="form-inline">
      <Link to="/viewbanks">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">View All</button>
      </Link>
      </form>
    </nav>


    <div className="d-flex justify-content-center align-items-center vh-5">
      <div
        className="credit-card border"
        style={{
          width: "350px",
          height: "200px",
          backgroundImage: "url(" + "/src/assets/28.png" + ")",
          color: "black",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0)",
          position: "relative",
        }}
      >
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Bank Logo */}
          <img
            src="/src/assets/Indian_Bank_logo.svg"
            alt="Bank Logo"
            style={{ width: "150px", height: "50px" }}
          />
          {/* Bank Name */}
          <div style={{ fontSize: "1.2rem", fontWeight: "bold", color:"darkblue"}}>
            Indian Bank
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color:"darkblue"}}>
          <p className="mb-1"><b>PRASANTH B</b></p>
          <p><b>Account No: 612345678</b></p>
        </div>
      </div>
    </div>

    <br/>
    <nav className="navbar navbar-light bg-light justify-content-between">
    <a className="navbar-brand"><b>My Budgets</b></a>
      
    </nav>



    <div className="card p-3" style={{ maxWidth: "400px" }}>
        <div className="d-flex align-items-center">
          {/* Icon */}
          <div className="icon-container me-3" style={{ fontSize: "2rem" }}>
            <i className="bi bi-wallet2 text-primary"></i>
          </div>

          {/* Budget Details */}
          <div className="flex-grow-1">
            {/* Category and Balance */}
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Entertainment</span>
              <span className="text-muted">₹ 5,000 / ₹ 10,000</span>
            </div>

            {/* Progress Bar */}
            <ProgressBar
              now={usagePercentage}
              label={`${usagePercentage}%`}
              style={{ height: "15px", marginTop: "8px" }}
            />
          </div>
        </div>
    </div>

</>
  )
}

export default Rightbar