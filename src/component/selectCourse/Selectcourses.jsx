import  PropTypes  from "prop-types";
const Selectcourses = ({selecteds,newcredit,remaining}) => {
    // console.log(selecteds)
    let count = 1
    return (
        <div className="  w-full p-8 space-y-5">
            <div className="border-b-2 pb-6">
                <h3 className="text-lg	font-bold text-[#2F80ED]">Credit Hour Remaining {remaining || 20} hr</h3>
            </div>
           
            <div className="border-b-2">
                <h3 className="text-xl	font-bold pb-4 ">Course Name</h3>
                <div className="pb-4 space-y-2">
                {
                    selecteds.map((select,idx) => <h4 key={idx}>{count++}. {select.title}</h4>)
                }
                </div>
            </div>
            <h5>Total Credit Hour :{newcredit}</h5>
        </div>
    );
};
Selectcourses.propTypes ={
    selecteds:PropTypes.array.isRequired,
    newcredit:PropTypes.number.isRequired,
    remaining:PropTypes.number.isRequired
}
export default Selectcourses;