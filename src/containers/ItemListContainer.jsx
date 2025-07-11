import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useSearchParams } from 'react-router';
import { getFoods, getFoodsByCategory } from '../firebase';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const [ searchParams ] = useSearchParams();
  const query = searchParams.get('q');

  const loadItems = async (query) => {
    const promesa = query === undefined || query === null || query === '' ? getFoods() : getFoodsByCategory(query);
    promesa.then((data) => {
      setFoods(data);      
    }).catch((error) => {
      console.error('Error fetching items:', error);
    }).finally(() => {
      setIsLoading(false);
    });
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
