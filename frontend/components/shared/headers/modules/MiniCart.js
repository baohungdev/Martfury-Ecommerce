import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';

class MiniCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { cart } = this.props;
        // console.log(cart.cartItems)
        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{cart.cartTotal ? cart.cartTotal : 0}</i>
                    </span>
                </a>
                {cart.cartItems && cart.cartItems.length > 0 ? (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            {cart.cartItems && cart.cartItems.length > 0
                                ? cart.cartItems.map((product, index) => (
                                      <div
                                          className="ps-product--cart-mobile"
                                          key={index}>
                                          <div className="ps-product__thumbnail">
                                              <Link
                                                  href="/product/[pid]"
                                                  as={`/product/${product.id}`}>
                                                  <a>
                                                      <img
                                                          src={
                                                              product.thumbnail
                                                          }
                                                          alt="martfury"
                                                      />
                                                  </a>
                                              </Link>
                                          </div>
                                          <div className="ps-product__content">
                                              <a
                                                  className="ps-product__remove"
                                                  onClick={this.handleRemoveCartItem.bind(
                                                      this,
                                                      product
                                                  )}>
                                                  <i className="icon-cross"></i>
                                              </a>
                                              <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                                  <a className="ps-product__title">
                                                      {product.title}
                                                  </a>
                                              </Link>
                                              <p>
                                                  <strong>Sold by:</strong>{' '}
                                                  {product.vendor}
                                              </p>
                                              <small>
                                                  {product.quantity} x $
                                                  {product.price}
                                              </small>
                                          </div>
                                      </div>
                                  ))
                                : ''}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                Sub Total:
                                <strong>${cart.amount ? cart.amount : 0}</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart" as="/cart">
                                    <a className="ps-btn">View Cart</a>
                                </Link>
                                <Link href="/account/checkout" as="/checkout">
                                    <a className="ps-btn">Checkout</a>
                                </Link>
                            </figure>
                        </div>
                    </div>
                ) : (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            <span>No products in cart</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth
    };
};
export default connect(mapStateToProps)(MiniCart);
