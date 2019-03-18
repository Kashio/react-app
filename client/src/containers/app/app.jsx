import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router';
import Login from '../login/login';
import Main from '../main/main';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/main" component={Main} />
                </Switch>
            </div>
        );
    }
}

export default App;