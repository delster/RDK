import React, { Component } from "react";
// import  "./Dashboard.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Dashboard extends Component {
  componentDidMount() {
    const toggles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(toggles);
  }
  render() {
    return (
      <div>
        <h1 className="center-align">Your Profile</h1>
        <section>
          <div className="row">
            <div className="col s6 offset-s3">
              <h3>Pending Matches</h3>
              <ul className="collapsible">
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Frank
                    {/* <button class="btn-small waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                    </button> */}
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
                        </ul>
                    </span>
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
                    <i className="material-icons">whatshot</i>TK
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
              <h3>Active Matches</h3>
              <ul className="collapsible">
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>Franklin
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
                    <i className="material-icons">place</i>Ben
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
                    <i className="material-icons">whatshot</i>Matthew
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
                    <i className="material-icons">filter_drama</i>TK
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
                    <i className="material-icons">place</i>Cassidy
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
                    <i className="material-icons">whatshot</i>John
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

export default Dashboard;
