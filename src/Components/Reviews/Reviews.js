import './Reviews.css'
import Review from './Review';
import reviewData from './ReviewData';

function Reviews() {
  const reviewElements = reviewData.map(review => {
    return <Review name={review.name} sentence={review.sentence} key={review.name} imgsrc={review.image} />
  });

  
  return (
    <div className="reviews">
      <header className="pageTitle">
        REVIEWS
      </header>
      <div className="container">
 
        {reviewElements}
      </div>
      
    </div>
  );
}
  
export default Reviews;