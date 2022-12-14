import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';



function SideNavBar({ isNavExpanded, setIsNavExpanded }) {

  const hide = () => setIsNavExpanded(false);

  const variants = {
    // open: { opacity: 1
    //   // transition: { x: 100 }
    // },
    // closed: { opacity: 0
    //   // transition: { x: '100vw'}
    // },

    // open: {
    //   initial={ opacity: 0 },
    //   y: 0,
    //   opacity: 1,
    //   transition: {
    //     y: { stiffness: 1000, velocity: -100 }
    //   }
    // },
    // closed: {
    //   y: 50,
    //   opacity: 0,
    //   transition: {
    //     y: { stiffness: 1000 }
        
    //   }
    // }
    

    // open: {
   
    //   opacity: 1,
    //   transition: {
    //     x: { stiffness: 1000, velocity: -100 }
    //   }
    // },
    // closed: {
    
    //   opacity: 0,
    //   transition: {
    //     x: { stiffness: 1000 }
        
    //   }
    // }


      open: {
        x: 0,
        opacity: 1,
        transition: {
          x: { velocity: 5000 },
          duration: 0.1
        }
      },
      closed: {
        x: -400,
        opacity: 1,
        transition: {
          x:
          { velocity: 100 },
          duration: 0.1
        }
      }

  }

  return (
    <motion.nav
      animate={isNavExpanded ? "open" : "closed" }
      variants={variants}
    >
    
      {/* <nav className={isNavExpanded ? 'sideNavBar' : 'sideNavBarClosed'} > */}
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


    </motion.nav>
    
  );
}
  
export default SideNavBar;