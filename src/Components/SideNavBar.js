import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';



function SideNavBar({ isNavExpanded, setIsNavExpanded }) {

  const hide = () => setIsNavExpanded(false);

  

  return (
    <nav className={isNavExpanded ? 'sideNavBar' : 'sideNavBarClosed'} >

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
          <Link to="/"
          onClick={hide}
          >HOME</Link>
        </li>
        <li>
          <Link to="/shop"
          onClick={hide}
          >SHOP ALL</Link>
        </li>
        <li>
          <Link to="/wear"
          onClick={hide}
          >WEAR</Link>
        </li>
        <li>
          <Link to="/walk"
          onClick={hide}
          >WALK / HARNESS</Link>
        </li>
        <li>
          <Link to="/chains"
          onClick={hide}
          >CHAINS</Link>
        </li>
        <li>
          <Link to="/reviews"
          onClick={hide}
          >REVEIWS</Link>
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


    
  );
}
  
export default SideNavBar;