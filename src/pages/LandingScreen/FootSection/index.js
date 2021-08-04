import { Col, Row } from 'antd';
import React from 'react';
import { images } from '../../../images';
import './style.scss';


const textItem =["Twitter","Channel Anouncement","Blog", "Docs", "Brand Asset"]

export default function FootSection () {

    const renderTextBoxItem = () =>{
        return textItem.map(it=>{
            return(
                <div key={it} className="text-box-item">
                    {it}
                </div>
            )
        })
    }

    return (
        <div className="foot-section">
            <div className="foot-section__logo-coin98">
                <img src={images.logoCoin98} alt=""/>
            </div>
            <div className="foot-section__text-box">
               {renderTextBoxItem()}
            </div>
            <div className="foot-section__text-authority">
               2021 Coin98 Labs. All Rights Reserved
            </div>
        </div>
    )
}