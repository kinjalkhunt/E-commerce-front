import React from "react";

const Home = React.lazy(() => import('./Component/Home'))
export const router = [
    {
        path: '/',
        name: "Home",
        element: Home
    }
]