import React from 'react';
import './login.css';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {loginUser} from '../../store/actions/user';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    onLoginInputChange = event => {
        this.setState({
            username: event.target.value
        });
    };

    onLoginUser = () => {
        const {username} = this.state;
        const {loginUser} = this.props;
        loginUser(username);
    };

    render() {
        const {username} = this.state;
        const {user} = this.props;
        if (user.user) {
            return <Redirect to='/main'/>;
        }
        return (
            <div className="login">
                <TextField
                    className="login-input"
                    label="Username"
                    value={username}
                    onChange={this.onLoginInputChange}
                    margin="normal"
                />
                <Button variant="contained" className="login-button" onClick={this.onLoginUser}>
                    Login
                </Button>
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
        loginUser: name => {
            dispatch(loginUser(name));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);