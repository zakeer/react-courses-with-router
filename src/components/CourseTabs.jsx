import React, { useEffect, useState } from 'react'
import CourseSection from './CourseSection'
import { useSearchParams } from 'react-router'

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

	const [params, setParams] = useSearchParams();

	const [selectedTab, setSelectedTab] = useState(
		Number(params.get("selectedCourse") || 0)
	) // ---> [value, updateFn];
	// const { courses } = props; // ---> const { courses } = props 

	useEffect(() => {
		setSelectedTab(Number(params.get("selectedCourse") || 0))
	}, [params])


	const selectedCourses = courses[selectedTab]
	console.log(":: CourseTabs rendering...::")

	return (
		<div className='ui-courses-tabs'>
			{!courses?.length && <h3>No Course Available</h3>}

			<nav>
				{courses?.map((course, idx) => <button
					onClick={() => {
						// // 1. Update selected idx state
						// setSelectedTab(idx);

						// 2. Updated search params value
						setParams((prevParams) => {
							prevParams.set("selectedCourse", idx);
							return prevParams;
						})
					}}
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