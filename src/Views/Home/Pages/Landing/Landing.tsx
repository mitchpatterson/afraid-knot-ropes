import React from "react";

import {ReactComponent as FacebookIcon} from "../../../../Assets/Vectors/facebook_plain.svg";
import {ReactComponent as InstagramIcon} from "../../../../Assets/Vectors/instagram_plain.svg";
import "./Landing.scss";

interface LandingPageProps {};

export const LandingPage: React.FC<LandingPageProps> = () => {
    return (
        <div className="page--landing">
            <div className="landing-content">
                <div className="content-padding">
                    <div className="content-title">
                        {"Afraid Knot Ropes"}
                    </div>
                    <div className="content-description">
                        {"High quality Kinetic Energy Recovery Ropes, Winch Ropes, Soft Shackles, and more."}
                    </div>
                    <div className="content-socials">
                        <a href={"https://www.facebook.com/Afraid-Knot-Ropes-104810451710234"} target="_blank" rel="noreferrer">
                            <div className="icon"><FacebookIcon /></div>
                        </a>
                        <a href="https://www.instagram.com/afraidknotropes/" target="_blank" rel="noreferrer">
                            <div className="icon"><InstagramIcon /></div>
                        </a>
                    </div>
                    <div className="content-action">
                        <a href="#products"><button>{"Browse the Goods"}</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};