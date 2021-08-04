import { Col, Row } from 'antd';
import React from 'react';
import { images } from '../../../images';
import './style.scss';
const headline = `MULTI-CHAIN WALLET`
const bannerText = ["MULTI-CHAIN","ALWAYS-CONNECTED","SEAMLESS" ]



export default function MultiChainWallet () {

    const renderBannerText = () =>{
        return bannerText.map((it, idx)=>{
            return (
                <div key={it} className="multi-chain__banner-text">{it}</div>
            )
        })
    }

    return (

        <Row className="multi-chain">
            <Col xs={24} xl={8}  style={{display:'flex'}} className="text-area flex-column-center" >
                <div className="multi-chain__content">
                    <div 
                        className="headline"
                        dangerouslySetInnerHTML={{ __html: headline.replace(/\n/gmi, '<br/>')}}
                    >
                    </div>
                    <div className="multi-chain__progress-bar">
                        <div className="loading-line"></div>
                    </div>
                    <p className="sub-text">
                        With the distinctive <strong>multi-chain wallet engine</strong> as its core, 
                        Coin98 Wallet provides the <strong>"always-connected"</strong> experience, 
                        supporting users to access numerous DeFi services across separate blockchains seamlessly and concurrently. 
                        Users can also transact tokens with optimized gas fees and manage multiple digital assets simultaneously on Coin98 Wallet.
                    </p>
                </div>
            </Col>
            <Col xs={24} xl={16} style={{display:'flex'}} className="image-area">
                <div className="multi-chain__banner">
                    <img src={images.multiChainBanner} alt=""/>
                </div>
                <div className="banner-text-wrapper">
                    {renderBannerText()}
                </div>
            </Col>
        </Row>
    )
}