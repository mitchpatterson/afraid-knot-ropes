import React, {useState} from "react";

import {ReactComponent as CanadaFlag} from "../../Assets/Vectors/canada_flag.svg";
import "./Navigation.scss";

interface NavigationProps {};
interface NavigationItemProps {
    name: string;
    href: string;
};
interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: () => void;
};

const items: Array<NavigationItemProps> = [{
    name: "Products",
    href: "#products"
}, {
    name: "Order",
    href: "#order"
}, {
    name: "About",
    href: "#about"
}];

const HamburgerMenu = ({isOpen, onClick}: HamburgerMenuProps) => {
    return (
        <div
            className={`hamburger-menu${isOpen ? " open" : ""}`}
            onClick={onClick}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </div>
    );
};

export const Navigation: React.FC<NavigationProps> = () => {
    const [menuOpen, updateMenu] = useState(false);
    return (
        <div className="component--navigation">
            <div className={`navigation-content${menuOpen ? " menu-open" : ""}`}>
                <div className="logo">
                    <CanadaFlag />
                    <div>{"Proudly Made in Canada"}</div>
                </div>
                <HamburgerMenu isOpen={menuOpen} onClick={() => updateMenu(!menuOpen)} />
                <div className="pages">
                    <ul className="links">
                        {items.map((item) => (
                            <li><a href={item.href}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};