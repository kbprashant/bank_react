import React from 'react'

function TrasactionsMiddleBar() {
  return (
    <>

    <div className="" mb-3 style={{width: 'auto'}}>
        <div className="row g-0">
            <div className="col">
                <div className="card-body position-relative">
                    <div className="btn-group position-absolute top-0 end-0 m-2">
                        <button type="button" className="btn btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                            Select Account
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Indian Bank</a></li>
                            <li><a className="dropdown-item" href="#">Axis Bank</a></li>
                            <li><a className="dropdown-item" href="#">HDFC Bank</a></li>
                        </ul>
                    </div>
                    <h3>Transaction History</h3>
                    <p>Gain Insights and Track Your Transactions Over Time.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card" mb-3 style={{width: 'auto', background:'#0d6efd', color:'white'}}>
        <div className="row g-0">
            <div className="col-md-8">
                <div className="card-body">
                    <div className="card btn btn-primary position-absolute end-0 m-2" style={{width: 'auto'}}>
                        <p>Current Balance</p>
                        <h5>Rs. 423434</h5>
                    </div>
                    <h5 className="card-title">Indian Bank</h5>
                    <p className="card-text">Savings Account</p>
                    <p className="card-text">Account Number: 613242434</p>
                </div>
            </div>
        </div>
    </div>

    <br />
    <h4>Recent Transactions</h4>
    <div className='card text-left px-4'>
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
                        <td><span className="badge bg-primary">Entertainment</span></td>
                    </tr>
                    <tr>
                        <td scope="col">Alexa Doe</td>
                        <td>Rs. 8100</td>
                        <td>Success</td>
                        <td>Wed 2.45am</td>
                        <td><span className="badge bg-danger">Transfer</span></td>
                    </tr>
                    <tr>
                        <td scope="col">Figma</td>
                        <td>Rs. 1800</td>
                        <td>Declined</td>
                        <td>Tue 12.45pm</td>
                        <td><span className="badge bg-warning">Subscriptions</span></td>
                    </tr>
                    <tr>
                        <td scope="col">Super Market</td>
                        <td>Rs. 8800</td>
                        <td>Success</td>
                        <td>Mon 6.20pm</td>
                        <td><span className="badge bg-success">Food</span></td>
                    </tr>
                    <tr>
                        <td scope="col">SPI Cinemas</td>
                        <td>Rs. 1000</td>
                        <td>Success</td>
                        <td>Sun 10.00am</td>
                        <td><span className="badge bg-primary">Entertainment</span></td>
                    </tr>
                    <tr>
                        <td scope="col">Market</td>
                        <td>Rs. 500</td>
                        <td>Success</td>
                        <td>Sat 6.20pm</td>
                        <td><span className="badge bg-success">Food</span></td>
                    </tr>
                    <tr>
                        <td scope="col">SPI Cinemas</td>
                        <td>Rs. 500</td>
                        <td>Success</td>
                        <td>Sat 10.00pm</td>
                        <td><span className="badge bg-primary">Entertainment</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <br />
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
            <a className="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default TrasactionsMiddleBar