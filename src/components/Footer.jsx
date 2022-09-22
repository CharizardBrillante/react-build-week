import { BsChevronCompactDown } from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='footer-links'>
                <Link to='/'>About</Link>
                <Link to='/'>Accessibility</Link>
                <Link to='/'>Help Center</Link>
                <Link to='/'>Privacy &amp; Terms <BsChevronCompactDown size={20}/></Link>
                <Link to='/'>Ad Choices</Link>
                <Link to='/'>Advertising</Link>
                <Link to='/'>Business Services <BsChevronCompactDown size={20}/></Link>
                <Link to='/'>Get the Linkedin app</Link>
                <Link to='/'>More</Link>
            </div>
            <div className='footer-copy my-2'>
                <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png" 
                    alt="linkedin" 
                    className='footer-logo'
                />
                <span>Linkodin &copy;2022</span>
            </div>
        </footer>
    )
}

export default Footer;