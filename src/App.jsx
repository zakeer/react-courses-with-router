import { Navigation } from "./components/Navigation";
import "./App.css"
import { useLocation } from "react-router";

function App() {
    // Native Javascript browser location
    // const pathName = location.pathname;

    // React Router library location
    const location = useLocation();
    const pathName = location.pathname
    return <div>
        <Navigation />

        <section style={{padding: '24px'}}>
            <p>{pathName}</p>

            {COURSES[pathName]}

            {/* {pathName === "/html" && <HTMLCourse />}
            {pathName === "/css" && <CSSCourse />} */}
        </section>
    </div>
}

var COURSES = {
    '/html': <HTMLCourse />,
    '/css': <CSSCourse />,
    '/js': "Comming soon JS Course..."
}

function HTMLCourse() {
    return <div>
        <h2>Learn Web development with HTML</h2>
    </div>
}

function CSSCourse() {
    return <div>
        <h2>Styling with CSS in Web</h2>
    </div>
}

export default App;