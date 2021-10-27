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
    description: `Afraid Knot Ropes is based in Kawartha Lakes, Ontario, Canada. We pride ourselves
    on delivering safe, high quality, kninetic ropes strong enough to meet the demands of
    off-road vehicles. Our founder Ian McKague grew up on a farm in rural Ontario, and is a
    passionate off-road enthusiast.<split>
    After years of towing using tow straps, winch lines, and cables Ian began the search for
    a safer solution that wouldn’t leave him stuck in the mud. It was clear that Kinetic energy
    ropes were the answer, but Canadian made, affordable options weren’t available.
    And so, Afraid Knot Ropes was born.<split>
    Working in partnership with a Canadian manufacturer we began an intensive process of
    research, design, and rigorous product testing to create a line of multi-purpose ropes to
    keep you moving.<split>
    Our tireless efforts paid off and we are proud to offer ropes of the highest quality, at fair
    prices. As off-roaders ourselves we focus on delivering quality products at reasonable
    prices so more people can safely enjoy taking the road less traveled.`
}, {
    title: "Why Afraid Knot Ropes?",
    icon: RopeIcon,
    description: `We strive to produce the best quality ropes you can buy, while respecting the budgets of
    the everyday off-road enthusiast, farmer, truck driver, and equipment operator.<split>
    Our ropes are coated for durability, UV protection, snag and wear resistance. They
    come with heavy duty wear pads on the loops, so you won’t have to worry about
    wearing through. We are proud to be Canadian made supporting Canadian companies
    and Canadian families.`
}, {
    title: "Why Kinetic?",
    icon: PendulumIcon,
    description: `If you know you know! If you have been recovered or done a recovery using a kinetic
    rope, you know the benefits.<split>
    Chains, cables, and straps have no stretch. Have you ever gotten stuck had a buddy
    hook up his cable and almost pull your tow hooks off? Well, here is your solution, with
    up to 30% stretch kinetic energy ropes are designed to take the initial hit, dissipating,
    and converting the shock energy into torque.<split>
    Have you ever watched someone hook a chain or winch line to a disabled vehicle, start
    to tow and watch the line go slack? The disabled vehicle doesn’t stop in time, the
    recovery vehicle hits the gas the gas without noticing. The thought is enough to make
    any off-roader cringe. This can and will be where damage, injury, and recovery gear
    failure happens. The hard jerk puts huge force on every piece of the recovery system.
    Our kinetic energy ropes with up to 30% stretch can mitigate and if properly used
    eliminate the damage caused by those types of sicarios!`
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
                            <div className="about-item-description">{item.description.split("<split>").map((str) => <p>{str}</p>)}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};