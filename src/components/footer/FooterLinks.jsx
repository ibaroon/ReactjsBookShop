import {Link} from 'react-router-dom';

const FooterLinks = () => {
    return (
        <div className="footer-links-item">
        <h3 className="footer-links-item-title">Useful Links</h3>
        <ul className="footer-links">
            <li className="footer-link"><Link to="/" className="footer-link">Home</Link></li>
            <li className="footer-link"><Link to="/authors" className="footer-link">Authors</Link></li>
            <li className="footer-link"><Link to="/about" className="footer-link">About Us</Link></li>
            <li className="footer-link"><Link to="/contact" className="footer-link">Contact Us</Link></li>
            <li className="footer-link"><Link to="/register" className="footer-link">Register</Link></li>
        </ul>
    </div>
    );
}

export default FooterLinks;
