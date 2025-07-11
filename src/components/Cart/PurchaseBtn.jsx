import { useState, useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { createOrder } from "../../firebase";
import { CartContext } from "../../context/CartContext";

const PurchaseBtn = ({ clear }) => {

    const [isProcessing, setIsProcessing] = useState(false)
    const { cart, getShippingCost, getSubTotalPrice, getTotalPrice } = useContext(CartContext);

    const handlePurchase = () => {
        setIsProcessing(true);
        createOrder({
            id: Math.floor(Math.random()*1000000),
            date: new Date().toISOString().substring(0,19).replace('T',' '),
            list: cart,
            subtotal: getSubTotalPrice(),
            shipping: getShippingCost(),
            total: getTotalPrice()
        }).then((orderId) => {
            alert(`Compra realizada con éxito. Tu orden es: ${orderId}`);
            clear();
        }).catch((error) => {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al procesar tu compra. Por favor, intenta nuevamente.");
        }).finally(() => {
            setIsProcessing(false);
        });
    };

    const Spinner = (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Procesando ...</span>
        </div>
    )

    if (isProcessing) {
        return (
            <button className="btn btn-success" disabled>
                {Spinner} Procesando Compra
            </button>
        );
    }

    return (
        <button className="btn btn-success" onClick={handlePurchase}>
            <FaCheckCircle /> Confirmar Compra
        </button>
    );
}

export default PurchaseBtn;