import { Col, Row } from 'antd';
import React from 'react';
import { images } from '../../../images';
import './style.scss';
const headline = `FLOATING TOWARD AN ECONOMY`
const text = `Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, 
    Fully Automatic Liquidity and Space Gate, all in one Super Liquidity Aggregator.`
const report = [
    {   
        id:1,
        name:'Total Volume',
        value:'100M+'
    },
    {   
        id:2,
        name:'Total Users',
        value:'200K+'
    },
    {   
        id:3,
        name:'Supported Chain',
        value:'13+'
    },
    {   
        id:4,
        name:'Liquidity Source',
        value:'20B+'
    },
    

]
export default function StatisticalPart () {

    const renderStatisticalItem = () => {
        return report.map((it,idx)=>{
            return (
                <Col key={it.id} xs={12} xl={6} style={{color:'red'}} >
                    <div className={`box-item ${it.id === 4 && 'box-item--no-border'} `}>
                        <div className="box-item__name">
                            {it.name}
                        </div>
                        <div  className="box-item__value">
                            {it.value}
                        </div>
                    </div>
                </Col>
            )
        })
    }
    return (

        <div className="statistical">
            <div className="statistical__headline">
                {headline}
            </div>
            <p 
                className="statistical__text"
                dangerouslySetInnerHTML={{ __html: text.replace(/\n/gmi, '<br/>')}}
            >
            </p>
            <Row className="statistical__box">
                {renderStatisticalItem()}
            </Row>
            <div className="statistical__bottom-icon">
                <img src={images.leftAstronaut} alt=""/>
            </div>
        </div>
    )
}