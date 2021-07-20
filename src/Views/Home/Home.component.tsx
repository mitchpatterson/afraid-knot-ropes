import React, {Fragment} from "react";

import {AboutPage, FooterPage, LandingPage, ProductsPage, OrderPage} from "../../Pages";

export const HomeView = () => (
    <Fragment>
        <LandingPage />
        <AboutPage />
        <ProductsPage />
        <OrderPage />
        <FooterPage />
    </Fragment>
);