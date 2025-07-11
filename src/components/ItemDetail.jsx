import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, description, ingredients, price, sold, vendor, url_image, rate_up, rate_down }) => {

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={url_image} className='pb-2' alt={name} style={{ width: '100%' }} />
            </div>
            <div className="col-md-6">
                <h1>{name}</h1>
                <h4>Descripción</h4>
                <p className='pb-2'>{description}</p>
                <h4>Ingredientes</h4>
                <p className='pb-2'>{ingredients}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3><span className="badge text-bg-warning">$ {price}</span></h3>
                    <ItemCount food={{ id, name, price }} />
                </div>
                <h4>Vendidos: {sold} unidades</h4>
                <h4>Vendedor: {vendor}</h4>
                <div style={{ fontSize: '1.5rem' }}>
                    <span className="badge text-bg-success">{rate_up} 🡡</span>
                    <span className="badge text-bg-danger">{rate_down} 🡣</span>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;