import React, { useState, useEffect } from 'react';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlaces([
        { id: 1, name: 'Taj Mahal', location: 'Agra' },
        { id: 2, name: 'Qutub Minar', location: 'Delhi' },
        { id: 3, name: 'Mysore Palace', location: 'Mysore' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Popular Tourist Places</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {places.map(place => (
            <li key={place.id}>
              <strong>{place.name}</strong> - {place.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaceList;