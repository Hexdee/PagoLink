import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GENERATE_PAYMENT, HOME_URL } from "./paths";
import { LoginPage } from "../pages";
import PageLoader from "../components/pageLoader";
import { GetPaymentLink } from "../pages/payment-link";

const WebRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index path={HOME_URL} element={<LoginPage />} />
                <Route path={GENERATE_PAYMENT} element={<GetPaymentLink />} />
            </Routes>   
        </Suspense>
    )
};

export default WebRoute;