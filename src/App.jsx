import CourseCard from "./CourseCard"
// import courses from "./courses.json"

import "./App.css";
import { useEffect, useState } from "react";
import CourseTabs from "./components/CourseTabs";
import CourseAccordion from "./components/CourseAccordion";

let coursesResponse;

// console.log("Invoking fetch call");
// fetch(`/courses.json`)
//   .then(res => {
//     console.log(`Converting res to json`)
//     return res.json();
//   })
//   .then(resInJson => {
//     coursesResponse = resInJson;
//     console.log("API SUCCESS", coursesResponse);

//   })

export default function App(props) {

  const [courses, setCourses] = useState([]);

  useEffect(function(){
    fetch('/courses.json')
    .then(res => {
      console.log(`converting to json`);
      return res.json()
    })
    .then(resInJson => {
      console.log(`API Response`, resInJson);
      setCourses(resInJson);
    })
  }, [])


  console.log("APP Component", courses);

  return <div>
    <h1>Courses</h1>
    <Toggle />
    <Toggle />
    <Toggle />

    <section className="courses-accordion">
      <CourseAccordion courses={courses} />
    </section>

    <section className="courses-tabs">
      <CourseTabs courses={courses} />
    </section>

    <section className="courses-container">
      {courses?.map(function (value, idx, orginalArray) {
        return <CourseCard course={value} />
      })}
    </section>

  </div>
}

function Toggle() {
  const [show, setShow] = useState(false);
  return <button onClick={() => setShow(!show)}>{show ? 'OFF' : 'ON'}</button>
}



/*
1. 
fetch(`https://fakestoreapi.com/products`)
 .then(() => console.log('DONE'))
 .catch(() => console.log('ERROR'))

2. 
fetch('https://fakestoreapi.com/products/1').then(function() {
    console.log('DONE')
}).catch(function() {
    console.log('ERROR')
})

3. 
const handleSuccess = () => console.log('DONE');
const handleError = () => console.log('ERROR');

fetch('https://fakestoreapi.com/products/1')
    .then(handleSuccess)
    .catch(handleError)
*/