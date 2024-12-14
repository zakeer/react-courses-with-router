import React, { useState } from 'react'
import CourseSection from './components/CourseSection';

function CourseCard(props) {

  const [expand, setExpand] = useState(false);

  return (
    <div className='course-card'>
      <header>
        <h3>{props.course.title}</h3>
        <p>{props.course.description}</p>
      </header>

      {expand && <section className='ui-course-section-container'>
        <CourseSection title="Topics" list={props?.course?.topics} />
        <CourseSection title="Skills You'll Gain" list={props?.course?.learnableSkills} />
      </section>}

      <button onClick={() => setExpand(!expand)}>{expand ? 'Hide Details' : 'View Details'}</button>

    </div>
  )
}



export default CourseCard