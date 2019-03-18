import React from 'react';
import './main.css';
import { connect } from 'react-redux';
import UserDisplay from '@/user-display/user-display';
import {updateUserStatus} from "../../store/actions/user";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, onUpdateUserStatus} = this.props;
        return (
            <div className="main">
                <UserDisplay user={user} onUpdateStatus={onUpdateUserStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUserStatus: (_id, status) => {
            dispatch(updateUserStatus(_id, status));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);