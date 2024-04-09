import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'Yup'; 

const Contactus = () => {
  return (
    <div>
      <div className="container mySignupCard d-flex-column ">
        <div className="d-flex">
          {/* <img src={logo} className="p-1" alt="React Logo" /> */}
          <h4 className="text-start mt-1">Welcome !</h4>
        </div>
        <hr />
        <form className="mySignupForm" onSubmit={signupForm.handleSubmit}>
          {/* input first name */}
          <div className="row mb-1">
            <div className="col-md-6">
              <label htmlFor="inputFirstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputFirstName"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />
            </div>
            {/* input last name */}
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputLastName"
                inputPhone
              />
            </div>
          </div>

          <div className="row mb-1">
            {/* input email */}
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="inputEmail"
              />
            </div>
          </div>
          <button type="submit" className="submitButton btn btn-warning btn-sm">
            Sign up
          </button>
          <hr />
          {/* Query section */}
          <div className="text-center d-flex  justify-content-between align-items-end px-5">
            <p className="text-muted pt-2 text-sm">
              Already have an account?
              <Link className="links text-danger" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
