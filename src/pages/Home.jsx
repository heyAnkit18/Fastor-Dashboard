import React, { useEffect, useState } from 'react';
import { fetchRestaurants } from '../api/apiService';
import Loader from '../components/Loader';
// import './Home.css'; 

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('Please log in first!');
          return;
        }
        const response = await fetchRestaurants(token);
        setRestaurants(response.data); 
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        alert('Failed to fetch restaurants. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid">
      {restaurants.map((restaurant) => (
        <div key={restaurant.restaurant_id} className="card">
          <h3 className="cardTitle">{restaurant.restaurant_name}</h3>
          <p className="cardDescription">
            {restaurant.location.city}, {restaurant.location.state}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;

