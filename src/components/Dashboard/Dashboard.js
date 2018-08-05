import React, { Component } from "react";

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
                    <i className="material-icons">filter_drama</i>First
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Second
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Third
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
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
                    <i className="material-icons">filter_drama</i>First
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Second
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Third
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
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
                    <i className="material-icons">filter_drama</i>First
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Second
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li className="black-text">
                  <div className="collapsible-header">
                    <i className="material-icons">whatshot</i>Third
                  </div>
                  <div className="collapsible-body white">
                    <span>Lorem ipsum dolor sit amet.</span>
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
