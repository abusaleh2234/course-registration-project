import { useEffect, useState } from "react";
import Course from "../course/Course";
import Selectcourses from "../selectCourse/Selectcourses";

const Courses = () => {

    const [courses,setCourses] = useState([])

   useEffect(() => {
    fetch("courses.json") 
    .then(res => res.json()) 
    .then(data => setCourses(data))
   },[])
    return (
        <div className="md:flex gap-4">
            <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <div className="1/4">
                <Selectcourses></Selectcourses>
            </div>

        </div>
    );
};

export default Courses;