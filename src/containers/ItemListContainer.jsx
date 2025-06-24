import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useSearchParams } from 'react-router';

const API = 'https://681dfe79c1c291fa6632903b.mockapi.io/api/v1';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const [ searchParams ] = useSearchParams();
  const query = searchParams.get('q');

  const loadItems = async (query) => {
    const endpoint = (query === undefined || query === null || query === '') ? 'foods' : `foods?category=${query}`;
    setIsLoading(true);
    const foods = await fetch(`${API}/${endpoint}`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching items:', error))
      .finally(() => {
        setIsLoading(false);
      });
    setFoods(foods);
  };

  useEffect(() => {
    loadItems(query);
  }, [query]);

  if (isLoading) {
    return (
      <div className="container p-4">
        <h2>Loading...</h2>
        <p>Please wait while we load the items.</p>
      </div>
    );
  }
  
  return (
    <main className="container flex-1 p-4">
      {query && <h2 className="text-center mb-4">{query.toUpperCase()}</h2>}
      <ItemList list={foods} />
    </main>
  );
};

export default ItemListContainer;
