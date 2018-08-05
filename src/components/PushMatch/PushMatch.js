import React from "react";
// import PropTypes from "prop-types";

const PushMatch = (props) => {
    return (
        <div>
            <h1>This is the view for individual Push Matches.</h1>
            <button class="btn waves-effect waves-light" type="submit" name="action"
            // class="buy-quarters-button"
            data-widget-type="button"
            data-order-code="1"
            data-amount="2"
            >
            Play with 2 Quarters
            <i class="material-icons right"></i>
            </button>
        </div>
        
    );
};


PushMatch.prototype.propTypes = {};

export default PushMatch;
