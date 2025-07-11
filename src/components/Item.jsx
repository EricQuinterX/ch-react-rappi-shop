import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";

const Item = ({ item }) => {
  const { id, name, price, url_image, sold, rate_up, rate_down } = item;

  return (
    <div id={id} key={id} className="col-lg-4 mb-4">
      <Link to={`/food/${id}`} className="card" style={{ textDecoration: 'none'}} title="Ver detalle">
        <img src={url_image} className="card-img-top" alt={name} style={{height: '250px', objectFit: 'cover'}} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-text">$ {price}</h4>
            <div>
              <span className="badge text-bg-success">{rate_up} 🡡</span>
              <span className="badge text-bg-danger">{rate_down} 🡣</span>
            </div>
          </div>
          <p className="card-text">
            <small className="text-muted">{sold} unidades vendidas</small>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
