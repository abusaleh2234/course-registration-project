import { FiDollarSign,FiBookOpen } from 'react-icons/fi';

import  PropTypes  from "prop-types";
const Course = ({course,hendelSelectedCourse}) => {
    // console.log(course)
    const {course_img, details,price,credit,title} = course; 
    return (
        <div className="bg-white p-3 rounded-lg space-y-4 ">
            <img className="w-full" src={course_img} alt="" />
            <div className="space-y-2">
                <h2 className='font-bold text-lg'>{title}</h2>
                <p className='text-sm font-normal'>{details}</p>
                <div className="flex justify-between ">
                    <div className="flex items-center space-x-3">
                        <span className='text-xl'><FiDollarSign></FiDollarSign></span>
                        <p className='text-[#1c1b1bcc]'>Price:{price}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className='text-xl'><FiBookOpen></FiBookOpen></span>
                        <p className='text-[#1c1b1bcc]'>Credit:{credit}</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>hendelSelectedCourse(course)} className='w-full py-2 font-semibold text-white text-lg rounded-lg bg-[#2F80ED]'>Select</button>
        </div>
    );
};

Course.propTypes ={
    course:PropTypes.object.isRequired,
    hendelSelectedCourse:PropTypes.func.isRequired
}
export default Course;