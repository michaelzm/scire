import React from "react";
import {Link} from 'react-router-dom'
import "./Login.css";

function Login() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    return (
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Anmelden</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Passwort
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Anmeldung speichern
            </label>
          </fieldset>
          <div className="">
            <Link
              to="/homescreen"
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
            >Anmelden</Link>
          </div>
        </form>
      </main>
    );
}

export default Login;
