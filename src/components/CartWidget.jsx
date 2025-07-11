import { useContext } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    return (
        <button className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <FaCartShopping /> <span className="badge">{cart.length || 0}</span>
        </button>
    );
};

export default CartWidget;
