import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import { furniture } from '../../../../public/static/data/furniture';
import Product from '../../../elements/products/Product';

class FurnitureBestSeller extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };

        return (
            <div className="ps-home-trending-products ps-section--furniture">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>BEST SELLER PRODUCTS</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSettings}>
                            {furniture.map((product, index) => {
                                if (index > 3) {
                                    return (
                                        <div className="item" key={product.id}>
                                            <Product product={product} />
                                        </div>
                                    );
                                }
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default FurnitureBestSeller;
