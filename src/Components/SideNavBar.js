import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const handleNavBar = console.log('click');

function SideNavBar() {
    return (
      
      <nav className='navBar'>
        <button
					className="nav-dropdown-btn"

					onClick={handleNavBar}>

          <FontAwesomeIcon icon={faBars} />
				</button>


        <div className='nav_logoContainer'>
          <div className='nav_logo'>
            <FontAwesomeIcon icon={faPaw} rotation={270} />
          </div>
          <Link to="/" className='nav_title'>DogRun</Link>
        </div>

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
          <li>
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

        
        <div className='nav_search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className='nav_cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        
      </nav>
  
  

      
    );
}
  
export default SideNavBar;