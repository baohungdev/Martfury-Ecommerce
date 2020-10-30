import React, { Component } from 'react';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { updateBillingAddress, authorizate } from '../../../../store/auth/action';

class FormEditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(authorizate());
    }

    static getDerivedStateFromProps(props) {
        if (!props.loading && !props.isLoggedIn && typeof window !== 'undefined') {
            Router.push('/account/login');
        }
        return false;
    }

    handleBillingAddressUpdateSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(updateBillingAddress(values));
            } else {
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { user } = this.props.data;
        return (
            user && <Form
                className="ps-form--edit-address"
                onSubmit={this.handleBillingAddressUpdateSubmit}>
                <div className="ps-form__header">
                    <h3>Billing address</h3>
                </div>
                <div className="ps-form__content">
                    <div className="form-group">
                        <Form.Item label="FirstName">
                            {getFieldDecorator('FirstName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your FirstName!',
                                    },
                                ],
                                initialValue: user.FirstName || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="FirstName"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item label="LastName">
                            {getFieldDecorator('LastName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your LastName!',
                                    },
                                ],
                                initialValue: user.LastName || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="LastName"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <label>
                            Company Name:
                        </label>
                        <input type="text" placeholder="Company Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <Form.Item label="Country">
                            {getFieldDecorator('Country', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Country!',
                                    },
                                ],
                                initialValue: user.Country || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Country"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item label="Street Address">
                            {getFieldDecorator('BillingAddress', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Street Address!',
                                    },
                                ],
                                initialValue: user.BillingAddress || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Street Address"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item label="State">
                            {getFieldDecorator('BillingCity', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your State!',
                                    },
                                ],
                                initialValue: user.BillingCity || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="State"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item label="Postcode">
                            {getFieldDecorator('BillingPostalCode', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Postcode!',
                                    },
                                ],
                                initialValue: user.BillingPostalCode || '',
                            })(
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Postcode"
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item label="Email address">
                            {getFieldDecorator(
                                'Email',
                                {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
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
                    <div className="form-group submit">
                        <button className="ps-btn">Save Address</button>
                    </div>
                </div>
            </Form> || 'Invalid user'
        );
    }
}

const WrapFormUserInformation = Form.create()(FormEditAddress);
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(WrapFormUserInformation);