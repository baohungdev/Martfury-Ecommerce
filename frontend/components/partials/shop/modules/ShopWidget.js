import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
    getProductsByPrice,
    getProductsByBrands,
} from '../../../../store/product/action';
import { Slider, Checkbox } from 'antd';
import Link from 'next/link';

class ShopWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: 0,
            priceMax: 2000,
        };
    }

    handleChangeRange(value) {
        this.setState({
            priceMin: value[0],
            priceMax: value[1],
        });
        this.props.dispatch(getProductsByPrice(value));
    }

    handleFilterByBrand(value) {
        Router.push({ pathname: '/shop', query: { brand: value } });
    }

    render() {
        /* You can get categories from your API using redux */
        const shopCategories = [
            {
                text: 'All Products',
                url: '/shop',
            },
            {
                text: 'Clothing & Apparel',
                url: '/shop?category=clothing',
            },
            {
                text: 'Garden & Kitchen',
                url: '/shop?category=garden',
            },
            {
                text: 'Consumer Electrics',
                url: '/shop?category=electronic',
            },
            {
                text: 'Health & Beauty',
                url: '/shop?category=beauty',
            },
            {
                text: 'Computers & Technologies',
                url: '/shop?category=technologies',
            },
            {
                text: 'Jewelry & Watches',
                url: '/shop?category=jewelry',
            },
            {
                text: 'Phones & Accessories',
                url: '/shop?category=phone',
            },
            {
                text: 'Sport & Outdoor',
                url: '/shop?category=sport',
            },
            {
                text: 'Babies & Moms',
                url: '/shop?category=baby',
            },
            {
                text: 'Books & Office',
                url: '/shop?category=book',
            },
            {
                text: 'Cars & Motocycles',
                url: '/shop?category=cars',
            },
        ];
        const brands = [
            {
                id: '1',
                value: 'apple',
                label: 'Apple',
            },
            {
                id: '2',
                value: 'marshall',
                label: 'Marshall',
            },
            {
                id: '3',
                value: 'herschel',
                label: 'Herschel',
            },
            {
                id: '4',
                value: 'microsoft',
                label: 'Microsoft',
            },
            {
                id: '5',
                value: 'megasystem',
                label: 'Mega System',
            },
            {
                id: '6',
                value: 'sony',
                label: 'Sony',
            },
            {
                id: '7',
                value: 'flatfuniture',
                label: 'Flat Funiture',
            },
            {
                id: '8',
                value: 'gucci',
                label: 'Gucci',
            },
            {
                id: '8',
                value: 'asus',
                label: 'asus',
            },
            {
                id: '9',
                value: 'samsung',
                label: 'Samsung',
            },
            {
                id: '10',
                value: 'lg',
                label: 'LG Electronics',
            },
            {
                id: '11',
                value: 'yamaha',
                label: 'Yamaha',
            },
            {
                id: '12',
                value: 'gopro',
                label: 'Gopro',
            },
            {
                id: '13',
                value: 'unilever',
                label: 'Unilever',
            },
        ];
        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="ps-list--categories">
                        {shopCategories.map(category => (
                            <li key={category.text}>
                                <Link href={category.url}>
                                    <a>{category.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <aside className="widget widget_shop">
                    <h4 className="widget-title">By Brands</h4>
                    <figure>
                        <Checkbox.Group
                            options={brands}
                            onChange={this.handleFilterByBrand.bind(this)}
                        />
                    </figure>
                    <figure>
                        <h4 className="widget-title">By Price</h4>
                        <Slider
                            range
                            defaultValue={[0, 2000]}
                            max={2000}
                            onAfterChange={this.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: ${this.state.priceMin} - ${this.state.priceMax}
                        </p>
                    </figure>
                </aside>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default connect(mapStateToProps)(ShopWidget);
