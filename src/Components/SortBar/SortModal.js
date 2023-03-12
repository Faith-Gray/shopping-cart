import { useState } from 'react';
import './SortBar.css';

function SortModal({isModalOpen, setIsModalOpen}) {

  const hide = () => setIsModalOpen(false);

  return (
    <div className={isModalOpen ? 'sortModal' : 'sortModalClosed'}>
        <div className='sortModal-title'>SORT</div>
        <button className='sortModal-close' onClick={hide}>X</button>
        <button className='sortModal-low-high'>Low to High</button>
        <button className='sortModal-high-low'>High to Low</button>
    </div>
  );
};

export default SortModal;