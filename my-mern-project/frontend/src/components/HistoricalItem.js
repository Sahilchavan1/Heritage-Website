import React from 'react';

const HistoricalItem = ({ item }) => {
  return (
    <div className="historical-item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.location}</p>
    </div>
  );
};

export default HistoricalItem;
