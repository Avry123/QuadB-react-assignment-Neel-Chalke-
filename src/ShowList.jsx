// ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../src/assets/ShowList.css'

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Show List</h1>
      <div className="card-container">
        {shows.map((show) => (
          <div className="card" key={show.show.id}>
            <img src={show.show.image?.medium} alt={show.show.name} />
            <div className="card-content">
              <h2>{show.show.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: show.show.summary }} />
              <Link to={`/show/${show.show.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
