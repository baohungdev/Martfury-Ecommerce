import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { Radio, Select } from 'antd';
import { getCart, clearCart } from '../../../store/cart/action';
import { setShippingProcess } from '../../../store/shipping/action';
import { setOrderInfo } from '../../../store/order/action';

const { Option } = Select;

const paymentType = [
  {
    id: 1,
    type: 'Visa / Master Card',
  },
  {
    id: 2,
    type: 'Paypal'
  }
]

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 1,
      paid: true
    };
  }

  handleChangePaymentMethod = e => {
    this.setState({ method: e.target.value });
  };

  onSubmit = () => {
    const { cart, shipping, auth } = this.props;
    const payment = {
      PaymentMethod: this.state.method,
      cardNumber: document.getElementById("card-number").value
    }
    if(this.state.paid) {
      this.props.dispatch(setShippingProcess({
        cart,
        shipping,
        payment,
        auth
      }))
      if(!auth || !auth.isLoggedIn) {
        this.props.dispatch(setOrderInfo({
          cart,
          shipping,
          payment
        }))
      }
      this.props.dispatch(clearCart());
      Router.push('/account/order-list');
    }
  }

  componentDidMount() {
    this.props.dispatch(getCart());
  }

  render() {
    const { cart, shipping } = this.props;
    let month = [],
      year = [];
    for (let i = 1; i <= 12; i++) {
      month.push(i);
    }
    for (let i = 2019; i <= 2050; i++) {
      year.push(i);
    }
    return (
      <div className="ps-checkout ps-section--shopping">
        <div className="container">
          <div className="ps-section__header">
            <h1>Payment</h1>
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
                        {shipping.shippingMethod && shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingName} Shipping
                      </small>
                      <strong>${shipping.shippingMethod && shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice}</strong>
                    </figure>
                  </div>
                  <h4>Payment Methods</h4>

                  <div className="ps-block--payment-method">
                    <div className="ps-block__header">
                      <Radio.Group
                        onChange={e =>
                          this.handleChangePaymentMethod(e)
                        }
                        value={this.state.method}>
                        {
                          paymentType.map((pt) => {
                            return (<Radio value={pt.id} key={pt.id}>
                              {pt.type}
                            </Radio>)
                          })
                        }
                      </Radio.Group>
                    </div>
                    <div className="ps-block__content">
                      {this.state.method === 1 ? (
                        <div className="ps-block__tab">
                          <div className="form-group">
                            <label>
                              Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="card-number"
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Card Holders
                            </label>
                            <input
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="row">
                            <div className="col-8">
                              <div className="form-group">
                                <label>
                                  Expiration
                                  Date
                                                                </label>
                                <div className="row">
                                  <div className="col-6">
                                    <Select
                                      defaultValue={
                                        1
                                      }>
                                      {month.map(
                                        item => (
                                          <Option
                                            value={
                                              item
                                            }
                                            key={
                                              item
                                            }>
                                            {
                                              item
                                            }
                                          </Option>
                                        )
                                      )}
                                    </Select>
                                  </div>
                                  <div className="col-6">
                                    <Select
                                      defaultValue={
                                        2020
                                      }>
                                      {year.map(
                                        item => (
                                          <Option
                                            value={
                                              item
                                            }
                                            key={
                                              item
                                            }>
                                            {
                                              item
                                            }
                                          </Option>
                                        )
                                      )}
                                    </Select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label>
                                  CVV
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button className="ps-btn ps-btn--fullwidth" onClick={this.onSubmit}>Submit</button>
                          </div>
                        </div>
                      ) : (
                          <div className="ps-block__tab">
                            <a className="ps-btn">
                              Process with Paypal
                            </a>
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="ps-block__footer">
                    <Link href="/account/shipping">
                      <a>
                        <i className="icon-arrow-left mr-2"></i>
                          Return to shipping
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
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
                                    x {
                                      product.quantity
                                    }
                                  </span>
                                </strong>
                                <small>
                                  ${product.quantity * product.price}
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
                          <small>${shipping.shippingMethod && shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice}.00</small>
                        </figcaption>
                      </figure>
                      <figure className="ps-block__total">
                        <h3>
                          Total
                          <strong>
                            ${parseInt(cart.amount) + parseInt(shipping.shippingMethod && shipping.shippingMethod.length > 0 && shipping.shippingMethod[0].ShippingPrice)}.00
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
    shipping: state.shipping,
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Payment);
