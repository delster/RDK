import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1 className="center-align">Your Profile</h1>
      <section>
        <div className="row">
          <div className="col s6 offset-s3">
            <ul className="collection with-header z-depth-1 black-text">
              <li className="collection-header center-align">
                <h4>Pending Matches</h4>
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
                <h4>Active Matches</h4>
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
                <h4>Complete Matches</h4>
              </li>
              <li className="collection-item">Alvin</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
