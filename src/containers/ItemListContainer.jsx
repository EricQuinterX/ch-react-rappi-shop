import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

const API = 'https://681dfe79c1c291fa6632903b.mockapi.io/api/v1';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const loadItems = async () => {
    // This function would typically fetch data from an API or database.
    console.log('Items loaded');
    const foods = await fetch(`${API}/foods`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching items:', error))
      .finally(() => {
        console.log('Fetch completed');
        setIsLoading(false);
      });

    setFoods(foods);
  };

  useEffect(() => {
    loadItems();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <h2>Loading...</h2>
        <p>Please wait while we load the items.</p>
      </div>
    );
  }

  console.log('Foods loaded:', foods);

  return (
    <main className="container flex-1 p-4">
      <ItemList list={foods} />
    </main>
  );
};

export default ItemListContainer;
