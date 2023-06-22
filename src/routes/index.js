import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CREATE_ACCOUNT, GENERATE_PAYMENT, HOME_URL } from "./paths";
import { LoginPage } from "../pages";
import PageLoader from "../components/pageLoader";
import { GetPaymentLink } from "../pages/payment-link";
import { CreateAccountPage } from "../pages/create-account";
import Private from "./PrivateRoute";

const WebRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index path={HOME_URL} element={<LoginPage />} />
                <Route path={CREATE_ACCOUNT} element={<CreateAccountPage />} />
                <Route path={GENERATE_PAYMENT} element={<Private><GetPaymentLink /></Private>} />
            </Routes>   
        </Suspense>
    )
};

export default WebRoute;