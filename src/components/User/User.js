import React from "react";
// import PropTypes from "prop-types";

const User = (props) => {
    return (
        <div>
            <h1>This is the view for individual User Profiles.</h1>
            <button
                class="buy-quarters-button"
                data-widget-type="button"
                data-order-name="Sample docs"
                data-order-description="Sample quarters transfer"
                data-order-code="1"
                data-amount="5"
                data-button-size="medium"
                data-button-type="black">
                Play with quarters
</button>
        </div>
    )
};


User.prototype.propTypes = {};

export default User;
