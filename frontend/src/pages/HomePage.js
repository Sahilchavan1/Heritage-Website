import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoricalItem from '../components/HistoricalItem';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/heritage')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="homepage">
      {items.map(item => (
        <HistoricalItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default HomePage;
