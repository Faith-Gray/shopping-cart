

function sortBar() {
    return (
        <div className='sortBar'>
            <div className='gridContainers'>
                <div className='smallGrid'>
                    <i class="fi fi-sr-apps"></i>
                </div>
                <div className='bigGrid'>
                    <i class="fi fi-sr-grid"></i>
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