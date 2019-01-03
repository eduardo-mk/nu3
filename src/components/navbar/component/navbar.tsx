import * as React from "react";

export interface NavbarTopElements {
    title: string
}
export interface NavbarProps {
    titles: Array<NavbarTopElements>,
    handlerFn:(event: React.MouseEvent )=> void
}

function generateTop( titles : Array<NavbarTopElements>, handlerFn: (event: React.MouseEvent)=> void ) {
    return titles.map((element, index)=>{
        console.log(element.title)
        return (
            // :( => Bad Practice to set indexes as key but no id from BEnd up to this point.
            <li onClick={ handlerFn } key={index}>{element.title}</li>
        )
    })
};

const Navbar: React.StatelessComponent<NavbarProps> = (props) => {
    if(props.titles && props.titles.length > 0) {
        return (
            <ul> { generateTop( props.titles, props.handlerFn) } </ul>
        );
    }
}

export default Navbar;
