import React from 'react';
import './user.css';
import UserStatus from '../../user-status';

class User extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="user">
                <div style={{backgroundColor: (user.status === UserStatus[1] ? 'red' : ' white')}}>{user.username}, is on {user.status}</div>
            </div>
        );
    }
}

export default User;