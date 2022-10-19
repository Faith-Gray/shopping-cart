import dog from './greenDog.jpg';

function Home() {
    return (
      <div className="home">
        <div className='greenOutline'>
          <img src={dog} alt="Green Dog" className='greenDog'/>
        </div>
        <header className='homeHeader'>
          Customer Favorites
        </header>
      </div>
    );
}
  
export default Home;