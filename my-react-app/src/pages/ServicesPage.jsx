import ColorPicker from "../components/ColorPicker";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function ServicesPage(){
    return(
        <>
        <ColorPicker />
        <Outlet></Outlet>
        </>
    );
}

export default ServicesPage