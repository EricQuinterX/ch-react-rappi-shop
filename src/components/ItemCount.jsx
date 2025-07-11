import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({food}) => {
    const {addToCart} = useContext(CartContext);
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prevCount => (prevCount > 8 ? 10 : prevCount + 1));
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const add = () => {
        const item = {
            id: food.id,
            name: food.name,
            price: food.price,
            quantity: count
        };
        addToCart(item);
        setCount(1);
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-secondary me-2" onClick={decrement}>
                -
            </button>
            <b className="mx-1">{count}</b>
            <button className="btn btn-outline-secondary ms-2" onClick={increment}>
                +
            </button>
            <button className="btn btn-success ms-2" onClick={add}>Agregar</button>
        </div>
    );
};

export default ItemCount;
