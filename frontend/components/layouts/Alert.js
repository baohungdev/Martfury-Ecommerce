import React, { Component } from 'react';
import Router from 'next/router';

import { notification } from 'antd';
import { connect } from 'react-redux';

const modalAlert = (alert) => {
    notification[alert.type]({
        message: alert.type,
        description: alert.msg,
    });
};

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps = (props) => {
        if (props.alert && props.alert.msg && props.alert.timestamp > Date.now() - 3 ) {
            modalAlert(props.alert);
            if (props.alert.msg === 'Unauthorized') Router.push('/account/login');
        }
        return false;
    }

    render() {
        return (
            <div></div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Alert);
