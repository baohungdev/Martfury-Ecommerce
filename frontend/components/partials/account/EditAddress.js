import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import FormEditAddress from './modules/FormEditAddress';
import FormEditShipping from './modules/FormEditShipping';
import { getAccount } from '../../../store/auth/action';

class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(getAccount());
    }

    static getDerivedStateFromProps(props) {
        if (!props.loading && !props.isLoggedIn && typeof window !== 'undefined') {
            Router.push('/account/login');
        }
        return false;
    }

    render() {
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Notifications',
                url: '/account/notifications',
                icon: 'icon-alarm-ringing',
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Address',
                url: '/account/addresses',
                icon: 'icon-map-marker',
                active: true,
            },
            {
                text: 'Recent Viewed Product',
                url: '/account/recent-viewed-product',
                icon: 'icon-store',
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        const { user } = this.props.data;
        return (
            user && <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>{user.FirstName + '' + user.LastName || 'User'}</figcaption>
                                            <p>{user.Email}</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                {this.props.address === 'billing' && <FormEditAddress />}
                                {this.props.address === 'shipping' && <FormEditShipping />}
                            </div>
                        </div>
                    </div>
                </div>
            </section> || 'Invalid Account'
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(EditAddress);