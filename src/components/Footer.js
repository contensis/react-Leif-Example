import { Link } from 'react-router-dom'
import logo from '../assets/svgs/logo.svg'
import facebook from '../assets/svgs/facebook.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import twitter from '../assets/svgs/twitter.svg'

const Footer = () => {

    return (
        <footer className="footer">
            <Link to={`/`} className="footer__logo"><img src={logo} alt="Leif" /></Link>
            <div className="footer__socials">
                <a href="https://en-gb.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                    <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/showcase/contensis">
                    <img src={linkedin} alt="Linkedin" />
                    <span className="sr-only">Contensis LinkedIn</span>
                </a>
                <a href="https://twitter.com/Contensis?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <img src={twitter} alt="Twitter" />
                    <span className="sr-only">Contensis Twitter</span>
                </a>
            </div>
            <div className="footer__copyright">
                <p>© 2022 Leif</p>
            </div>
        </footer>
    )

}

export default Footer;
