import * as React from "react";
import Navbar from './composition/navbar';
import Button from '@material-ui/core/Button';
export interface myProps {
  compiler: string,
  framework: string,
}
const elements =
  [{ title: 'Calculator', id: 108 }, { title: 'Data Base', id: 109 }, { title: 'Records', id: 110 }];
const handler = (event: React.MouseEvent) => {
  console.log(event.currentTarget);
}


export const Nu3app = (props: myProps) => {
  return (
    <section>
      <Navbar elements={elements} handlerFn={handler} ></Navbar>
      <h1>Hello from {props.compiler} and {props.framework}</h1>
      {/* <Button variant="contained" color="primary">
        Hello World
            </Button> */}
    </section>
  )
};
