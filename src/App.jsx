import { useState } from 'react';
import './App.css';

const names = ['Zakeer', 'Syed', 'Hussain', 'Syed'];

function App() {
  // let selected = 1;
  const [selected, setSelected] = useState(1);

  const handleClick = (text, idx) => {
    //selected = idx;
    // console.log(`selected: ${selected}`)
    setSelected(idx);
    debugger;
  };

  return (
    <div>
      <Courses />
      <ul>
        {names.map((v, idx) => (
          <li
            className={selected === idx ? 'active' : ''}
            onClick={() => handleClick(v, idx)}
          >
            {v}
          </li>
        ))}
      </ul>
    </div>
  );

  // return <ul>
  //   {courses.map(function(courseItem, idx) {
  //     return <li>{idx}.  {courseItem}</li>
  //   })}
  // </ul>

  // return (
  //   <ul>
  //     <li className={selectedCourseIdx === 0 ? 'active' : ''}>Frontend</li>
  //     <li className={selectedCourseIdx === 1 ? 'active' : ''}>Backend</li>
  //     <li className={selectedCourseIdx === 2 ? 'active' : ''}>UI/UX</li>
  //   </ul>
  // );
}

export default App;

const courses = [
  'Front-End Web Development',
  'Back-End Web Development',
  'React JS Development',
  'UI/UX Design',
];

const urlSearchParams = location.search; // `?selectedCourseIdx=2`;
const params = new URLSearchParams(urlSearchParams);
const selectedCourseIdx = params.get("selectedCourseIdx");

function Courses() {
  const [selected, setSelected] = useState(
    Number(selectedCourseIdx || 0)
  );

  const handleCourseClick = (idx) => {
    setSelected(idx);
    // localStorage.setItem('selectedCourseIdx', idx);
    const origin = location.origin;
    const searchParams = `?selectedCourseIdx=${idx}`;
    const url = origin + searchParams;
    location.href = url;
  };

  return (
    <div className="ui-courses">
      <nav>
        {courses.map((course, idx) => (
          <span
            onClick={() => handleCourseClick(idx)}
            className={idx === selected ? 'active' : ''}
          >
            {course}
          </span>
        ))}
      </nav>

      <div className="ui-details">
        <h4>Course Details</h4>
        <h2>You have selected: {courses[selected]}</h2>
      </div>
    </div>
  );
}
