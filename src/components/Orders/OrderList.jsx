import OrderItem from "./OrderItem"

const OrderList = ({ orders }) => {

    return (
        orders.map((order, index) => (<OrderItem key={index} {...order}/>))
    )
}

export default OrderList;