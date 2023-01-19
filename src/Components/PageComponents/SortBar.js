import { useState } from 'react';



function SortBar() {
    const [ isSmallerGridSelected, setIsSmallerGridSelected ] = useState(false);

    
    return (

        <div className='sortBar'>
            <div className='gridContainers'>
                <button className='smallGrid'
                    onClick={() => {
                        setIsSmallerGridSelected(true);
                        }}
                    >
                    <i className="fi fi-sr-apps"
                    style={{
                        color: isSmallerGridSelected ? 'rgba(5, 56, 107)' : 'rgba(5, 56, 107, 50%)',
                    }}
                    ></i>
                </button>

                <button className='bigGrid'
                    onClick={() => {
                        setIsSmallerGridSelected(false);
                        }}
                    >
                    <i className="fi fi-sr-grid"
                        style={{
                        color: isSmallerGridSelected ? 'rgba(5, 56, 107, 50%)' : 'rgba(5, 56, 107)',
                    }}></i>
                </button>
            </div>    
            <div className='sort'>
                Sort
            </div>
            <div className='filter'>
                Filter
            </div>
        </div>
    );
}
  
export default SortBar;