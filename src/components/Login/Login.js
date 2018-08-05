import React from "react";

const Login = props => {
  return (
    <div>
      <div className="row">
        <div className="col s8 offset-s2">
          <h1>Coin Pusher!</h1>
          <div className="card">
            <div className="card-content">
              <span className="card-title black-text">Login</span>
              <div>
                <div className="input-field">
                  <input id="username" type="text" className="validate" />
                  <label for="username">Username</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <a href="/dashboard" className="btn waves-effect waves-light blue darken-2">LOG IN AND START PUSHIN'</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
