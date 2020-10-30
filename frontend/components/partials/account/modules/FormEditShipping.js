import React, { Component } from 'react';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { updateShippingAddress, authorizate } from '../../../../store/auth/action';

class FormEditShipping extends Component {
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

    handleShippingAddressUpdateSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(updateShippingAddress(values));
            } else {
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { user } = this.props.data;
        console.log(this.props)
        return (
            user && <Form
                className="ps-form--edit-address"
                onSubmit={this.handleShippingAddressUpdateSubmit}>
                <div className="ps-form__header">
                    <h3>Shipping address</h3>
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
                            {getFieldDecorator('ShipAddress', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Street Address!',
                                    },
                                ],
                                initialValue: user.ShipAddress || '',
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
                            {getFieldDecorator('ShipCity', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your State!',
                                    },
                                ],
                                initialValue: user.ShipCity || '',
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
                            {getFieldDecorator('ShipPostalCode', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Postcode!',
                                    },
                                ],
                                initialValue: user.ShipPostalCode || '',
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

const WrapFormUserInformation = Form.create()(FormEditShipping);
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(WrapFormUserInformation);