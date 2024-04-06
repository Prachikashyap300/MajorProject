import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <div className="myCard container mt-2 d-flex-column">
      <h4 className="text-start">Welcome !</h4>
      <hr />
      <form className="myForm">
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPas sword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="submitButton btn w-100">
          Login
        </button>
        <br />
        <hr />
        <div className="text-center d-flex  justify-content-between align-items-end">
          <p className="text-muted pt-2 text-sm">
            Don't have an account?{" "}
            <Link className="links text-danger" to="/signup">
              Sign up
            </Link>{" "}
          </p>
          <p className="text-muted pt-2 text-sm">Forgot password?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
