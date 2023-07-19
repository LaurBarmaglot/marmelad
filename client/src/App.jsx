import React, { useState, useEffect } from 'react';
import ShopList from './components/ShopList';
import './App.css'
import './components/ShopList.css';
import Navigation from './navigation';

function App() {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/shops'); //TODO
      const data = await response.json();
      setShops(data.shops);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  };

  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline'>Food Delivery App</h1>
      <Navigation />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ShopList shops={shops} />
      )}
    </div>
  );
}

export default App;
