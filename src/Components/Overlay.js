function Overlay({ isNavExpanded, setIsNavExpanded }) {
    return (
      <div className={isNavExpanded ? "overlay-active" : "overlay"}
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}  
      >
      
      </div>
    );
}
  
export default Overlay;