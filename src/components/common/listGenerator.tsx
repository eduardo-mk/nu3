import * as React from 'react';
interface DefaultElementsProps {
  title: string;
  id: number;
}

interface DefaultListProps {
  elements: Array<DefaultElementsProps>;
  handlerFn?: (event: React.MouseEvent) => void;
}
/**
 * 
 * @param props ListProps
 * Generates li elements.
 */
function generateList<ListProps extends DefaultListProps>(
  props: ListProps): JSX.Element[] {
  return props.elements.map((element) => {
    return (
      <li
        onClick={props.handlerFn}
        key={element.id}>
        {element.title}</li>
    )
  })
};

export default generateList;