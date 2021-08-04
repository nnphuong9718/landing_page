import { Col, Row } from 'antd';
import React from 'react';
import { images } from '../../../images';
import './style.scss';
const headline = `SPACE GATE 
CROSS-CHAIN BRIDGE`
const subText = ' “ Humans build too many walls, but not many bridges.“ '

const description = `Space Gate is the pioneer in cross-chain bridge protocol for transfering value  across multiple networks including Ethereum, Solana, Binance Smart Chain, Near, Avalanche, and Tron. In the upcoming versions, Space Gate is going to support more networks Layer 2 solutions in the crypto universe.`

const sumText = "Currently, Space Gate supports converting ERC20 to BEP20 and SPL tokens, BEP20 tokens to TRC20 tokens."



export default function SpaceGate () {

    return (

        <div className="space-gate">
            <div 
                className="space-gate__headline"
                dangerouslySetInnerHTML={{ __html: headline.replace(/\n/gmi, '<br/>')}}
            >
            </div>
            <div 
                className="space-gate__sub-text"
                dangerouslySetInnerHTML={{ __html: subText.replace(/\n/gmi, '<br/>')}}
            >
            </div>
            <div className="space-gate__banner">
                <img src={images.trippleGateBanner} alt=""/>
            </div>
            <p 
                className="space-gate__description"
                dangerouslySetInnerHTML={{ __html: description.replace(/\n/gmi, '<br/>')}}
            >
            </p>
            <p className="space-gate__description">
                {sumText}
            </p>
            <div className="space-gate__bottom-icon">
                <img src={images.leftAstronaut} alt=""/>
            </div>
        </div>
    )
}