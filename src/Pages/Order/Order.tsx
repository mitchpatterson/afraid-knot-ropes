import React, {useState} from "react";

import "./Order.scss";

interface OrderPageProps {};

const getFormDimensions = () => {
    const width = window.innerWidth;
    if (width) {
        if (width < 600) return {width: 380, height: 1900};
        else if (width < 800) return {width: 600, height: 1882};
        return {width: 800, height: 1852};
    }

    return {width: 400, height: 1852};
};

export const OrderPage: React.FC<OrderPageProps> = () => {
    const [orderStarted, updateOrder] = useState(false);
    const dimensions = getFormDimensions();
    return (
        <div className="page--order" id="order">
            <div className={`order-content${orderStarted ? " show-order" : ""}`}>
                <div className="content-title">
                    Order / Contact
                </div>
                <div className="content-information">
                    {"At this time we are only taking orders via email. Once an order is confirmed we will be doing payment via etransfer."}
                </div>
                <div className="content-confirm">
                    <button onClick={() => updateOrder(!orderStarted)}>Start Order</button>
                </div>
                <div className="content-form">
                    <iframe
                        title="Afraid Knot Ropes Contact Form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfnmiWXqPKa4TITqiOTABcriayo8pHAYZ3gO9z9AAZtci1xpg/viewform?embedded=true"
                        width={`${dimensions.width}`}
                        height={`${dimensions.height}`}
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}>
                            Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};