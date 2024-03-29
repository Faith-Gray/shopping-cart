import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Data from './ReviewData';

function Review() {
  return (
    <div className="review">
      {
        Data.map( data => {
          return (
            <div className='reviewContainer'>

              <div className='review_image'>
                <img className='image' src={ data.image } />
              </div>
              <div className="review_name">{data.name}</div>

              <div className="review_stars"> 
                      <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
                      <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
                      <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
                      <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
                      <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
              </div>
              <div className="review_sentence">{data.sentence}</div>
              <div className='review_line'></div>
            </div>
          )
        })

      }

        {/* <div className="review_pic">insert picture</div> */}
        {/* <div className="review_image">
            {props.imgsrc}
        </div>
        <div className="review_stars"> 
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
            <FontAwesomeIcon className='twitterIcon' icon={ faStar }/>
        </div>
        <div className="review_name">{props.name}</div>
        <div className="review_sentence">{props.sentence}</div> */}
    </div>
  )
}

export default Review;