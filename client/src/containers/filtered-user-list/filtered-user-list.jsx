import { connect } from 'react-redux';
import UserList from '@/user-list/user-list';

const getVisibleUsers = (users, filter) => {
    let filteredUsers = users;
    if (filter.text) {
        filteredUsers = filteredUsers.filter(user => user.username.indexOf(filter.text) !== -1)
    }
    if (filter.status) {
        filteredUsers = filteredUsers.filter(user => user.status === filter.status);
    }
    return filteredUsers;
};

const mapStateToProps = state => ({
    users: getVisibleUsers(state.users, state.filter)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);