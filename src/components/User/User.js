import React from "react";

const User = props => {
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
            <ul className="collection with-header z-depth-1 black-text">
              <li className="collection-header center-align">
                <h4>Pending Matches vs TK</h4>
              </li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col s6 offset-s3">
            <ul className="collection with-header z-depth-1 black-text">
              <li className="collection-header center-align">
                <h4>Active Matches vs TK</h4>
              </li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col s6 offset-s3">
            <ul className="collection with-header z-depth-1 black-text">
              <li className="collection-header center-align">
                <h4>Complete Matches vs TK</h4>
              </li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

User.prototype.propTypes = {};

export default User;
