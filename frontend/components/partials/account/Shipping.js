import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShippingMethod } from '../../../store/shipping/action';

import Link from 'next/link';

class Shipping extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        const { shipping } = this.props;
        console.log(shipping)
    }

    componentDidMount() {
        this.props.dispatch(getShippingMethod());
    }

    render() {
        const { cart, shipping } = this.props;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Shipping Information</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-block--shipping">
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>Contact</small>
                                            <p>test@gmail.com</p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>Ship to</small>
                                            <p>
                                                2015 South Street, Midland,
                                                Texas
                                            </p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                    </div>
                                    <h4>Shipping Method</h4>
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>
                                                {shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingName} Shipping
                                            </small>
                                            <strong>${shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice} </strong>
                                        </figure>
                                    </div>
                                    <div className="ps-block__footer">
                                        <Link href="/account/checkout">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                Return to information
                                            </a>
                                        </Link>
                                        <Link href="/account/payment">
                                            <a className="ps-btn">
                                                Continue to payment
                                            </a>
                                        </Link>
                                        {/* <a className="ps-btn" onClick={this.onSubmit}>
                                            Continue to payment
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                <div className="ps-form__orders">
                                    <div className="ps-block--checkout-order">
                                        <div className="ps-block__content">
                                            <figure>
                                                <figcaption>
                                                    <strong>Product</strong>
                                                    <strong>total</strong>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__items">
                                                {cart.cartItems &&
                                                    cart.cartItems.map(product => (
                                                        <Link
                                                            href="/"
                                                            key={product.id}>
                                                            <a>
                                                                <strong>
                                                                    {
                                                                        product.title
                                                                    }
                                                                    <span>
                                                                        x
                                                                        {
                                                                            product.quantity
                                                                        }
                                                                    </span>
                                                                </strong>
                                                                <small>
                                                                    $
                                                                    {product.quantity *
                                                                        product.price}
                                                                </small>
                                                            </a>
                                                        </Link>
                                                    ))}
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Subtotal</strong>
                                                    <small>${cart.amount}</small>
                                                </figcaption>
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Shipping</strong>
                                                    <small>${shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice}.00</small>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__total">
                                                <h3>
                                                    Total
                                                    <strong>
                                                        ${parseInt(cart.amount) + parseInt(shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice)}
                                                        .00
                                                    </strong>
                                                </h3>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        shipping: state.shipping
    }
};
export default connect(mapStateToProps)(Shipping);
