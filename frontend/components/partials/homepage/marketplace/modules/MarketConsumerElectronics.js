import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';

class MarketConsumerElectronics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const { data } = this.props;
        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>Consumer Electronics</h3>
                    <ul>
                        <li>
                            <Link href="/shop" as="/shop/best-seller">
                                <a>Best Seller</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/new-arrivals">
                                <a>New Arrivals</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/tv-television">
                                <a>TV Television</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/air-conditions">
                                <a>Air Condition</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/washing-machine">
                                <a>Washing Machine</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/microware">
                                <a>Microwave</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/refrigerator">
                                <a>Refrigerator</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/office-electronic">
                                <a>Office Electronic</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/car-electronic">
                                <a>Car Electronic</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/sale-and-deal">
                                <a>Sales & Deals</a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/shop">
                        <a className="ps-block__more-link">View All</a>
                    </Link>
                </div>
                <div className="ps-block__slider">
                    <Slider {...carouselSettings}>
                        <a>
                            <img src="/static/img/slider/home-3/electronic-1.jpg" alt="martfury" />
                        </a>
                        <a>
                            <img src="/static/img/slider/home-3/electronic-2.jpg" alt="martfury" />
                        </a>
                        <a>
                            <img src="/static/img/slider/home-3/electronic-3.jpg" alt="martfury" />
                        </a>
                    </Slider>
                </div>
                <div className="ps-block__product-box">
                    {data.map((product, index) => {
                        if (index < 6) {
                            return <ProductSimple product={product} key={product.id} />;
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default MarketConsumerElectronics;
