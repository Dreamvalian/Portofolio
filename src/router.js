import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/home/Home";

const RoutesList = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/#" render={() => <Home />} />
                {/* <Route path="/visuals" element={<Visual />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesList;