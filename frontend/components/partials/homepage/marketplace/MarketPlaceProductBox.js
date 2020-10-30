import React, { Component } from 'react';

import {
    home_3_clothing,
    home_3_technology,
    home_3_electronic,
    home_3_garden_kitchen,
    home_3_healthy,
} from '../../../../public/static/data/martketplace';
import MarketClothingsAndApparel from './modules/MarketClothingsAndApparel';
import MarketComputerAndTechnology from './modules/MarketComputerAndTechnology';
import MarketConsumerElectronics from './modules/MarketConsumerElectronics';
import MarketGardenAndKitchen from './modules/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from './modules/MarketHeathyAndBeauty';

class MarketPlaceProductBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-section--gray">
                <div className="container">
                    <MarketClothingsAndApparel data={home_3_clothing} />
                    <MarketConsumerElectronics data={home_3_electronic} />
                    <MarketComputerAndTechnology data={home_3_technology} />
                    <MarketGardenAndKitchen data={home_3_garden_kitchen} />
                    <MarketHeathyAndBeauty data={home_3_healthy} />
                </div>
            </div>
        );
    }
}

export default MarketPlaceProductBox;
