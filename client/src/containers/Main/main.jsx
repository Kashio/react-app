import React from 'react';
import './main.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import UserDisplay from '@/user-display/user-display';
import Filter from '@/filter/filter';
import FilteredUserList from '../filtered-user-list/filtered-user-list';
import {updateUserStatus} from '../../store/actions/user';
import {setStatusFilter, setTextFilter} from '../../store/actions/filter';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, onUpdateUserStatus, onSetStatusFilter, onSetTextFilter} = this.props;
        if (!user.user) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="main">
                <UserDisplay user={user} onUpdateStatus={onUpdateUserStatus}/>
                <Filter onSetStatusFilter={onSetStatusFilter} onSetTextFilter={onSetTextFilter} />
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