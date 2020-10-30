import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import Product from '../../../components/elements/products/Product';

class CategoriesBestSeller extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ],
        };
        const { products } = this.props;
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="ps-section__header">
                    <h3>Best Seller Items</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Clothing & Apparel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Garden & Kitchen</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Consumer Electrics</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <Slider {...carouselSetting}>
                        {products &&
                            products.length > 0 &&
                            products.map((product, index) => {
                                if (index > 6 && index < 15) {
                                    return <Product product={product} key={product.id} />;
                                }
                            })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default CategoriesBestSeller;
