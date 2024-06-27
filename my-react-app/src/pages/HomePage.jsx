import Header from "../components/Header"
import CardList from "../components/CardList"
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function HomePage(){
    return(
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <main className="mb-auto">
                <CardList></CardList>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage