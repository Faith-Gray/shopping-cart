function Overlay({ isNavExpanded, setIsNavExpanded, isModalOpen, setIsModalOpen }) {
    return (
      <>
        <div className={isNavExpanded ? "overlay-active" : "overlay"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}  
        >
        </div>
        <div className={isModalOpen ? "overlay-active" : "overlay"}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}  
        ></div>
      </>
      
    );
}
  
export default Overlay;