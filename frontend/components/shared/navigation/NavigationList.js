import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import PanelMenu from '../panel/PanelMenu';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelSearch from '../panel/PanelSearch';
import PanelCategories from '../panel/PanelCategories';

class NavigationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        };
    }

    handleDrawerClose = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    handleShowMenuDrawer = () => {
        this.setState({
            menuDrawer: !this.state.menuDrawer,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    handleShowCartDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: !this.state.cartDrawer,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };
    handleShowSearchDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: !this.state.searchDrawer,
            categoriesDrawer: false,
        });
    };
    handleShowCategoriesDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: !this.state.categoriesDrawer,
        });
    };

    render() {
        const {
            menuDrawer,
            searchDrawer,
            cartDrawer,
            categoriesDrawer,
        } = this.state;

        return (
            <div className="navigation--list">
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.menuDrawer}>
                    <PanelMenu />
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.cartDrawer}>
                    <PanelCartMobile />
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.searchDrawer}>
                    <PanelSearch />
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.categoriesDrawer}>
                    <PanelCategories />
                </Drawer>
                <div className="navigation__content">
                    <a
                        className={`navigation__item ${
                            menuDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowMenuDrawer}>
                        <i className="icon-menu"></i>
                        <span> Menu</span>
                    </a>
                    <a
                        className={`navigation__item ${
                            categoriesDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowCategoriesDrawer}>
                        <i className="icon-list4"></i>
                        <span> Categories</span>
                    </a>
                    <a
                        className={`navigation__item ${
                            searchDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowSearchDrawer}>
                        <i className="icon-magnifier"></i>
                        <span> Search</span>
                    </a>
                    <a
                        className={`navigation__item ${
                            cartDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowCartDrawer}>
                        <i className="icon-bag2"></i>
                        <span> Cart</span>
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(NavigationList);
