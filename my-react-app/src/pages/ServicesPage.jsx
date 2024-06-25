import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function ServicesPage(){
    return(
        <>
        <h1>This is the Services page</h1>

        <Footer></Footer>
        <Outlet></Outlet>
        </>
    );
}

export default ServicesPage