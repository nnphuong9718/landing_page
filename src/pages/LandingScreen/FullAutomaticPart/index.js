import { Col, Row } from 'antd';
import React from 'react';
import { images } from '../../../images';
import './style.scss';
// const headline = `FULLY AUTOMATIC LIQUIDITY`
// const subText = `The health of DeFi is mostly identical to the health of decentralized liquidity sources, Coin98 Exchange helps pushing the robustness fundamentally by providing users with liquidity 
// from various sources, including but not limited to Uniswap, SushiSwap, PancakeSwap, SerumDEX and MDEX. Therefore, Coin98 Exchange powers instant and secure swap for a seamless experience with best price and slippage. `
// const bannerText = ["Secure","Instant","Best Price" ]



export default function FullAutomaticPart (props) {
    const {contentData} = props
    const {bannerText, headline, subText, banner} = contentData

    const renderBannerText = () =>{
        return bannerText.map((it, idx)=>{
            return (
                <div key={it} className="full-automatic__banner-text">{it}</div>
            )
        })
    }

    return (

        <Row className="full-automatic">
            <Col xs={24} xl={12} style={{display:'flex'}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    {renderBannerText()}
                </div>
                <div className="full-automatic__banner">
                    <img src={banner} alt=""/>
                </div>
            </Col>
            <Col xs={24} xl={12} style={{display:'flex'}} className="flex-column-center" >
                <div className="full-automatic__content">
                    <div 
                        className="headline"
                        dangerouslySetInnerHTML={{ __html: headline.replace(/\n/gmi, '<br/>')}}
                    >
                    </div>
                    <div className="full-automatic__progress-bar">
                        <div className="loading-line"></div>
                    </div>
                    <p 
                        className="sub-text"
                        dangerouslySetInnerHTML={{ __html: subText.replace(/\n/gmi, '<br/>')}}
                    >
                    </p>
                </div>
            </Col>
        </Row>
    )
}