import React, { Component } from "react";
import "./SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div class="main login">
        <div class="container">
          <center>
            <div class="middle">
              <div id="login">
                <form action="javascript:void(0);" method="get">
                  <fieldset class="clearfix">
                    <p>
                      <span class="fa fa-user"></span>
                      <input
                        type="text"
                        Placeholder="Username"
                        required
                      ></input>
                    </p>
                    <p>
                      <span class="fa fa-lock"></span>
                      <input
                        type="password"
                        Placeholder="Password"
                        required
                      ></input>
                    </p>

                    <div>
                      <span className="recordarContraseña">
                        <a class="small-text recordarContraseña" href="#">
                          Forgot password?
                        </a>
                      </span>
                      <span className="botonEntrar">
                        <input type="submit" value="Sign In"></input>
                      </span>
                    </div>
                  </fieldset>
                  <div class="clearfix"></div>
                </form>

                <div class="clearfix"></div>
              </div>
              <div class="logo">
                Escort
                <div class="clearfix"></div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
