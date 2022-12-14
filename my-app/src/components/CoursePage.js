import React from 'react'
import {CoursesDataContext} from '../App.js';
import {useParams} from 'react-router-dom';
import CoursePageTopContainer from './CoursePageTopContainer';
import CoursePageSecondContainer from './CoursePageSecondContainer';
import CoursePageThirdContainer from './CoursePageThirdContainer';
import CoursePageRightComponent from './CoursePageRightComponent.js';
import CoursePageFooter from './CoursePageFooter.js';

function CoursePage() {
  const courseID = useParams();
  const data = React.useContext(CoursesDataContext);
  const courseData = data.courses_data.courses.find(course => course.id === courseID.courseId);

  
  return (
    <>
      <CoursePageTopContainer data={courseData}/>
      <CoursePageSecondContainer data={courseData}/>
      <CoursePageThirdContainer data={courseData}/>
      <CoursePageRightComponent data={courseData}/>
      <CoursePageFooter/>
    </>
  )
}

export default CoursePage