import React, { useEffect, useState } from 'react'
import CourseSection from './CourseSection'
import { useSearchParams } from 'react-router';

function CourseAccordion({ courses = [] }) {
	let [searchParams, setSearchParams] = useSearchParams();
	const [selected, setSelected] = useState(
		Number(searchParams.get("selectedCourse") || 0)
	);

	useEffect(() => {
		setSelected(Number(searchParams.get("selectedCourse") || 0))
	}, [searchParams])

	return (
		<div>
			{courses.map((course, idx) => <div className='ui-course-accordion-item'>
				<h4 onClick={() => {
					// setSelected(idx);
					setSearchParams(prevParams => {
						prevParams.set("selectedCourse", idx);
						return prevParams;
					})
				}}>{course?.title}</h4>

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