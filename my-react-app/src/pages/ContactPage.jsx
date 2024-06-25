import { Outlet } from "react-router-dom";

function ContactUs(){
    return(
        <>
        <h1>This is the ContactUs page</h1>
        <Outlet></Outlet>
        </>
    );
}

export default ContactUs