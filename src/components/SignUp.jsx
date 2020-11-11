import React, { Component } from "react";
import "./SignUp.css";
import Popup from 'reactjs-popup';

export default class SignUp extends Component {
  render() {
    return (
      <div className="main login">
        <div className="container">
          <center>
            <div className="middle">
              <div id="login">
                <form action="javascript:void(0);" method="get">
                  <fieldset className="clearfix">
                    <p>
                      <span className="fa fa-user"></span>
                      <input
                        type="text"
                        Placeholder="Username"
                        required
                      ></input>
                    </p>
                    <p>
                      <span className="fa fa-lock"></span>
                      <input
                        type="password"
                        Placeholder="Password"
                        required
                      ></input>
                    </p>

                    <div>
                      <span className="recordarContraseña">
                        <a className="small-text recordarContraseña" href="#">
                          Forgot password?
                        </a>
                      </span>
                      <span className="botonEntrar">
                        <input type="submit" value="Sign In"></input>
                        <Popup trigger={<input type="submit" value="Registro"></input>} modal nested>
                          <div className="form-main">
                            <div className="header">Registro</div>
                            <form className="form">
                              <label>Nombre</label>
                              <input type="text"/>
                            </form>
                          </div>
                        </Popup> 
                      </span>
                    </div>
                  </fieldset>
                  <div className="clearfix"></div>
                </form>

                <div className="clearfix"></div>
              </div>
              <div className="logo">
                Escort
                <div className="clearfix"></div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
