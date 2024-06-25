import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./Header";
import CardList from "./CardList";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CounterRedux from "./CounterRedux";

function Routing(){
    return(
        <>
        {/* <Header></Header> */}
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage /> }>
                <Route path="home" element={<HomePage />} />
                <Route path="counter" element={<CounterRedux />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* so here ive added nested routing. for it we need to  */}
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Routing