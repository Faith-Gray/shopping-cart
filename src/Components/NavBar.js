import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
      <div className="navBar">
        <nav>
          <div className='nav_logoContainer'>
            <div className='nav_logo'>
              <FontAwesomeIcon icon={faPaw} />
            </div>
            <div className='nav_title'>DogRun</div>
          </div>
  
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop All</Link>
            </li>
            <li>
              <Link to="/wear">Wear</Link>
            </li>
            <li>
              <Link to="/walk">Walk</Link>
            </li>
            <li>
              <Link to="/chains">Chains</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
          <div className='nav_search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className='nav_logo'>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </nav>
  
  

      </div>
    );
  }
  
export default NavBar;