import { useEffect } from 'react';
import Item from './Item';

const ItemList = (props) => {
  useEffect(() => {
    // This effect runs once when the component mounts.
    console.log(props.list);
  });

  return (
    <div className="row">
      {props.list.map(e => (
        <Item key={e.id} item={e} />
      ))}
    </div>
  );
};

export default ItemList;
