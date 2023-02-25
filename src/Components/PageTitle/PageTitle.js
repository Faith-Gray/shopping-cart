import './PageTitle.css';
import { useLocation } from 'react-router-dom';


function PageTitle() {
  const location = useLocation();
  const locationSlice = location.pathname.slice(1, location.pathname.length)
  function header() {
    if (locationSlice === 'chains') {
    return 'CHAINS & TAGS'
    } else if (locationSlice === 'shop') {
      return 'SHOP ALL'
    }
    else 
    {
    return locationSlice.toUpperCase() 
    }
  }


  return (
    <header className="pageTitle">
       {header()}
    </header> 
  )
}

export default PageTitle