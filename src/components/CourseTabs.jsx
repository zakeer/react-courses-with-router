import React, { useState } from 'react'
import CourseSection from './CourseSection'

/* 
===>    <CourseTabs courses={[]} />
								|
								|
								v
===>    CourseTabs({courses: []})
											|
											|
											v
*/
function CourseTabs({ courses }) {
	const [selectedTab, setSelectedTab] = useState(2) // ---> [value, updateFn];
	// const { courses } = props; // ---> const { courses } = props 


	const selectedCourses = courses[selectedTab]

	return (
		<div className='ui-courses-tabs'>
			{!courses?.length && <h3>No Course Available</h3>}

			<nav>
				{courses?.map((course, idx) => <button
					onClick={() => setSelectedTab(idx)}
					className={idx === selectedTab ? 'active' : ''}
				>{course.title}</button>)}
			</nav>

			{selectedCourses && <section>
				<p>{selectedCourses.description}</p>

				<div className="ui-tabs-section">
					<CourseSection title="Topic" list={selectedCourses?.topics} />
					<CourseSection title="Skills You'll Gain" list={selectedCourses?.learnableSkills} />
				</div>
			</section>}
		</div>
	)
}

export default CourseTabs