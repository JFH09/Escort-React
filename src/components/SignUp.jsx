import React, { Component, useState } from "react";
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
                        <Popup trigger={<input type="button" value="Registro"></input>} modal nested>
                          { close => (<div className="form-main">
                            <button className="close" onClick={close}>×</button>
                            <div className="header"><h3>Registro</h3></div>
                            <hr color="black"/>
                           <form className="form">
                              <div className="uno">
                                <label htmlFor="nombre">Nombre</label>
                                <input id="nombre" type="text" autoComplete="off" required/>
                              </div>
                              <div className="dos">
                                <label htmlFor="apellido">Apellido</label>
                                <input id="apellido" type="text" autoComplete="off" required/>
                              </div>
                              <br/>
                              <div className="uno">
                                <label htmlFor="email">E-Mail</label>
                                <input id="email" type="mail" autoComplete="off" required/>
                              </div>
                              <div className="dos">
                                <label htmlFor="reEmail">Confirmar E-Mail</label>
                                <input id="reEmail" type="mail" autoComplete="off" required/>
                              </div>
                              <div className="uno">
                                <label htmlFor="institucion">Instituci&oacute;n</label>
                              <select name="Instituciones" id="institucion" required>
                                <option value=""></option>
                                <option>Colegio Rafael Uribe de Acosta</option>
                                <option>Otro</option>
                              </select>
                              <br/>
                              <label htmlFor="cargo">Cargo</label>
                              <select name="Cargo" id="cargo" required>
                                <option value=""></option>
                                <option value="">Profesor</option>
                                <option value="">Coordinador</option>
                                <option value="">Administrativo</option>
                              </select>
                              <br/>
                              <label htmlFor="curso">Curso</label>
                              <select name="Curso" id="curso">
                                <option value=""></option>
                                <option value="">Primero</option>
                                <option value="">Segundo</option>
                                <option value="">Tercero</option>
                                <option value="">Cuerto</option>
                                <option value="">Quinto</option>
                              </select>
                              <label htmlFor="idSalon"> -</label>
                              <select name="" id="idSalon">
                                <option value=""></option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                              </select>
                              <label htmlFor="number"> -</label>
                              <select name="" id="number">
                                <option value=""></option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                              </select>
                              </div>
                              <div className="dos">
                                <label htmlFor="contra">Contraseña</label>
                              <input id="contra" type="password" required/>
                              <br/>
                              <label htmlFor="recontra">Confirmar Contraseña</label>
                              <input id="recontra" type="password" required/>
                              </div>
                              <br/>
                              <br/>
                            <div className="footer">
                              <input className="button" type="submit" value="Registrar"/>
                              <button className="button"  onClick={() => {
                                close();
                              }}>Cancelar</button>
                            </div>
                              </form>
                          </div>)}
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
