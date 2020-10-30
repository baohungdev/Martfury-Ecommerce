import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';

class MarketGardenAndKitchen extends Component {
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
                    <h3>
                        Clothing & <br /> Apparel
                    </h3>
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
                            <Link href="/shop" as="/shop/furniture">
                                <a>Furniture</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/home-decor">
                                <a>Home Decor</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/cookware">
                                <a>Cookware</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/utensils-and-gadget">
                                <a>Utensils & Gadget</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/garden-tools">
                                <a>Garden Tools</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/acessesories">
                                <a>Acessesories</a>
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
                            <img src="/static/img/slider/home-3/kitchen-1.jpg" alt="martfury" />
                        </a>
                        <a>
                            <img src="/static/img/slider/home-3/kitchen-2.jpg" alt="martfury" />
                        </a>
                        <a>
                            <img src="/static/img/slider/home-3/kitchen-3.jpg" alt="martfury" />
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

export default MarketGardenAndKitchen;
