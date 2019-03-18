import React from 'react';
import './login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {loginUser} from '../../store/actions/user';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    onLoginUser = () => {
        const {name} = this.state;
        const {loginUser} = this.props;
        loginUser(name);
    };

    render() {
        const {name} = this.state;
        return (
            <div className="login">
                <TextField
                    className="login-input"
                    label="Name"
                    value={name}
                    margin="normal"
                />
                <Button variant="contained" className="login-button" onClick={this.onLoginUser}>
                    Login
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: name => {
            dispatch(loginUser(name));
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Login);