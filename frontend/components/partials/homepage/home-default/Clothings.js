import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import { clothing } from '../../../../public/static/data/home-1';

class Clothings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProducts: clothing.newArrivals,
            activeCategory: 'newArrivals',
        };
    }

    handleChangeProduct(e, products, currentItem) {
        e.preventDefault();
        this.setState({
            currentProducts: products,
            activeCategory: currentItem,
        });
    }

    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 3,
            lazyload: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1680,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
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
        const products = this.state.currentProducts;
        const { newArrivals, mostPopular, bestSeller } = clothing;
        const { activeCategory } = this.state;
        const sectionLinks = [
            {
                title: 'New Arrivals',
                products: newArrivals,
                name: 'newArrivals',
            },
            {
                title: 'Best seller',
                products: bestSeller,
                name: 'bestSeller',
            },
            {
                title: 'Most Popular',
                products: mostPopular,
                name: 'mostPopular',
            },
        ];
        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>Clothings</h3>
                        <ul className="ps-section__links">
                            {sectionLinks.map(link => (
                                <li
                                    className={
                                        activeCategory === link.name
                                            ? 'active'
                                            : ''
                                    }
                                    key={link.name}>
                                    <a
                                        onClick={e =>
                                            this.handleChangeProduct(
                                                e,
                                                link.products,
                                                link.name
                                            )
                                        }>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        {products.length > 0 ? (
                            <Slider
                                {...carouselSetting}
                                className="ps-carousel outside">
                                {products.map(product => (
                                    <div className="item" key={product.id}>
                                        <Product product={product} />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No products</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Clothings;
