import React from 'react';
import {
    home_3_clothing,
    home_3_electronic,
    home_3_garden_kitchen,
} from '../../../../public/static/data/martketplace';

import MarketPlace3Promotions from './MarketPlace3Promotions';
import Market3ConsumerElectronics from './modules/Market3ConsumerElectronics';
import Market3Clothing from './modules/Market3Clothing';
import Market3GardenAndKitchen from './modules/Market3GardenAndKitchen';

const MarketPlace3ProductBox = () => (
    <div className="ps-product-box">
        <div className="container">
            <MarketPlace3Promotions />
            <Market3ConsumerElectronics data={home_3_electronic} />
            <Market3Clothing data={home_3_clothing} />
            <Market3GardenAndKitchen data={home_3_garden_kitchen} />
        </div>
    </div>
);

export default MarketPlace3ProductBox;
