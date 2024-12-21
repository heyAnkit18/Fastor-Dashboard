// src/api/apiService.js

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await fetch('https://staging.fastor.ai/v1/pwa/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Assuming the response contains a 'data' key with the token
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow the error to be handled by the calling component
  }
};

// Fetch restaurants function
export const fetchRestaurants = async (token) => {
  try {
    const response = await fetch('https://staging.fastor.ai/api/v1/restaurants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch restaurants: ${response.statusText}`);
    }

    const data = await response.json();
    // Assuming the response contains the 'data' field with restaurant data
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error; // Rethrow the error
  }
};

// Fetch restaurant by city ID
export const fetchRestaurantByCity = async (cityId) => {
  try {
    const response = await fetch(`https://staging.fastor.ai/v1/m/restaurant?city_id=${cityId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch restaurant by city: ${response.statusText}`);
    }

    const data = await response.json();
    // Assuming the response contains the 'data' field
    return data;
  } catch (error) {
    console.error('Error fetching restaurant by city:', error);
    throw error; // Rethrow the error
  }
};


