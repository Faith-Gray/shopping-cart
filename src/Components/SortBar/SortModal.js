import { useState } from 'react';
import './SortBar.css';

const SortModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//put this in app.js


  return (
    <div className='SortModal'>
        <div className='sortModal-title'>SORT</div>
        <button className='sortModal-close'>X</button>
        <button className='sortModal-low-high'>Low to High</button>
        <button className='sortModal-high-low'>High to Low</button>
    </div>
  );
};

export default SortModal;