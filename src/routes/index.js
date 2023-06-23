import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CREATE_ACCOUNT, DASHBOARD_HOME_URL, GENERATE_PAYMENT, HOME_URL } from "./paths";
import { LoginPage } from "../pages";
import PageLoader from "../components/pageLoader";
import { CreateAccountPage } from "../pages/create-account";
import Private from "./PrivateRoute";
import { DashboardHome } from "../pages/dashboard";
import Public from "./PublicRoute";
import { GetPaymentLink } from "../pages/dashboard/payment-link";

const WebRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index path={HOME_URL} element={<Public><LoginPage /></Public>} />
                <Route path={CREATE_ACCOUNT} element={<Public><CreateAccountPage /></Public>} />
                <Route path={GENERATE_PAYMENT} element={<Private><GetPaymentLink /></Private>} />
                <Route path={DASHBOARD_HOME_URL} element={<Private><DashboardHome /></Private>} />
            </Routes>   
        </Suspense>
    )
};

export default WebRoute;