import React from "react";

import {ReactComponent as FacebookLogo} from "../Assets/Vectors/facebook.svg";
import {ReactComponent as InstagramLogo} from "../Assets/Vectors/instagram.svg";
import "./ComingSoon.scss";

interface ComingSoonPageProps {}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
    const pageClass = "page--coming-soon";
    return (
        <div className={pageClass}>
            <div className={`${pageClass}--content`}>
                <h2>Afraid Knot Ropes</h2>
                <div className="spacer" />
                <h4>Our website is under construction...</h4>
                <p>For now, find information on our socials!</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/search/top?q=afraid%20knot%20ropes" target="_blank" rel="noreferrer">
                        <FacebookLogo />
                    </a>
                    <a href="https://www.instagram.com/afraidknotropes/" target="_blank" rel="noreferrer">
                        <InstagramLogo />
                    </a>
                </div>
            </div>
        </div>
    );
};