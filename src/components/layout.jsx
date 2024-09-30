import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
function Layout(){
    return(
        <div>
            <header>
                <Navbar/>
            </header>
            <Outlet/>

            <footer>
                This is footer
            </footer>
        </div>
    )
}

export default Layout;