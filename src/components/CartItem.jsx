import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="card mt-1">
            <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/food/${id}`}><h5 className="card-title">{name}</h5></Link>
                    <h5 className="card-title">$ {price * quantity}</h5>
                </div>
                <p className="card-text">$ {price} x {quantity}u.</p>
                <button className="btn btn-danger" title="Quitar" onClick={() => removeFromCart(id)}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default CartItem;