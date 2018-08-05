import { connect } from 'react-redux';
import UserMatch from './UserMatch';
// import {onClickLeft, onClickRight} from "./UserMatchReducer";

const mapStateToProps = (state, ownProps) => {
    // const {UserMatch} = state;
    // const {clicks} = UserMatch;

    // return {
    //     clicks
    // };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onClickLeft: () => {
        //     dispatch(onClickLeft());
        // },
        // onClickRight: () => {
        //     dispatch(onClickRight());
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserMatch);