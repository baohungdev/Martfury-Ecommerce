import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAddress } from '../../../store/auth/action';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(getAddress());
        if (!this.props.loading && !this.props.isLoggedIn) {
            Router.push('/account/login');
        }
    }

    static getDerivedStateFromProps(props) {
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
        const { user, bill, shipping } = this.props.data;
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
                            <div className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Billing address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    {user.BillingAddress && <div className="row mb-5">
                                                        <div className="col-6">FirstName:</div>
                                                        <div className="col-6">{user.FirstName}</div>
                                                        <div className="col-6">LastName:</div>
                                                        <div className="col-6">{user.LastName}</div>
                                                        <div className="col-6">Country:</div>
                                                        <div className="col-6">{user.Country}</div>
                                                        <div className="col-6">Street Address:</div>
                                                        <div className="col-6">{user.BillingAddress}</div>
                                                        <div className="col-6">State:</div>
                                                        <div className="col-6">{user.BillingCity}</div>
                                                        <div className="col-6">Postcode:</div>
                                                        <div className="col-6">{user.BillingPostalCode}</div>
                                                        <div className="col-6">Email address:</div>
                                                        <div className="col-6">{user.Email}</div>
                                                    </div> || <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>}
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Shipping address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    {user.ShipAddress && <div className="row mb-5">
                                                        <div className="col-6">FirstName:</div>
                                                        <div className="col-6">{user.FirstName}</div>
                                                        <div className="col-6">LastName:</div>
                                                        <div className="col-6">{user.LastName}</div>
                                                        <div className="col-6">Country:</div>
                                                        <div className="col-6">{user.Country}</div>
                                                        <div className="col-6">Street Address:</div>
                                                        <div className="col-6">{user.ShipAddress}</div>
                                                        <div className="col-6">State:</div>
                                                        <div className="col-6">{user.ShipCity}</div>
                                                        <div className="col-6">Postcode:</div>
                                                        <div className="col-6">{user.ShipPostalCode}</div>
                                                        <div className="col-6">Email address:</div>
                                                        <div className="col-6">{user.Email}</div>
                                                    </div> || <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>}
                                                    <Link href="/account/edit-shipping">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
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
export default connect(mapStateToProps)(Addresses);
