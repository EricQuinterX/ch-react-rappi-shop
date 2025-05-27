import { FaCartShopping } from "react-icons/fa6";

const CartShopping = () => {
  return (
    <button className="btn btn-success">
      <FaCartShopping /> <span className="badge">0</span>
    </button>
  );
};

export default CartShopping;
