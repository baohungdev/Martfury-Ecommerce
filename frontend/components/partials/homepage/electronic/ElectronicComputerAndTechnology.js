import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { homeTechnology } from '../../../../public/static/data/electronic';
import Product from '../../../elements/products/Product';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';

class ElectronicComputerAndTechnology extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
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
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Computers & Technology</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Laptop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Desktop PC</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Smartphone</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Mainboards</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>PC Gaming</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Accessories</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting} className="ps-carousel outside">
                            {homeTechnology.map(product => (
                                <Product product={product} key={product.title} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElectronicComputerAndTechnology;
