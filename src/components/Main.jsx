const Main = ({ lista }) => {
  const loadData = () =>
    lista.map(item => {
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
            </div>
          </div>
        </div>
      );
    });

  return (
    <main className="flex-1 p-4">
      <div className="row">{loadData()}</div>
    </main>
  );
};

export default Main;
