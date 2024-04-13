import React,  { useState, useEffect } from 'react'
import CourseCard from '../CourseCard/CourseCard';


const Dashboard = () => {
  
    
        const [courses, setCourses] = useState([]);


useEffect(() => {
 
}, []);

return (
  <div className="dashboard">
    <h1>Courses Dashboard</h1>
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.courseId} course={course} />
      ))}
    </div>
    
  </div>
)
  
}

export default Dashboard