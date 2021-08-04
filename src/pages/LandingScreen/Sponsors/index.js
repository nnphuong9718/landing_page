import { Col, Row } from 'antd';
import React from 'react';
import MyButton from '../../../Components/MyButton';
import { images } from '../../../images';
import './style.scss';

const firstRowLogo = [images.logoHashed,images.logoParafi,images.logoSpartans,images.logoMulticoinCapital]
const secondRowLogo = [images.logoCoinGecko,images.logoKyberNet,images.logoLinkPad]


export default function Sponsors () {

    const render4SponsorsLogo = () =>{
        return firstRowLogo.map(it=>{
            return (
                <Col key={it} xs={24} md={6} className="row-item" >
                    <img src={it} alt=""/>
                </Col>
            )
        })
    }
    const render3SponsorsLogo = () =>{
        return secondRowLogo.map(it=>{
            return (
                <Col key={it} xs={24} md={8} className="row-item" >
                    <img src={it} alt=""/>
                </Col>
            )
        })
    }

    return (

        <div className="sponsors">
            <div className="sponsors__headline">
                OUR BACKERS
            </div>
            <Row className="first-row-logo">
                {render4SponsorsLogo()}
            </Row>
            <Row className="second-row-logo">
                {render3SponsorsLogo()}
            </Row>
            <div className="sponsors__btn" >
                <MyButton type="black">
                    LAUNCH APP
                </MyButton>
            </div>
        </div>
    )
}