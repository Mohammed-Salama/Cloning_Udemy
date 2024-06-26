import React from 'react'
import styles from './CoursePageSecondContainerStyles.module.css'
import {Rating} from 'react-simple-star-rating'
import VideoContainer from './VideoContainer'
function CoursePageSecondContainer(props) {
   const Instructors = props.data.instructors?.map((instructor , index) =>{
    if (index===props.data.instructors.length-1){
        return <p key={index} className={styles.instructor}>{instructor.name}</p>
    }
    else{
        return (
            <span key={index}>
                <p   className={styles.instructor}>{instructor.name}</p>
                <p  className={styles.instructor_comma}>,</p>
                </span>
        )
    }
   })
  return (
    <div className={styles.courses_page_second_container}>
        <div className={styles.inner_content}>
            <h5 className={styles.categories}>{props.data.top_category}</h5>
            <p className={styles.arrow_icon}>{">"}</p>
            <h5 className={styles.categories}>{props.data.sub_category}</h5>
            <p className={styles.arrow_icon}>{">"}</p>
            <h5 className={styles.categories}>{props.data.sub_sub_category}</h5>
            <div className={styles.video_component_outter_container}>
                <VideoContainer className={styles.video_component} data={props.data}/>
            </div>
            <h1 className={styles.courses_page_second_container_title}>{props.data.title}</h1>
            <p className={styles.courses_page_second_container_description}>{props.data.description}</p>
            <h5 className={styles.rating}>{props.data.stars}</h5>
            <Rating readonly={true} allowHover={false} onClick={()=>{}} initialValue={props.data.stars} size={15}></Rating>
            <button className={styles.ratings_count_button}><u>{"("+props.data.ratings_count+" ratings)"}</u></button>
            <p className={styles.students_count}>{props.data.students+" students"}</p>
            <br/>
            <p className={styles.created_text}>{"Created by"}</p>
            {Instructors}
            <br/>
            <img src="/icons/seal_exclamation.png" className={styles.icon} alt="seal exclamation icon"></img>
            <p className={styles.last_line_text}>{"Last updated "+props.data.last_updated}</p>
            <img src="/icons/earth_grid_inverted.png" className={styles.icon} alt="earth grid icon"></img>
            <p className={styles.last_line_text}>{props.data.course_language}</p>
            <img src="/icons/caption.png" className={styles.icon} alt="caption icon"></img>
            <p className={styles.last_line_text}>{props.data.caption_language}</p>
            <h1 className={styles.price}>E£{props.data.price}</h1>
            <button className={styles.add_to_cart_button}>Add to cart</button>
            <div className={styles.small_texts_container}>
                <p className={styles.small_text}>30-Day Money-Back Guarantee</p>
                <p className={styles.small_text}>Full Lifetime Access</p>
            </div>
            <div className={styles.under_lined_button_container}>
                <button className={styles.under_lined_button}><u>Share</u></button>
                <button className={styles.under_lined_button}><u>Gift this course</u></button>
                <button className={styles.under_lined_button}><u>Apply Coupon</u></button>
            </div>
        </div>
    </div>
  )
}

export default CoursePageSecondContainer