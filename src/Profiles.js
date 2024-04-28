import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaHeart, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons
import { Link } from 'react-router-dom'; // Import Link
import girl from './imges/girl.jpeg';
import Chatview from './Chatview';

function Profiles() {
  const [visibleRows, setVisibleRows] = useState(3); // Initial number of visible rows
  const totalRows = 32; // Total number of rows (you can change this as needed)

  const handleLoadMore = () => {
    // Increment the number of visible rows by 1
    setVisibleRows(prevRows => prevRows + 3);
  };

  // Function to render individual profile card
  const renderProfileCard = () => {
    const profileCards = [];
    for (let i = 0; i < visibleRows; i++) {
      profileCards.push(
        <div className="col-md-4 position-relative" key={i}>
          <Link to="/Chatview"> {/* Link to the profile page */}
            <div style={{ background: 'black', padding: '20px', textAlign: 'center', borderRadius: '10px', border: '2px solid white' }}>
              <div style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                <img src={girl} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ color: 'white' }}>Sania Mirza</h2>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-light" style={{ color: 'white' }}>18 Pakistan</button>
                </div>
                <div className="col">
                  <button className="btn btn-outline-light" style={{ color: 'white' }}>Female</button>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '-24px', left: '20px', width: '100%', zIndex: '1' }}>
                <Button variant="light" style={{ marginRight: '20px' }}>
                  <FaHeart color="purple" /> Like
                </Button>
                <Button variant="light">
                  <FaTimes color="purple" /> Dislike
                </Button>
              </div>
            </div>
          </Link>
        </div>
      );
    }
    return profileCards;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {renderProfileCard()}
          </div>
          <br></br>
          <br></br>
          <br></br>
          {visibleRows < totalRows && ( // Render "Load More" button if there are more profiles to show
            
            <div className="text-center mt-4" style={{margin:''}}>
              <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
