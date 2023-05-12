// Import Dependencies
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Index";

const RoutesList = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesList