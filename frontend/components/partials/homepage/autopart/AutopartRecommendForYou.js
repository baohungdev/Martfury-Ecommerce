import React, { Component } from 'react';

import Link from 'next/link';
import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Product from '../../../elements/products/Product';



class AutopartRecommendForYou extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
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
            <section className="ps-product-list ps-recommend-for-you">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>RECOMMENDED FOR YOU</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Best Seller</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>New Arrival</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Top Rated</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Trending Products</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel outside">
                            {data.map(product => (
                                <Product
                                    product={product}
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default AutopartRecommendForYou;
