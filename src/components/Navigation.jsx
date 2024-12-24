import { NavLink } from "react-router";

export function Navigation() {
    return <nav>
        <NavLink to="/html">HTML</NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/js">JS</NavLink>
    </nav>
}

/*
export function Navigation() {
    return <nav>
        <a href="/html">HTML</a>
        <a href="/css">CSS</a>
        <a href="/js">JS</a>
    </nav>
}
*/