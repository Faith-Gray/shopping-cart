import dog from './greenDog.jpg';

function Home() {
    return (
      <div className="home">
        <img src={dog} alt="Green Dog" className='greenDog'/>;

        This is the Home Page
      </div>
    );
}
  
export default Home;