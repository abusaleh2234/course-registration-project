
import './App.css'
import Courses from './component/courses/Courses'
import Header from './component/header/Header'

function App() {

  return (
    <>
      <div className="bg-[#F3F3F3]  ">
        <div className="container mx-auto">
        <Header></Header>
        <Courses></Courses>
        </div>
      </div>
      
    </>
  )
}

export default App
