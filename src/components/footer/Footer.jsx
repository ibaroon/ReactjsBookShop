import "./Footer.css";
import FooterSocialMedia from './FooterSocialMedia';
import FooterLinks from './FooterLinks';
import FooterAddress from './FooterAddress';
import FooterDescription from './FooterDescription';
const Footer = () => {
    return (
        <div className='footer'>
           <FooterSocialMedia/> 
            <div className="footer-links-wrapper">
            <FooterLinks/>
            <FooterAddress/>
            <FooterDescription/>
            </div>
        </div>
    );
}

export default Footer;
