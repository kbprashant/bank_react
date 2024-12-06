import React from 'react'

function Middlebar() {
  return (
    <>
    <div>
      <h3>Welcome, Prasanth</h3>
      <p>Access & manage your account and transactions efficiently.</p>
    </div>

    <div className="card" mb-3 style={{maxWidth: '720px'}}>
        <div className="row g-0">
            <div className="col-md-2">
                <img src="/src/assets/chart2.png" className="img-fluid rounded-start p-2" width='120px' alt="..."></img>
            </div>
            <div className="col-md-10">
                <div className="card-body position-relative">
                    <button className="btn btn-primary position-absolute top-0 end-0 m-2">
                        Add Bank
                    </button>
                    <p className="card-title"><small className="text-body-secondary">3 Bank Accounts</small></p>
                    <p className="card-text">Current Balance</p>
                    <h5 className="card-text">Rs.5000000</h5>
                </div>
            </div>
        </div>
    </div>

    <br />
    <h4>Recent Transactions</h4>
    <div className='card'>
        <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
                <li className='nav-item'>
                    <a className='nav-link active'>Indian Bank</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Axis Bank</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'>HDFC Bank</a>
                </li>
            </ul>
        </div>

        <div className='card-body'>

        <div className="card" mb-3 style={{maxWidth: '720px'}}>
        <div className="row g-0">
            <div className="col-md-4 p-2" >
            <img src="/src/assets/Indian_Bank_logo.svg" className="img-fluid rounded-3"  alt="..."></img>
            </div>
            <div className="col-md-8">
                <div className="card-body position-relative">
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">Savings</span>
                    <h5 className="card-text">Indian Bank</h5>
                    <p className="card-text">Rs.30000</p>
                </div>
            </div>
        </div>
        </div>
    
        <div className="table-responsive">
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Transaction</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">Spotify</td>
                        <td>Rs. 10000</td>
                        <td>Processing</td>
                        <td>Wed 1:00pm</td>
                        <td>Subscription</td>
                    </tr>
                    <tr>
                        <td scope="col">Alexa Doe</td>
                        <td>Rs. 8100</td>
                        <td>Success</td>
                        <td>Wed 2.45am</td>
                        <td>Deposit</td>
                    </tr>
                    <tr>
                        <td scope="col">Figma</td>
                        <td>Rs. 1800</td>
                        <td>Declined</td>
                        <td>Tue 12.45pm</td>
                        <td>Income</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </>
  )
}

export default Middlebar