import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import Course from "../course/Course";
import Selectcourses from "../selectCourse/Selectcourses";

const Courses = () => {

    const [courses,setCourses] = useState([])
    const [selecteds,setSelecteds] =useState([])
    const [newcredit,setCredit] =useState(0)
    const [remaining, setRemaining] = useState(0)

   useEffect(() => {
    fetch("courses.json") 
    .then(res => res.json()) 
    .then(data => setCourses(data))
   },[])

   const hendelSelectedCourse = course =>{
    // const {title ,credit} = course;
     const CheckISInclude = selecteds.find(select => select.title == course.title)
     let InititlCredit = course.credit;
    if(CheckISInclude){
        return toast("this course is alredy selected")
    }
    else{
        selecteds.forEach(select => {
            InititlCredit = InititlCredit + select.credit 
        })
        const remainingCredit = 20 - InititlCredit 

        if(InititlCredit > 20){
            return toast("your ceridet is complete")
        }

        setCredit(InititlCredit)
        setRemaining(remainingCredit)
        const newSelecteds = [...selecteds , course]
        setSelecteds(newSelecteds)
    }

    // console.log(newSelecteds)
   }
    return (
        <div className="md:flex gap-4">
            <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        hendelSelectedCourse={hendelSelectedCourse}
                        ></Course>)
                }
            </div>
            <div className="w-1/4 h-min bg-white rounded-lg">
                {/* {
                    selecteds.map((select,idx) => )
                } */}
                <Selectcourses selecteds={selecteds} newcredit={newcredit} remaining={remaining}></Selectcourses>
                
            </div>

        </div>
    );
};

export default Courses;