import React, { Component } from 'react';
import ProductHorizontal from '../../../elements/products/ProductHorizontal';
import products from '../../../../public/static/data/home-1';

class NewArrivals extends Component {
    render() {
        return (
            <div className="ps-product-list ps-new-arrivals">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>Hot New Arrivals</h3>
                        <ul className="ps-section__links">
                            <li>
                                <a href="shop-grid.html">Technologies</a>
                            </li>
                            <li>
                                <a href="shop-grid.html">Electronic</a>
                            </li>
                            <li>
                                <a href="shop-grid.html">Furnitures</a>
                            </li>
                            <li>
                                <a href="shop-grid.html">Clothing & Apparel</a>
                            </li>
                            <li>
                                <a href="shop-grid.html">Health & Beauty</a>
                            </li>
                            <li>
                                <a href="shop-grid.html">View All</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            {products.newArrivals.map(product => (
                                <div
                                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                                    key={product.title}>
                                    <ProductHorizontal product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewArrivals;
