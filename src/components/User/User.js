import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

class User extends Component {
  componentDidMount() {
    const toggles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(toggles);
  }

  render() {
    return (
      <div>
        <h1 className="center-align">TK the Deserter's Profile</h1>
        <div className="center-align">
          <button
            className="buy-quarters-button btn waves-effect waves-light blue darken-2 white-text"
            data-widget-type="button"
            data-order-name="Sample docs"
            data-order-description="Sample quarters transfer"
            data-order-code="1"
            data-amount="4"
            data-button-size="medium"
          >
            Challenge TK for 4 Quarters
          </button>
        </div>
        <section>
          <div className="row">
            <div className="col s6 offset-s3">
              <h3>Pending Matches vs TK</h3>
              <ul className="collapsible">
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Rebecca
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Don
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Larry
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col s6 offset-s3">
              <h3>Active Matches vs TK</h3>
              <ul className="collapsible">
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Harry
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Steven
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Peter
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col s6 offset-s3">
              <h3>Completed Matches</h3>
              <ul className="collapsible">
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Darth
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Sarah
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Bri
                  </div>
                  <div className="collapsible-body white">
                    <span><ul>
                      <li className="left">Points: 50
                        </li>
                        <li className="center-align">
                          Quarters: 4
                        </li>
                        <li className="right"> 6 days ago...
                        </li>
                        </ul></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

User.prototype.propTypes = {};

export default User;
