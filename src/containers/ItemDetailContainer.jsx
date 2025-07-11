import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getFoodId } from '../firebase';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const loadInfo = async (id) => {
    getFoodId(id)
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    <main className="container p-4">
      <ItemDetail {...info} />
    </main>
  );
};

export default ItemDetailContainer;
