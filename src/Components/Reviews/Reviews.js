import './Reviews.css'
import Review from './Review';
import reviewData from './ReviewData';

function Reviews() {


  return (
    <div className="reviews">
      <header className="pageTitle">
        REVIEWS
      </header>
      <div className="container">
          <Review />
      </div>
      
    </div>
  );
}
  
export default Reviews;