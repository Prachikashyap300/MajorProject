import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/react.svg'
import "../App.css";

const Login = () => {
  return (
    <div className="myLoginCard container d-flex-column">
     <div className="d-flex">
        <img src={logo} className="p-1" alt="React Logo" />
        <h4 className="text-start mt-1">Welcome !</h4>
      </div>
      <hr />
      <form className="myLoginForm">
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPas sword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="submitButton btn btn-warning btn-sm ">
          Login
        </button>
        <hr />
        <div className="text-center d-flex  justify-content-between align-items-end ">
          <p className="text-muted pt-2 text-sm">
            Don't have an account?
            <Link className="links text-danger" to="/signup">
              Sign up
            </Link>
          </p>
          <p className="text-muted pt-2 text-sm"><Link className="links text-primary" to="#">Forgot password?</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
