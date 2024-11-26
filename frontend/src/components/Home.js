import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch photos from an API
  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos'); // Example API for photos
      setPhotos(response.data.slice(0, 10)); // Fetch only the first 20 photos for simplicity
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch photos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to fetch photos on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Photo Gallery</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%' }} />
            <p style={{ fontSize: '12px', textAlign: 'center' }}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
