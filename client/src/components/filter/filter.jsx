import React from 'react';
import './filter.css';
import UserStatus from '../../user-status';
import TextField from '@material-ui/core/TextField';

class Filter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    renderStatuses = () => {
        return UserStatus.map(status => <option key={status} value={status}>{status}</option>);
    };

    onSetStatusFilter = event => {
        const {onSetStatusFilter} = this.props;
        onSetStatusFilter(event.target.value);
    };

    onUsernameFilterChange = event => {
        const {onSetTextFilter} = this.props;
        this.setState({
            text: event.target.value
        });
        onSetTextFilter(event.target.value);
    };

    render() {
        const {text} = this.state;
        return (
            <div className="filter">
                Choose status to filter on: <select className="filter-statuses" onChange={this.onSetStatusFilter}>
                    {this.renderStatuses()}
                </select>
                <div>Choose username text to filter on:</div>
                <TextField
                    className="filter-username"
                    label="Filter Username"
                    value={text}
                    onChange={this.onUsernameFilterChange}
                    margin="normal"
                />
            </div>
        );
    }
}

export default Filter;