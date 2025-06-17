const Item = ({ item }) => {
  const { id, name, description, url } = item;

  return (
    <div key={id} className="col-md-4 mb-4">
      <div className="card">
        <img src={url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Agregar
          </a> 
          <a href={`/food/${id}`} className="btn btn-primary" style={{ marginLeft: '10px' }}>
            Ver Info.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
