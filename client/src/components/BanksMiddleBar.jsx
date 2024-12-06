import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Middlebar() {
const usagePercentage = 70;
  return (
    <>
    <div>
      <h3>My Bank Accounts</h3>
      <p>Effortlessly Manage Your Banking Activities.</p>
    </div>


    <br />
    <h4>Bank Accounts</h4>

    <div className="container">
    <div className="row row-cols-3">

        <div className='col'>

        <div className="d-flex justify-content-center vh-5 py-3">
        <div
        className="credit-card border"
        style={{
          width: "350px",
          height: "200px",
          backgroundImage: "url(" + "/src/assets/28.png" + ")",
          color: "black",
          borderRadius: "15px",
          padding: "20px",
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

        <div className="d-flex align-items-left">
          {/* Budget Details */}
          <div className="flex-grow-1" >
            {/* Category and Balance */}
            <div className="d-flex justify-content-between align-items-left" >
              <span className="fw-bold">Spending</span>
              <span className="text-muted">₹ 15,000</span>
            </div>

            {/* Progress Bar */}
            <ProgressBar
              now={usagePercentage}
              label={`${usagePercentage}%`}
              style={{ width:'auto', height: "15px", marginTop: "8px" }}
            />
          </div>
        </div>

        </div>


        <div className='col'>

        <div className="d-flex justify-content-center align-items-center vh-5 py-3">
        <div
        className="credit-card border"
        style={{
          width: "350px",
          height: "200px",
          backgroundImage: "url(" + "/src/assets/35.png" + ")",
          color: "black",
          borderRadius: "15px",
          padding: "20px",
          position: "relative",
        }}
        >
          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Bank Logo */}
            <img
              src="/src/assets/axisbanklogo.jpg"
              alt="Bank Logo"
              style={{ width: "150px", height: "50px" }}
            />
            {/* Bank Name */}
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color:"darkblue"}}>
              Axis Bank
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ position: "absolute", bottom: "20px", left: "20px", color:"darkblue"}}>
            <p className="mb-1"><b>PRASANTH B</b></p>
            <p><b>Account No: 12322345678</b></p>
          </div>
        </div>
        </div>

        <div className="d-flex align-items-left">
          {/* Budget Details */}
          <div className="flex-grow-1" >
            {/* Category and Balance */}
            <div className="d-flex justify-content-between align-items-left" >
              <span className="fw-bold">Spending</span>
              <span className="text-muted">₹ 15,000</span>
            </div>

            {/* Progress Bar */}
            <ProgressBar
              now={usagePercentage}
              label={`${usagePercentage}%`}
              style={{ width:'auto', height: "15px", marginTop: "8px" }}
            />
          </div>
        </div>

        </div>


        <div className='col'>

        <div className="d-flex justify-content-center align-items-center vh-5 py-3">
        <div
        className="credit-card border"
        style={{
          width: "350px",
          height: "200px",
          backgroundImage: "url(" + "/src/assets/32.png" + ")",
          color: "black",
          borderRadius: "15px",
          padding: "20px",
          position: "relative",
        }}
        >
          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Bank Logo */}
            <img
              src="/src/assets/hdfc-logo.png"
              alt="Bank Logo"
              style={{ width: "150px", height: "50px" }}
            />
            {/* Bank Name */}
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color:"darkblue"}}>
              HDFC Bank
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ position: "absolute", bottom: "20px", left: "20px", color:"darkblue"}}>
            <p className="mb-1"><b>PRASANTH B</b></p>
            <p><b>Account No: 865612345678</b></p>
          </div>
        </div>
        </div>

        <div className="d-flex align-items-left">
          {/* Budget Details */}
          <div className="flex-grow-1" >
            {/* Category and Balance */}
            <div className="d-flex justify-content-between align-items-left" >
              <span className="fw-bold">Spending</span>
              <span className="text-muted">₹ 15,000</span>
            </div>

            {/* Progress Bar */}
            <ProgressBar
              now={usagePercentage}
              label={`${usagePercentage}%`}
              style={{ width:'auto', height: "15px", marginTop: "8px" }}
            />
          </div>
        </div>

        </div>


  </div>
</div>



    </>
  )
}

export default Middlebar