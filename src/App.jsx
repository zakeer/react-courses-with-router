import CourseCard from "./CourseCard"
// import courses from "./courses.json"

import "./App.css";

export default function App(props) {
  return <div>
    <h1>Courses</h1>

    <section className="courses-container">
      {props.courses.map(function (value, idx, orginalArray) {
        return <CourseCard course={value} />
      })}
    </section>

  </div>
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