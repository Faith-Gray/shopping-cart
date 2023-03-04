import { useState, useEffect } from 'react';
import './SortBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function SortBar({isSmallerGridSelected, setIsSmallerGridSelected}) {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [sortLowtoHigh, setSortLowtoHigh] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1000;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    function changeArrow() {
        if (sortLowtoHigh == true) {setSortLowtoHigh(false)} else {
            setSortLowtoHigh(true);
            console.log(sortLowtoHigh);
        }
    }
    


    return (

        <div className='sortBar'>
            <div className='gridContainers'>
                <button className='smallGrid'
                    onClick={() => {
                        setIsSmallerGridSelected(true);
                        }}
                    >
                    <i className= {isMobile ? "fi fi-sr-dice-one" : "fi fi-sr-apps"}
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
                    <i className={isMobile ? "fi fi-sr-apps" : "fi fi-sr-grid"}
                        style={{
                        color: isSmallerGridSelected ? 'rgba(5, 56, 107, 50%)' : 'rgba(5, 56, 107)',
                    }}></i>
                </button>
            </div>    
            <div className='sort'>
                <button className='sortBtn'
                onClick={changeArrow}
                
                >Sort
                <FontAwesomeIcon className='sortArrow' icon={faChevronUp} />
                
                </button>
                

            </div>
            {/* <div className='sortBox'>
                <button className='sortBox-low-high'>Low to High</button>
                <button className='sortBox-high-low'>High to Low</button>

            </div> */}
            <div className='filter'>
                <button className='filterBtn'>Filter</button>
            </div>
        </div>
    );
}
  
export default SortBar;