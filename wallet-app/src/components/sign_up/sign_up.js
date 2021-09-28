import React, { Fragment, useState } from "react";

import "./../login/login.css";

const SERVER_URL = "http://127.0.0.1:8001/signup";
const Sign_up = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const make_req = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password Dosent Match");
    } else {
      fetch(SERVER_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "content-length": 44,
        },
        body: JSON.stringify({
          user_id: 12,
          name: name,
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
    }
  };

  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form onSubmit={(e) => make_req(e)} class="box">
                <h1>Sign-Up</h1>

                <input
                  type="text"
                  name=""
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Retype Password"
                  onChange={(e) => setCpassword(e.target.value)}
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
export default Sign_up;
