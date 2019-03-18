import React from 'react';
import './main.css';
import UserDisplay from '@/user-display/user-display';
import {updateStatus} from "../../store/actions/user";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, onUpdateStatus} = this.props;
        return (
            <div className="main">
                <UserDisplay user={user} onUpdateStatus={onUpdateStatus}/>
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
        onUpdateStatus: (id, status) => {
            dispatch(updateStatus(id, status));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);