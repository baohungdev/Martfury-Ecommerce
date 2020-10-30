import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { getOrderlistList } from '../../../store/order/action';
import Link from 'next/link';
import { Rate } from 'antd';

class Orderlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderlistItems: this.props.order.orderlistItems
    }
  }

  componentDidMount() {
    this.props.dispatch(getOrderlistList());
  }

  componentWillReceiveProps(props) {
    if( this.props.order.orderlistItems !== props.order.orderlistItems ) {
      this.setState({ orderlistItems: props.order.orderlistItems })
    }
  }

  handleAddItemToCart = (e, product) => {
    this.props.dispatch(addItem(product));
  };

  handleRemoveWishListItem = (e, product) => {
    e.preventDefault();
    this.props.dispatch(removeWishlistItem(product));
  };

  render() {
    const { wishlistItems } = this.props;
    const { orderlistItems } = this.state
    return (
      <div className="ps-section--shopping ps-whishlist">
        <div className="container">
          <div className="ps-section__header">
            <h1>Orderlist</h1>
          </div>
          <div className="ps-section__content">
            {wishlistItems && wishlistItems.length === 0 ? (
              <div className="alert alert-danger" role="alert">
                Orderlist is empty!
              </div>
            ) : (
                <div className="table-responsive">
                  <table className="table ps-table--whishlist">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>Order Number</th>
                        <th style={{textAlign: 'center'}}>Order Date</th>
                        <th style={{textAlign: 'center'}}>Required Date</th>
                        <th style={{textAlign: 'center'}}>Freight</th>
                        <th style={{textAlign: 'center'}}>Status</th>
                        <th style={{textAlign: 'center'}}>Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orderlistItems.length > 0 &&
                        orderlistItems.map((order) => {
                          return (
                            <tr key={order.OrderID}>
                              <td style={{textAlign: 'center'}}>{order.OrderNumber}</td>
                              <td style={{textAlign: 'center'}}>{order.OrderDate}</td>
                              <td style={{textAlign: 'center'}}>{order.RequiredDate}</td>
                              <td style={{textAlign: 'center'}}>{order.Freight}</td>
                              <td style={{textAlign: 'center'}}>{order.TransactStatus}</td>
                              <td style={{textAlign: 'center'}}>{order.Paid ? 'Yes' : 'No'}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    order: state.order,
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Orderlist);
