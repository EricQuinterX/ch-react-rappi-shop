import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EmptyCartBtn from './Cart/EmptyCartBtn';
import PurchaseBtn from './Cart/PurchaseBtn';

const Cart = () => {
    const { cart, getSubTotalPrice, isEmptyCart, getShippingCost, getTotalPrice, clearCart } = useContext(CartContext);

    const onClearCart = () => {
        const myOffcanvas = document.getElementById('offcanvasRight');
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
        bsOffcanvas.hide();
        clearCart()
    };

    const renderCartItems = () => {
        if (isEmptyCart()) {
            return (
                <>
                    <i>No hay productos en el carrito.</i>
                    <br />
                    <i>Intentá agregar productos.</i>
                </>
            )
        }
        return cart.map(item => <CartItem key={`c-${item.id}`} {...item} />);
    };

    const renderFinalButtons = () => {
        if (isEmptyCart())
            return null;

        return (
            <div className="d-flex justify-content-end mt-5">
                <EmptyCartBtn clear={onClearCart} />
                <PurchaseBtn clear={onClearCart} />
            </div>
        );
    };

    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Carrito
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                {renderCartItems()}
                <hr />
                <div className="d-flex justify-content-between">
                    <h4>SubTotal:</h4>
                    <h4>$ {getSubTotalPrice()}</h4>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Costo Envio:</h5>
                    <h5>$ {getShippingCost()}</h5>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <h3>Total:</h3>
                    <h3>$ {getTotalPrice()}</h3>
                </div>
                {renderFinalButtons()}
            </div>
        </div>
    );
};

export default Cart;
