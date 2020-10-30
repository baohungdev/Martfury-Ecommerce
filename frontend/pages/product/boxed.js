import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductDetailBox from '../../components/elements/detail/ProductDetailBox';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ProductBoxedPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Consumer Electrics',
            url: '/shop',
        },
        {
            text: 'Refrigerators',
            url: '/shop',
        },
        {
            text: 'Marshall Kilburn Portable Wireless Speaker',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--product ps-page--product-box">
                <div className="container">
                    <ProductDetailBox />
                    <CustomerBought boxed={true} />
                    <RelatedProduct boxed={true} />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default ProductBoxedPage;
