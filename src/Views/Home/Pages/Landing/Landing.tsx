import React from "react";

import {ReactComponent as FacebookIcon} from "../../../../Assets/Vectors/facebook_plain.svg";
import {ReactComponent as InstagramIcon} from "../../../../Assets/Vectors/instagram_plain.svg";
import {ReactComponent as AKRLogoNoText} from "../../../../Assets/Vectors/AKR-colour full logo.svg";
import "./Landing.scss";

interface LandingPageProps {};

export const LandingPage: React.FC<LandingPageProps> = () => {
    // const categories = [{
    //     title: "Shop AKR Kinetic Ropes"
    // }, {
    //     title: "Shop AKR Gaskets"
    // }, {
    //     title: "Shop AKR Offroad"
    // }];
    return (
        <div className="page--landing">
            <div className="landing-content">
                <div className="content-left">
                    <div className="content-logo">
                        <AKRLogoNoText />
                    </div>
                    <div className="content-socials">
                        <a href={"https://www.facebook.com/Afraid-Knot-Ropes-104810451710234"} target="_blank" rel="noreferrer">
                            <div className="icon"><FacebookIcon /></div>
                        </a>
                        <a href="https://www.instagram.com/afraidknotropes/" target="_blank" rel="noreferrer">
                            <div className="icon"><InstagramIcon /></div>
                        </a>
                    </div>
                </div>
                {/* <div className="content-right">
                    {categories.map((category) => (
                        <button className="shop-button">
                            {category.title}
                        </button>
                    ))}
                </div> */}
            </div>
        </div>
    );
};