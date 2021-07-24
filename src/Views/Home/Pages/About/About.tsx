import React from "react";

import {ReactComponent as LightBulbIcon} from "../../../../Assets/Vectors/lightbulb.svg";
import {ReactComponent as PendulumIcon} from "../../../../Assets/Vectors/pendulum.svg";
import {ReactComponent as RopeIcon} from "../../../../Assets/Vectors/rope.svg";
import "./About.scss";

interface AboutPageProps {};

interface AboutItem {
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    description: string;
};

const aboutItems: Array<AboutItem> = [{
    title: "Our Origin",
    icon: LightBulbIcon,
    description: "Born out of a need for Canadian made high quality reasonably priced recovery ropes. I have been part of the off-road community for years using tow straps, winch lines, and cables. I looked for a better safer solution and found that kinetic energy ropes where the answer I was looking for, but I couldn’t find any Canadian made or reasonably priced. I approached a reputable, local rope manufacturer and started the process, after months of designs, and testing we had what we were looking for! We are proud to bring you our products and we work tirelessly to achieve the highest quality. We believe it is more important to keep our products reasonably priced than it is to turn a huge profit. "
}, {
    title: "Why Afraid Knot Ropes?",
    icon: RopeIcon,
    description: "We strive to produce the best quality ropes you can buy while keeping our prices within the budget of the everyday off-road enthusiast, farmer, truck driver, and equipment operator. Our ropes are coated for durability, UV protection, snag and wear resistance. They come with heavy duty wear pads on the loops, so you won’t have to worry about wearing through. We are proud to be Canadian made supporting Canadian companies and Canadian families."
}, {
    title: "Why Kinetic?",
    icon: PendulumIcon,
    description: "If you know you know! If you have been recovered or done a recovery using a kinetic rope, you know the benefits. Chains, cables, and straps have no stretch. Have you ever gotten stuck had a buddy hook up his cable and almost pull your tow hooks off? Well, here is your solution, with up to 30% stretch kinetic energy ropes are designed to take the initial hit, dissipating and converting the shock energy into torque. Have you ever watched someone hook a chain or winch line to a disabled vehicle, start to tow and watch the line go slack? The disabled vehicle doesn’t stop in time, The recovery vehicle without noticing, hits the gas, Just the thought makes me cringe. This, can and will be where damage, injury, and recovery gear failure happens. The hard jerk puts huge force on every piece of the recovery system. Our kinetic energy ropes with up to 30% stretch can mitigate and if properly used eliminate the damage caused by those types of sicarios."
}];

export const AboutPage: React.FC<AboutPageProps> = () => {
    return (
        <div className="page--about" id="about">
            <div className="about-content">
                {aboutItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div className="about-item" key={`about-item-${item.title}`}>
                            <div className="about-item-icon"><Icon /></div>
                            <div className="about-item-title">{item.title}</div>
                            <div className="about-item-description">{item.description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};