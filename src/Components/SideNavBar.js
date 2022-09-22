import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';



const handleClose = console.log('click');

function SideNavBar() {
    return (
      
      <nav className='sideNavBar'>
        <button
					className="nav-close-btn"

					onClick={handleClose}>

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

        
        <div className='linkIcons'>


        </div>
        
      </nav>
  
  

      
    );
}
  
export default SideNavBar;