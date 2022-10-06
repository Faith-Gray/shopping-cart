import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';


function sortBar() {
    return (
        <div className='sortBar'>
            <div className='gridContainers'>
                <div className='smallGrid'>
                    <FontAwesomeIcon icon={faTableCellsLarge} />
                </div>
                <div className='bigGrid'>
                    <FontAwesomeIcon icon={faTableCells} />
                </div>
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
  
export default sortBar;