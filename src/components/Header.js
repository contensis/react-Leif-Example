import { Link } from 'react-router-dom'
import logo from '../assets/svgs/logo.svg'

const Header = () => {

    return (
        <header className="header">
            <Link to={`/`}><img className="logo" src={logo} alt="Leif" /></Link>
            <nav id="nav" aria-expanded="false">
                <div className="hamburger">
                    <label htmlFor="hamburger-checkbox" id="hamburger-label" className="sr-only">Open menu</label>
                    <input type="checkbox" id="hamburger-checkbox" />
                    <div className="hamburger__container--outer" aria-hidden="true">
                        <div className="hamburger__container--inner">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul id="menu" className="menu" aria-hidden="true">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Products</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export default Header;
