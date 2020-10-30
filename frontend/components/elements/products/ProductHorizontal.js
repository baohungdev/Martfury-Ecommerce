import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';
class ProductHorizontal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;
        return (
            <div className="ps-product--horizontal">
                <div className="ps-product__thumbnail">
                    <Link href="/shop">
                        <a>
                            <img src={product.thumbnail} alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                    </div>
                    {product.sale === true ? (
                        <p className="ps-product__price sale">
                            {currency ? currency.symbol : '$'}
                            {product.price}
                            <del className="ml-2">
                                {currency ? currency.symbol : '$'}
                                {product.salePrice}
                            </del>
                        </p>
                    ) : (
                        <p className="ps-product__price">
                            {currency ? currency.symbol : '$'}
                            {product.price}
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductHorizontal);
