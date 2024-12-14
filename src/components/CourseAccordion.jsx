import React, { useState } from 'react'
import CourseSection from './CourseSection'

function CourseAccordion({ courses = [] }) {
	const [selected, setSelected] = useState(0);
	return (
		<div>
			{courses.map((course, idx) => <div className='ui-course-accordion-item'>
				<h4 onClick={() => setSelected(idx)}>{course?.title}</h4>

				{selected === idx && <div>
					<p>{course?.description}</p>
					<div className="ui-tabs-section">
						<CourseSection title="Topic" list={course?.topics} />
						<CourseSection title="Skills You'll Gain" list={course?.learnableSkills} />
					</div>
				</div>}
			</div>)}
		</div>
	)
}

export default CourseAccordion