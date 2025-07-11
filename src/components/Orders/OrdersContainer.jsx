import { useState, useEffect } from "react";
import { getOrders } from "../../firebase";
import OrderList from "./OrderList";

const OrdersContainer = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getOrders()
      .then((orders) => {
        setIsLoading(true);
        setOrders(orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container p-4">
        <h2>Loading...</h2>
        <p>Por favor, espere a que carguen todas las ordenes.</p>
      </div>
    );
  }

  return (
    <main className="container flex-1 p-4">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No hay ordenes disponibles.</p>) : <OrderList orders={orders}/>}
    </main>
  );
};

export default OrdersContainer;
