import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login, oauth, authorizate } from '../../../store/auth/action';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(authorizate());
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn && typeof window !== 'undefined') {
            Router.push('/');
        }
        return false;
    }

    handleFeatureWillUpdate(e, target) {
        e.preventDefault();
        this.props.dispatch(oauth(target));
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(login(values));
            } else {
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleLoginSubmit}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <Form.Item>
                                        {getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid email!',
                                                }
                                            ],
                                        })(
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email address"
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                                {
                                                    pattern: new RegExp(/^(?=.*[a-z]).{6,}$/g),
                                                    message: 'Please input more than 6 string',
                                                }
                                            ],
                                        })(
                                            <Input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password..."
                                            />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Rememeber me
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e, 'facebook')}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e, 'google')}>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e => this.handleFeatureWillUpdate(e)}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrapFormLogin = Form.create()(Login);
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(WrapFormLogin);
