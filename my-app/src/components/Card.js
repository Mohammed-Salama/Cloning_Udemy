import React , {useState} from 'react'
import styles from './CardStyle.module.css'
import {Rating} from 'react-simple-star-rating'
import PopUpComponent from './PopUpComponent';
import {Link} from 'react-router-dom';
function Card(props) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const getInstructorsString = (instructors) => {
    let instructorsString = "";
    instructors.forEach((instructor, index) => {
        if (index === instructors.length - 1) {
          instructorsString += instructor.name;
        } else {
          instructorsString += instructor.name + ", ";
        }
      } 
    );
    return instructorsString;
  }
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.card_outer_container}>
      <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to = {`/courses/${props.data.id}`}>
        <div  className={styles.course}>
            <figure className={styles.course_figure_tag}>
                <img className={styles.course_img} src={props.data.img} alt={`python_course ${props.data.id}`}></img>
            </figure>
            <h4 className={styles.course_description_text}>{props.data.title}</h4>
            <p className={styles.instructor}>{getInstructorsString(props.data.instructors)}</p>
            <div className={styles.stars_rating_bar}>
                <h5 className={styles.stars_count}>{props.data.stars}</h5>
                <Rating readonly={true} allowHover={false} onClick={()=>{}} initialValue={props.data.stars} size={18}></Rating>
                <p className={styles.ratings_count}>{`(${props.data.ratings_count})`}</p>
            </div>
            <h4 className={styles.course_price}>{`E£${props.data.price}`}</h4>
            {(props.data.bestseller)?<div className={styles.bestseller_badge}><h6 className={styles.bestseller_text}>Bestseller</h6> </div>:null}
        </div>
      </Link>
      <div className={styles.pop_up_outer_container}>
        {isHovering && <PopUpComponent data={props.data}></PopUpComponent>} 
      </div>
    </div>
  )
}

export default Card