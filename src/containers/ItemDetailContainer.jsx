import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const API = 'https://681dfe79c1c291fa6632903b.mockapi.io/api/v1';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const loadInfo = async (id) => {
    // This function would typically fetch data from an API or database.
    console.log('Items loaded');
    const info = await fetch(`${API}/foods/${id}`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching items:', error))
      .finally(() => {
        setIsLoading(false);
      });

    setInfo(info);
  };

  useEffect(() => {
    loadInfo(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container">
        <h2>Loading...</h2>
        <p>Please wait while we load the item details.</p>
      </div>
    );
  }

  return (
    <main className="container flex-1 p-4">
      <h1>{info.name}</h1>
      <img src={info.url} className='pb-2' alt={info.name} />
      <h3>Descripción</h3>
      <p className='pb-2'>{info.description}</p>
      <h3>Ingredientes</h3>
      <p className='pb-2'>{info.ingredients}</p>
      <h3>Precio: ${info.price}</h3>
      <h3>Vendidos: {info.sold} unidades</h3>
    </main>
  );
};

export default ItemDetailContainer;
