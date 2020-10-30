import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import NextArrow from '../../../../elements/carousel/NextArrow';
import PrevArrow from '../../../../elements/carousel/PrevArrow';
import Product from '../../../../elements/products/Product';

class Market2Clothing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        const { data } = this.props;
        return (
            <section className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Home, Garden & Kitchen</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>New Arrivals</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Best seller</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Must Popular</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting}>
                            {data.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Market2Clothing;
