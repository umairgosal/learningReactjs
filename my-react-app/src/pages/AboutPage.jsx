import { Outlet } from "react-router-dom";
import FetchData from "../components/FetchData";

function AboutPage(){
    return(
        <>
        <h1>This is the AboutPage page</h1>
        <FetchData /> 
        <Outlet></Outlet>
        </>
    );
}

export default AboutPage