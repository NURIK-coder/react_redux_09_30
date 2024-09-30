import { Link } from "react-router-dom"


function Navbar(){
    return (
        <header>
            <nav>
                <a href=""><Link to='/characters'>Characters</Link> </a>
                <a href=""><Link to='/episodes'>Episodes</Link> </a>
            </nav>
        </header>
    )
}
export default Navbar;