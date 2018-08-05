import React, { Component } from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import "./UserMatch.css";

class UserMatch extends Component {
    componentDidMount() {
        const toggles = document.querySelectorAll(".collapsible");
        M.Collapsible.init(toggles);
    }

    render() {
        return (
            <div>
                <h1>User Matches</h1>
                <ul className="collapsible">
                    <li className="brown white-text">
                        <div className="collapsible-header deep-purple accent-1 white-text"><i className="large material-icons">get_app</i>USER_DATA</div>
                        <div className="collapsible-body">
                            <span>David wants to Bet [num Quarters] on this game. Do you Accept?</span>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Decline
    <i class="material-icons right">:(</i>
                            </button>

                            <button class="btn waves-effect waves-light" type="submit" name="action">Accept
    <i class="material-icons right">send</i>
  </button></div>
                    </li>
                </ul>
            </div>
        );
    };
};


UserMatch.prototype.propTypes = {
    clicks: PropTypes.object,
    onClickLeft: PropTypes.func,
    onClickRight: PropTypes.func,
};

export default UserMatch;
