const OrderItem = ({ id, date, list, subtotal, shipping, total }) => {


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-body">
                        <h4>Nro. {id}</h4>
                        <small>{date}</small>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">Productos</h5>
                        {list.map((item, index) => (
                            <p key={index} className="card-text">
                                <strong>{item.quantity}</strong> x {item.name} = <strong>${item.price * item.quantity}</strong>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h5 className="card-title">Resumen</h5>
                        <p className="card-text">Subtotal: <strong>${subtotal}</strong></p>
                        <p className="card-text">Envío: <strong>${shipping}</strong></p>
                        <p className="card-text">Total: <strong>${total}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;