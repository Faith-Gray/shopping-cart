import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function Review(props) {
  return (
    <div className="review">
        {/* <div className="review_pic">insert picture</div> */}
        <div className="review_stars"> 
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
        </div>
        <div className="review_image">
            {props.imgsrc}
            </div>
        <div className="review_name">{props.name}</div>
        <div className="review_sentence">{props.sentence}</div>
    </div>
  )
}

export default Review;