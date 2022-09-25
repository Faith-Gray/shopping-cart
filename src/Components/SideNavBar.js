import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';



function SideNavBar({ isNavExpanded, setIsNavExpanded }) {
  const variants = {
    open: { opacity: 100, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <motion.nav
      animate={isNavExpanded ? "closed" : "open" }
      variants={variants}
    >
    
      {/* // <nav className={isNavExpanded ? 'sideNavBarClosed' : 'sideNavBar'} > */}
      <nav className='sideNavBar' >

        <button
          className="nav-close-btn"

          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          >

          <FontAwesomeIcon icon={faClose} />
        </button>

        <ul className='mainSideNavUL'>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP ALL</Link>
          </li>
          <li>
            <Link to="/wear">WEAR</Link>
          </li>
          <li>
            <Link to="/walk">WALK / HARNESS</Link>
          </li>
          <li>
            <Link to="/chains">CHAINS</Link>
          </li>
          <li>
            <Link to="/reviews">REVEIWS</Link>
          </li>
        </ul>

        <ul className='secondSideNavUL'>
          <li className='shippingInfo'>
            Shipping Info
          </li>
          <li>
            Return and Exchange
          </li>
          <li>
            Track Orders
          </li>
          <li>
            Affiliates
          </li>
        </ul>

        
        <div className='linkIcons'>


        </div>
        
      </nav>


    </motion.nav>
    
  );
}
  
export default SideNavBar;