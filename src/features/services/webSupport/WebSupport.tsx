import React from 'react';
import {HeaderDev} from "../webDev/headerWeb/HeaderDev";
import logo from "../../../assets/img/hr-girl.jpg";
import {CostService} from "./CostService/CostService";

const WebSupport = () => {
    return (
        <div >
            <HeaderDev header={'Сопровождение и поддержка сайтов'} img={logo} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.'}/>
            <CostService/>
        </div>
    );
};

export default WebSupport;
