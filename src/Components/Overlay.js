function Overlay({ isNavExpanded, setIsNavExpanded }) {
    return (
      <div className={isNavExpanded ? "overlay" : "overlay-active"}
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}  
      >
      
      </div>
    );
}
  
export default Overlay;