// ShowDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../src/assets/ShowDetails.css';

function ShowDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <>
    <div className='details-container'>
      <div className='details-summary-container'>
        <h1>{showDetails.name}</h1>
        <div className="details-content">
          <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
          <div className="details-info">
            <p><strong>Genres:</strong> {showDetails.genres.join(', ')}</p>
            <p><strong>Language:</strong> {showDetails.language}</p>
            <p><strong>Premiered:</strong> {showDetails.premiered}</p>
            <p><strong>Status:</strong> {showDetails.status}</p>
          </div>
          <Link to={`/purchase/${showDetails.name}`}>
            <button>Purchase</button>
          </Link>
        </div>
      </div>
      <div className='details-image-container'>
        <img className='details-image' src={showDetails.image?.original} alt={showDetails.name} />
      </div>
    </div>
    </>
  );
}

export default ShowDetails;
