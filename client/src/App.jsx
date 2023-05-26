import React, { useState, useEffect } from 'react';
import ShopList from './components/ShopList';
import './components/ShopList.css';
function App() {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/shops');
      const data = await response.json();
      setShops(data.shops);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  };

  return (
    <div className="App">
      <h1>Food Delivery App</h1>
      <h2>Shops</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ShopList shops={shops} />
      )}
    </div>
  );
}

export default App;
