import Navbar from "../components/Navbar"
import CardList from "../components/CardList"
import { Outlet } from "react-router-dom";

function HomePage(){
    return(
        <>
        <h1>This is the HomePage page</h1>
        <Navbar></Navbar>
        <CardList></CardList>
        <Outlet></Outlet>
        </>
    );
}

export default HomePage