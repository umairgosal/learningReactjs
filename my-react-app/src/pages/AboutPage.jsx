import { Outlet } from "react-router-dom";
import FetchData from "../components/FetchData";

function AboutPage(){
    return(
        <>
        <FetchData /> 
        <Outlet></Outlet>
        </>
    );
}

export default AboutPage