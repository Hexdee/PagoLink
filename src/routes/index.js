import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CREATE_ACCOUNT, GENERATE_PAYMENT, HOME_URL } from "./paths";
import { LoginPage } from "../pages";
import PageLoader from "../components/pageLoader";
import { CreateAccountPage } from "../pages/create-account";
import Private from "./PrivateRoute";
import { DashboardHome } from "../pages/dashboard";

const WebRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index path={HOME_URL} element={<LoginPage />} />
                <Route path={CREATE_ACCOUNT} element={<CreateAccountPage />} />
                <Route path={GENERATE_PAYMENT} element={<Private><DashboardHome /></Private>} />
            </Routes>   
        </Suspense>
    )
};

export default WebRoute;