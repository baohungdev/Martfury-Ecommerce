import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ProductDetailImageSwatches from '../../components/elements/detail/ProductDetailImageSwatches';

const ProductImageSwatchesPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Clothing & Apparel',
            url: '/shop',
        },
        {
            text: 'Mens',
            url: '/shop',
        },
        {
            text: 'Sleeve Linen Blend Caro Pane Shirt',
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
                            <ProductDetailImageSwatches />
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

export default ProductImageSwatchesPage;
