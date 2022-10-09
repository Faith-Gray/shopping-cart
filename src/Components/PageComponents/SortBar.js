

function sortBar() {
    return (
        <div className='sortBar'>
            <div className='gridContainers'>
                <button className='smallGrid'>
                    <i className="fi fi-sr-apps"></i>
                </button>
                <button className='bigGrid'>
                    <i className="fi fi-sr-grid"></i>
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
  
export default sortBar;