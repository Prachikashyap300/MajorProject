import React from "react";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import logo from "../assets/react.svg";
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  inputFirstName: Yup.string()
  .required("First name is required"),
  inputLastName: Yup.string()
  .required("Last name is required"),
  inputEmail: Yup.string()
  .required("Email is required"),
  
})
const Signup = () => {
  /*step 1: formik initialization*/
  const signupForm = useFormik({
    initialValues: {
      inputFirstName: '',
      inputLastName: '',
      inputEmail: '',
      inputProfilePhoto: '',
      inputCourse: '',
      inputSemester: '',
      inputCollege: '',
      inputPhone: '',
      inputPassword: '',
      inputConfirmPassword: ''
    }
  })

  return(
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
            <input type="text" className="form-control form-control-sm" id="inputFirstName" onChange={signupForm.handleChange} value={signupForm.values.name} />
          </div>
        {/* input last name */}
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              Last name
            </label>
            <input type="text" className="form-control form-control-sm" id="inputLastName" inputPhone  />
          </div>
        </div>


        <div className="row mb-1">
        {/* input email */}
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input type="email" className="form-control form-control-sm" id="inputEmail" />
          </div>
        </div>
        {/* input profile photo
          <div className="col-md-6">
            <label htmlFor="inputProfilePhoto" className="form-label">
              Profile photo
            </label>
            <input  type="file" className="form-control form-control-sm" id="inputProfilePhoto"
            />
          </div>
        </div>

        <div className="row mb-1">
          {/* input course 
          <div className="col-md-6">
            <label htmlFor="inputCourse" className="form-label">
              Course
            </label>
            <select class="form-control form-control-sm" id="inputCourse">
              <option>Select Phone</option>
              <option>B.Tech</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>BCom</option>
              <option>MCA</option>
              <option>MBA</option>
              <option>M.Tech</option>
              <option>M.Com</option>
            </select>
          </div>
          {/* input semester        
          <div className="col-md-6">
            <label htmlFor="inputSemester" className="form-label">
              Semester
            </label>
            <select class="form-control form-control-sm" id="inputSemester">
              <option>Select semester</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </div>

        <div className="row mb-1">
          {/* input college 
          <div className="col-md-6">
            <label htmlFor="inputCollege" className="form-label">
              College
            </label>
            <select class="form-control form-control-sm" id="inputCollege">
              <option>Select college</option>
              <option>B.Tech</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>BCom</option>
              <option>MCA</option>
              <option>MBA</option>
              <option>M.Tech</option>
              <option>M.Com</option>
            </select>
          </div>
          {/* input phone 
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Phone Number
            </label>
            <input type="number" className="form-control form-control-sm" id="inputPhone" />            
          </div>
        </div>

        <div className="row mb-3">
          {/* input password
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input type="password" className="form-control form-control-sm" id="inputPassword" />                      
          </div>
        {/* input confirm password 
          <div className="col-md-6">
            <label htmlFor="inputConfirmPassword" className="form-label">
              Confirm password
            </label>
            <input type="password" className="form-control form-control-sm" id="inputConfirmPassword" />                          
          </div>
        </div> */}

        <button type="submit" className="submitButton btn btn-warning btn-sm">
          Sign up
        </button>
        <hr />
        {/* Query section */}
        <div className="text-center d-flex  justify-content-between align-items-end px-5">
          <p className="text-muted pt-2 text-sm">
            Already  have an account?  
            <Link className="links text-danger" to="/signup">
              Sign up
            </Link>
          </p>
          
        </div>
      </form>
    </div>
  );
};

export default Signup;
