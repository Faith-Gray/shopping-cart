import dog from './greenDog.jpg';

function Home() {
    return (
      <div className="home">
        <div className='greenOutline'>
          <img src={dog} alt="Green Dog" className='greenDog'/>
        </div>

        This is the Home Page
      </div>
    );
}
  
export default Home;