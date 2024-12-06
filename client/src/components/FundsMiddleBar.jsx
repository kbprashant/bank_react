import React from 'react'

function FundsMiddleBar() {
  return (
    <>
    <div>
      <h3>Payment Transfer</h3>
      <p>Access & manage your account and transactions efficiently.</p>
    </div>
    
<form>
  <fieldset>
    <h5><strong>Transfer Details</strong></h5>
    <div className="dropdown show mb-3">
      <label for="Select" className="form-label">Select Your Source Bank</label>
      <select id="Select" className="form-select" placeholder="Select Account">
        <option value="" disabled selected>Select</option>
        <option>Indian Bank</option>
        <option>Axis Bank</option>
        <option>HDFC Bank</option>
      </select>
    </div>

    <div className="dropdown show mb-3">
      <label for="Select" className="form-label">Receiver's Bank</label>
      <select id="Select" className="form-select" placeholder="Select Account">
        <option value="" disabled selected>Select</option>
        <option>Indian Bank</option>
        <option>Axis Bank</option>
        <option>HDFC Bank</option>
      </select>
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Receiver's Account Number</label>
      <input type="text" id="TextInput" className="form-control" placeholder="Enter account number" />
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Receiver's IFSC Code</label>
      <input type="text" id="TextInput" className="form-control" placeholder="Enter IFSC Code" />
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Amount</label>
      <input type="number" id="TextInput" className="form-control" placeholder="Enter Amount" />
    </div>

    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="FieldsetCheck" />
        <label className="form-check-label" for="FieldsetCheck">
          I've entered the correct details and verified.
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Transfer Funds</button>
  </fieldset>
</form>

    </>
  )
}

export default FundsMiddleBar