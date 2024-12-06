import React from 'react'

function AddBankMiddleBar() {
  return (
    <>
    <div>
      <h3>Connect Bank</h3>
      <p>Effortlessly add banks account to dashboard.</p>
    </div>
    
<form>
  <fieldset>
    <h5><strong>Account Details</strong></h5>
    <div className="dropdown show mb-3">
      <label for="Select" className="form-label">Bank Name</label>
      <select id="Select" className="form-select" placeholder="Select Account">
        <option value="" disabled selected>Select</option>
        <option>Indian Bank</option>
        <option>Axis Bank</option>
        <option>HDFC Bank</option>
      </select>
    </div>

    <div className="dropdown show mb-3">
      <label for="Select" className="form-label">Branch Name</label>
      <select id="Select" className="form-select" placeholder="Select Account">
        <option value="" disabled selected>Select</option>
        <option>Pondicherry Main Branch</option>
        <option>Periya Kalapet</option>
        <option>Pondicherry University</option>
      </select>
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">IFSC Code</label>
      <input type="text" id="TextInput" className="form-control" placeholder="Enter IFSC Code" />
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Account Number</label>
      <input type="text" id="TextInput" className="form-control" placeholder="Enter account number" />
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Account Holder Name</label>
      <input type="text" id="TextInput" className="form-control" placeholder="Enter name" />
    </div>

    <div className="mb-3">
      <label for="TextInput" className="form-label">Mobile Number</label>
      <input type="number" id="TextInput" className="form-control" placeholder="Enter mobile number" />
    </div>

    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="FieldsetCheck" />
        <label className="form-check-label" for="FieldsetCheck">
          I've entered the correct details and verified.
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Connect Bank</button>
  </fieldset>
</form>

    </>
  )
}

export default AddBankMiddleBar