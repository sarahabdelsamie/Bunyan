import React from 'react'

function FormDashboard({ setDraftPage, pageName }) {

  const handleChange = (e) => {

    const form = e.target.form;

    const hasValue = Array.from(form.elements).some(
      (el) => el.value && el.value.trim() !== ""
    );

    if (hasValue) {
      setDraftPage(pageName);
    } else {
      setDraftPage("");
    }
  };

  return (
    <div>
      <form>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 form-check">

          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handleChange}
          />

          <label
            htmlFor="exampleCheck1"
            className="form-check-label"
          >
            Check me out
          </label>

        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>
    </div>
  )
}

export default FormDashboard