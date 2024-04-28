import { Container, Row, Col, Card, Nav, Stack, Badge, Button } from 'react-bootstrap';
import { FaUserCircle, FaFilter, FaHeart, FaTimes,FaFacebook, FaTwitter, FaInstagram,FaGlobe   } from 'react-icons/fa'; // Import FontAwesome icon for the profile icon
import logo2 from './imges/pexels-mikhail-nilov-6530545.jpg'
import girl from './imges/girl.jpeg'
import './home.css';
import Profiles from './Profiles';
import React from 'react';


const AutoLayoutExample = () => {
  const links = ["About Us", "Terms", "Privacy Policy", "Contact", "FAQs", "Refund"];

  return (
    <><div style={{ overflowY: 'auto', overflowX: 'auto', overflowX: 'hidden', height: '80vh' }}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <div style={{ border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px' }}>
              <Stack gap={3}>
                <div className="p-2">
                  <img src={girl} alt="Profile" style={{ width: '50px', borderRadius: '50%' }} /> {/* Replaced icon with img */}
                  <div style={{ color: 'white' }}>John Doe</div>
                  <div style={{ color: 'white' }}>Popularity: Low</div>
                  <Button style={{ color: 'purple', border: '1px solid purple', borderRadius: '20px', padding: '5px', display: 'inline-block', background: 'transparent' }}>Increase Popularity</Button>
                </div>
                <div className="p-2">
                  <Badge bg="primary">Visitors: 100</Badge>
                  <Badge bg="success">Likes: 50</Badge>
                  <Badge bg="info">Friends: 20</Badge>
                </div>
                <div>
                  <Nav variant="tabs" defaultActiveKey="/find-matches" className="flex-column">
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/matches" style={{ color: 'purple' }}>Find Matches</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/matches" style={{ color: 'purple' }}>Matches</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/visitors" style={{ color: 'purple' }}>Visitors</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/gifts" style={{ color: 'purple' }}>Gifts</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/people-i-like" style={{ color: 'purple' }}>People I Like</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/people-i-hate" style={{ color: 'purple' }}>People I Hate</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/people-i-hate" style={{ color: 'purple' }}>Hot</Nav.Link>
                      </Nav.Item>
                    </div>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/people-i-hate" style={{ color: 'purple' }}>Likes</Nav.Link>
                      </Nav.Item>
                    </div>
                  </Nav>
                </div>
              </Stack>
            </div>
          </Col>
          <Col md={8} style={{ marginTop: '30PX' }}>
            <div class="row">
              <div class="col-md-6">
                <div className="profile-logo">
                  <p style={{ color: 'white' }}>Just for you</p>
                  <img src={girl} alt="Profile" style={{ width: '40px', borderRadius: '50%' }} /> {/* Replaced icon with img */}
                  <div className="profile-name" style={{ color: 'purple', fontWeight: 'bold' }}>faxoriy</div>
                </div>
              </div>
              <div class="col-md-6">
                <div className="filter-option" style={{ color: 'white' }}>
                  <FaFilter size={20} />
                  Filters
                </div>
              </div>
            </div>
            <Row className="row-cols-md-2">
              <Col md={6} style={{ margin: '20px 10px', maxWidth: '350px', maxHeight: '250px' }}>
                <div className="card-container">
                  <Card style={{ border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '350px' }}>
                    <Card.Img variant="top" src={logo2} style={{ maxHeight: '320px' }} />
                  </Card>
                </div>
              </Col>
              <Col md={6} style={{ margin: '100px 10px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                <Row>
                  <Col md={7} className="purple-text">
                    <p>About faxoriy oriy</p>
                  </Col>
                  <Col md={4}>
                    <FaUserCircle size={20} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Preferred Language</h7>
                    <p className="white-text">English</p>
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Age</h7>
                    <p className="white-text">25</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Height</h7>
                    <p className="white-text">170cm</p>
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Location</h7>
                    <p className="white-text">Pakistan</p>
                  </Col>
                </Row>
                <div style={{ position: 'absolute', top: '1x', left: '20px', width: '100%', zIndex: '1' }}>
                  <Button variant="light" style={{ marginRight: '20px' }}>
                    <FaHeart color="purple" /> Like
                  </Button>
                  <Button variant="light">
                    <FaTimes color="purple" /> Dislike
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <h1 style={{ color: 'purple' }}>
          Other users & profiles
        </h1>
        <Profiles />
      </Container>
    </div>
    <br>
    </br>
   
    <div className="container-fluid">
      <div className="row">
        {/* First Column */}
        <div className="col-md-2">
          <div>
            <FaGlobe style={{color:'white'}} />
            <h7 style={{color:'white'}}>  Languages  </h7>
            {/* Social media icons */}
            <FaFacebook style={{color:'white'}}/>
            <FaTwitter style={{color:'white'}} />
            <FaInstagram  style={{color:'white'}}/>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-md-6">
        <div className="row">
        <div className="row-md-4">
        {links.map((link, index) => (
            // Render each link with a dash after it (except for the last one)
            <React.Fragment key={index}>
              <a href={"#" + link.toLowerCase().replace(/\s+/g, '-')}>{link}</a>
              {index !== links.length - 1 && <span> - </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

        {/* Third Column */}
        <div className="col-md-4">
          <div>
            <p style={{color:'white'}} >Copyright © 2024 Dating Demo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
      
      </>

  );
}

export default AutoLayoutExample;
