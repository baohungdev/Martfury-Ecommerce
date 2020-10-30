import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import ProductDetailOnSale from '../../components/elements/detail/ProductDetailOnSale';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ProductOnSalePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Health & Beauty',
            url: '/shop',
        },
        {
            text: 'Equipments',
            url: '/shop',
        },
        {
            text: 'Baxter Care Hair Kit For Bearded Mens',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">
                            <ProductDetailOnSale />
                        </div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>
                    <CustomerBought />
                    <RelatedProduct />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default ProductOnSalePage;
