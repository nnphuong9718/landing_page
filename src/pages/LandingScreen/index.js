import React from "react";
import MyButton from "../../Components/MyButton";
import { images } from "../../images";
import "./style.scss";

const headline = `YOU’VE 
GOT STYLE. 
LET US 
ELEVATE IT.`
const LandingScreen = () => (

    <div className="mx-120">
        <div className="opening-part mt-70">
            <div className="open-text">
                <div className="open-text__headline" 
                    dangerouslySetInnerHTML={{ __html: headline.replace(/\n/gmi, '<br/>') }}
                ></div>
                <div className="mt-5 text-large d-flex">
                    <div>Get our best-selling pampas grass for</div> &nbsp;
                    <div className="text-line-through">$45</div> &nbsp;
                    <div className="text-red"> only $34.99</div> 
                </div>
                <div className=" text-large d-flex">
                    and&nbsp;
                    <div className="text-black ">save 20% off .</div>
                </div>
                <MyButton className="mt-5">SHOP NOW</MyButton>
            </div>
            <div className="open-images">
                <img className="open-thumb w-100" src={images.openThumb} alt="" />
                <img className="discount-stamp" src={images.discountStamp} alt="" />
            </div>
        </div>
    </div>
);

export default LandingScreen;
