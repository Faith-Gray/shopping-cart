import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="newsletterSection">
                <div className="newsletter">NEWSLETTER</div>
                <div className="subscribe">Subscribe to receive updates, access to excusive deals, and more.</div>
                <input className="emailInput"
                    type="text"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    placeholder="Enter your email address"
                />
                <button className="subscribeBtn">SUBSCRIBE</button>
            </div>
            <div className="customerSupportSection">
                <div className="customerSupport">CUSTOMER SUPPORT</div>
                <ul>
                    <li>Shipping Info</li>
                    <li>Return and Exchange</li>
                    <li>Track Orders</li>
                    <li>Affiliates</li>
                </ul>
            </div>
            <div className="moreInfoSection">
                <div className="moreInfo">MORE INFO</div>
                <ul>
                    <li>Wholesome</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Dog Blogs</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className="join">
                <div className="joinPack">JOIN OUR PACK</div>
                <ul className="socialMediaIcons">
                    <FontAwesomeIcon className='fbIcon' icon={faFacebookF}/>
                    <li><FontAwesomeIcon className='twitterIcon' icon={ faTwitter } color="green"/></li>
                    <li><FontAwesomeIcon className='linkedinIcon' icon={ faLinkedin }/></li>
                    <li><FontAwesomeIcon className='githubIcon' icon={ faGithub }/></li>
                </ul>
            </div>
        </footer>
    );
};



export default Footer;