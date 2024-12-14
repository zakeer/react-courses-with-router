function CourseSection({ title, list }) {
    // const title = props.title;
    // const list = props.list;
    return <div className="ui-course-section">
        <h4>{title}:</h4>
        <ul>
            {list?.map(topic => <li>{topic}</li>)}
        </ul>
    </div>
}

export default CourseSection;