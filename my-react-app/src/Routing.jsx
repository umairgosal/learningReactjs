import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CounterRedux from "./components/CounterRedux";

function Routing(){
    return(
        <>
        {/* <Header></Header> */}
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage /> }>
                <Route path="home" element={<HomePage />}>
                    <Route path="/home/counter" element={<CounterRedux />} />
                </Route>
                <Route path="services" element={<ServicesPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* so here ive added nested routing. for it we need to add the path within proper tag closing */}
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Routing