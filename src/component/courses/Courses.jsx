import Course from "../course/Course";
import Selectcourses from "../selectCourse/Selectcourses";

const Courses = () => {

    return (
        <div className="md:flex ">
            <div className="w-3/4">
                <Course></Course>
            </div>
            <div className="1/4">
                <Selectcourses></Selectcourses>
            </div>

        </div>
    );
};

export default Courses;