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

    render() {
        const {user, onUpdateStatus} = this.props;
        return (
            <div className="user-display">
                Hello {user.name}, you are on {user.status}
                <select className="statuses" onChange={onUpdateStatus}>
                    {this.renderStatuses()}
                </select>
            </div>
        );
    }
}

export default UserDisplay;