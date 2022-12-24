import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function NavBar({ isNavExpanded, setIsNavExpanded }) {
    return (
      
      <nav className='navBar'>
        <button
					className="nav-dropdown-btn"

					onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          >

          <FontAwesomeIcon icon={faBars} />
				</button>


        <div className='nav_logoContainer'>
          <div className='nav_logo'>
            <FontAwesomeIcon icon={faPaw} rotation={270} />
          </div>
          <Link to="/" className='nav_title'>DogRun</Link>
        </div>

        <ul className='navBarUL'>
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
            <Link to="/walk">WALK</Link>
          </li>
          <li>
            <Link to="/chains">CHAINS</Link>
          </li>
          <li>
            <Link to="/reviews">REVEIWS</Link>
          </li>
        </ul>

        
        <div className='nav_search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className='nav_cart'>
          <Link to={`/cart`}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
        
      </nav>
  
          

      
    );
  }
  
export default NavBar;