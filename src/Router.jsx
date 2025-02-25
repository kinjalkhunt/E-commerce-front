import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Component/layout/DefaultLayout";

const Home = React.lazy(() => import('./Component/Home/MainSlider'));

export const router = [
            {
                path: '/',
                name: "home",
                element: Home,
            },
];