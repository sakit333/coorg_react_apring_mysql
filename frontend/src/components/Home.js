import React, { useState, useEffect } from 'react';

// Sample data for Coorg photos and locations
const coorgPhotos = [
  {
    id: 1,
    url: 'https://eventserica.com/wp-content/uploads/2024/02/Abbey-Falls-1.jpeg',
    title: 'Abbey Falls',
    location: 'Madikeri, Coorg',
  },
  {
    id: 2,
    url: 'https://4.imimg.com/data4/AQ/IE/GLADMIN-16246596/3-250x250.jpg',
    title: 'Nisargadhama',
    location: 'Kodagu, Coorg',
  },
  {
    id: 3,
    url: 'https://live.staticflickr.com/34/74074149_4c24938fe1_b.jpg',
    title: 'Iruppu Falls',
    location: 'Siddapura, Coorg',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/736x/1c/10/c1/1c10c144bd215a58da4d76168059421e.jpg',
    title: 'Dubare Elephant Camp',
    location: 'Coorg',
  },
  {
    id: 5,
    url: 'https://vl-prod-static.b-cdn.net/system/images/000/430/062/95acfeb55e0c5bcc7b53e497709c5514/700gt/tadiandamol_trek_coorg_bmcadventures_01.jpg?1593814917',
    title: 'Tadiandamol Peak',
    location: 'Coorg',
  },
];

const Home = () => {
  const [photos, setPhotos] = useState(coorgPhotos); // Set photos to Coorg data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // This function would be used if you wanted to fetch data from an API
  const fetchPhotos = async () => {
    setLoading(true);
    try {
      // Assuming you would replace this with an actual API call
      setPhotos(coorgPhotos);
      setError('');
    } catch (err) {
      setError('Failed to fetch photos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to call fetchPhotos when the component mounts
  useEffect(() => {
    fetchPhotos(); // Fetch the photos when the component mounts
  }, []); // Empty dependency array means this runs only once, after the first render

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Coorg Photo Gallery</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ width: '250px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <img
              src={photo.url}
              alt={photo.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderBottom: '1px solid #ddd',
              }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ fontSize: '16px', margin: '0', color: '#333' }}>{photo.title}</h3>
              <p style={{ fontSize: '14px', color: '#888', margin: '5px 0' }}>{photo.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
