import React from 'react';
import './user-display.css';
import UserStatus from '../../user-status';

class UserDisplay extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderStatuses = () => {
        return UserStatus.map(status => <option key={status} value={status}>{status}</option>);
    };

    onUpdateStatus = event => {
        const {user, onUpdateStatus} = this.props;
        onUpdateStatus(user.user._id, event.target.value);
    };

    render() {
        const {user, onUpdateStatus} = this.props;
        return (
            <div className="user-display">
                <div>Hello {user.user.username}, you are {user.user.status}</div>
                <select className="statuses" onChange={this.onUpdateStatus}>
                    {this.renderStatuses()}
                </select>
            </div>
        );
    }
}

export default UserDisplay;