import React, { Component } from 'react';
import { Menu, } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        const shopCategories = [
            {
                text: 'All Products',
                url: '/shop',
            },
            {
                text: 'Clothing & Apparel',
                url: '/shop?category=clothing',
            },
            {
                text: 'Garden & Kitchen',
                url: '/shop?category=garden',
            },
            {
                text: 'Consumer Electrics',
                url: '/shop?category=electronic',
            },
            {
                text: 'Health & Beauty',
                url: '/shop?category=beauty',
            },
            {
                text: 'Computers & Technologies',
                url: '/shop?category=technologies',
            },
            {
                text: 'Jewelry & Watches',
                url: '/shop?category=jewelry',
            },
            {
                text: 'Phones & Accessories',
                url: '/shop?category=phone',
            },
            {
                text: 'Sport & Outdoor',
                url: '/shop?category=sport',
            },
            {
                text: 'Babies & Moms',
                url: '/shop?category=baby',
            },
            {
                text: 'Books & Office',
                url: '/shop?category=book',
            },
            {
                text: 'Cars & Motocycles',
                url: '/shop?category=cars',
            },
        ];
        return (
            <div className="ps-panel__wrapper">
                <div className="ps-panel__header">
                    <h3>Categories</h3>
                </div>
                <div className="ps-panel__content">
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}>
                        {shopCategories.map(category => (
                            <Menu.Item key={category.text}>
                                <Link href={category.url}>
                                    <a>{category.text}</a>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
            </div>
        );
    }
}

export default PanelCategories;
