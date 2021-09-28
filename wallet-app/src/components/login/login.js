import React, { Fragment, useState } from "react";
import "./login.css";
const SERVER_URL = "http://127.0.0.1:8001";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const make_req = (e) => {
    e.preventDefault();

    fetch(`${SERVER_URL}/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "content-length": 44,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form onSubmit={(e) => make_req(e)} class="box">
                <h1>Login</h1>
                <h7> Please enter your login and password!</h7>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name=""
                  placeholder="Username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name=""
                  placeholder="Password"
                />
                <a class="forgot text-muted" href="/">
                  Forgot password?
                </a>
                <input type="submit" name="" value="Login" href="#" />
                <div class="col-md-12">
                  <ul class="social-network social-circle">
                    <li>
                      <a href="/" class="icoFacebook" title="Facebook">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="icoTwitter" title="Twitter">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="icoGoogle" title="Google +">
                        <i class="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
      <script src="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </Fragment>
  );
};
export default Login;
