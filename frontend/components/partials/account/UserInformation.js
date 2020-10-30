import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Radio, DatePicker } from 'antd';
import { connect } from 'react-redux';
import { updateAccount, getAccount } from '../../../store/auth/action';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(getAccount());
        if (!this.props.loading && !this.props.isLoggedIn) {
            Router.push('/account/login');
        }
    }

    handleAccountUpdateSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.Birth = values.Birth.format("YYYY-MM-DD");
                this.props.dispatch(updateAccount(values));
            } else {
            }
        });
    };

    render() {
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
                active: true,
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
        const { getFieldDecorator } = this.props.form;
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
                                <Form
                                    className="ps-form--account-setting"
                                    onSubmit={this.handleAccountUpdateSubmit}>
                                    <div className="ps-form__header">
                                        <h3>Account Information</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <Form.Item label="Name">
                                                {getFieldDecorator('FirstName', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: 'Please input your name!',
                                                        },
                                                    ],
                                                    initialValue: user.FirstName + '' + user.LastName || '',
                                                })(
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Username"
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Phone Number">
                                                        {getFieldDecorator(
                                                            'Phone',
                                                            {
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Please input your phone number!',
                                                                    },
                                                                ],
                                                                initialValue: user.Phone || '',
                                                            }
                                                        )(
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Enter your phone number"
                                                            />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Email">
                                                        {getFieldDecorator(
                                                            'Email',
                                                            {
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Please input your email!',
                                                                    },
                                                                    {
                                                                        type:
                                                                            'email',
                                                                        message:
                                                                            'The input is not valid E-mail!',
                                                                    },
                                                                ],
                                                                initialValue: user.Email || '',
                                                            }
                                                        )(
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Email address"
                                                            />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Birthday</label>
                                                    <Form.Item>
                                                        {getFieldDecorator('Birth', {
                                                            rules: [
                                                            ],
                                                        })(
                                                            <DatePicker />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label="Gender">
                                                        {getFieldDecorator(
                                                            'Gender',
                                                            {
                                                                rules: [
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Please choose!',
                                                                    },
                                                                ],
                                                                initialValue: user.Gender || '',
                                                            }
                                                        )(
                                                            <Radio.Group>
                                                                <Radio value="male">
                                                                    Male
                                                                </Radio>
                                                                <Radio value="female">
                                                                    Female
                                                                </Radio>
                                                            </Radio.Group>
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> || 'Invalid Account'
        );
    }
}
const WrapFormUserInformation = Form.create()(UserInformation);
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(WrapFormUserInformation);
