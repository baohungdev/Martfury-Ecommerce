import React from 'react';
import Link from 'next/link';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>
                        <img src={product.thumbnail} alt="martfury" />
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
