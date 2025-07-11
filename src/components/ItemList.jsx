import Item from './Item';

const ItemList = (props) => {

  return (
    <div className="row">
      {props.list.map(e => (
        <Item key={e.id} item={e} />
      ))} 
    </div>
  );
};

export default ItemList;
