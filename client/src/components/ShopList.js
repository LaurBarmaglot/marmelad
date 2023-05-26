import React from 'react';

const ShopList = ({ shops }) => {
  return (
    <div>
      {shops.length === 0 ? (
        <p>No shops available</p>
      ) : (
        shops.map((shop) => (
          <div key={shop.id} className="shop-item">
            <h4>{shop.name}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopList;
