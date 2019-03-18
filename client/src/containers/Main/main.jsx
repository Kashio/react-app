import React from 'react';
import './main.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import UserDisplay from '@/user-display/user-display';
import Filter from '@/filter/filter';
import FilteredUserList from '../filtered-user-list/filtered-user-list';
import {updateUserStatus} from '../../store/actions/user';
import {setStatusFilter, setTextFilter} from '../../store/actions/filter';
import {logout} from '../../api/user';
import {listUsers} from '../../store/actions/users';
import Button from '@material-ui/core/Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            logout(this.props.user.user._id);
        });
    };

    onRefreshUsersButton = () => {
        const {user, onListUsers} = this.props;
        onListUsers(user.user._id);
    };

    render() {
        const {user, onUpdateUserStatus, onSetStatusFilter, onSetTextFilter} = this.props;
        if (!user.user) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="main">
                <UserDisplay user={user} onUpdateStatus={onUpdateUserStatus}/>
                <Filter onSetStatusFilter={onSetStatusFilter} onSetTextFilter={onSetTextFilter} />
                <Button variant="contained" className="refresh-users=button" onClick={this.onRefreshUsersButton}>
                    Refresh users
                </Button>
                <FilteredUserList />
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
        onListUsers: (_id) => {
            dispatch(listUsers(_id));
        },
        onUpdateUserStatus: (_id, status) => {
            dispatch(updateUserStatus(_id, status));
        },
        onSetStatusFilter: (status) => {
            dispatch(setStatusFilter(status));
        },
        onSetTextFilter: (text) => {
            dispatch(setTextFilter(text));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);