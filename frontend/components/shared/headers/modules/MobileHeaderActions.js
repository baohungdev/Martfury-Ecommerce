import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class MobileHeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth } = this.props;
        return (
            <div className="header__actions">
                <MiniCart />
                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinks isLoggedIn={true} />
                ) : (
                    <AccountQuickLinks isLoggedIn={false} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(MobileHeaderActions);
