import { Outlet } from "react-router-dom";

function AboutPage(){
    return(
        <>
        <h1>This is the AboutPage page</h1>
        <Outlet></Outlet>
        </>
    );
}

export default AboutPage