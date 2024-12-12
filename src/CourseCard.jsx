import React from 'react'

function CourseCard(props) {
  return (
    <div className='course-card'>
        <header>
            <h3>{props.course.title}</h3>
            <p>{props.course.description}</p>
        </header>
    </div>
  )
}

export default CourseCard