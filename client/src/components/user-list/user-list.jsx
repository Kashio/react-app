import React from 'react';
import './user-list.css';
import User from '@/user/user';

class UserList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderUsers = () => {
        const {users} = this.props;
        return users.map(user => <User key={user._id} user={user} />);
    };

    render() {
        return (
            <div className="user-list">
                {this.renderUsers()}
            </div>
        );
    }
}

export default UserList;