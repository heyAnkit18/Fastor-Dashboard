import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../api/apiService';
import Loader from '../components/Loader';
import './Home.css';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchData();
    } else {
      setError('Please log in to view restaurants');
    }
  }, [token]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchRestaurants(token);
      setRestaurants(data);
    } catch (error) {
      setError('Failed to fetch restaurants');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homeContainer">
      <h2>Restaurants</h2>
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      <ul>
        {restaurants && restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
