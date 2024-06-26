import ColorPicker from "../components/ColorPicker";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function ServicesPage(){
    return(
        <>
        <h1>This is the Services page</h1>
        {/* <ColorPicker /> */}
        <Footer></Footer>
        <Outlet></Outlet>
        </>
    );
}

export default ServicesPage