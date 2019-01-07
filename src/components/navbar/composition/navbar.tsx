import * as React from "react";
import generateList from '../../common/listGenerator';

export interface NavbarTopElements {
  title: string;
  id: number;
}
export interface NavbarProps {
  elements: Array<NavbarTopElements>,
  handlerFn?: (event: React.MouseEvent) => void
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  if (props.elements && props.elements.length > 0) {
    return (
      <ul> {generateList<NavbarProps>(props)} </ul>
    );
  }
}

export default Navbar;
