import * as React from "react";
import Navbar, { NavbarTopElements } from './navbar/nav-bar'
export interface myProps {
    compiler: string,
    framework: string,
}
const titles = 
[{ title: 'Calculator', id: 108 }, { title: 'Data Base', id: 109 }, { title: 'Records', id: 110 }];
const handler = (event: React.MouseEvent) => {
    console.log(event.currentTarget)
 }


export const Nu3app = (props: myProps) => {
    return (
        <section>
            <Navbar titles={titles} handlerFn={handler} ></Navbar>
            <h1>Hello from {props.compiler} and {props.framework}</h1>
        </section>
    )
};
