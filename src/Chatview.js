import React from 'react';
import { Container, Row, Col, Card, Nav, Stack, Badge, Button, Dropdown  } from 'react-bootstrap';
import { FaUserCircle, FaFilter, FaHeart, FaTimes,FaFacebook, FaTree,FaTwitter, FaFingerprint, FaInstagram,FaGlobe,FaFemale  ,FaGift, FaEllipsisV, FaBan,FaLinkedin, FaYoutube  } from 'react-icons/fa'; // Import FontAwesome icon for the profile icon
import logo2 from './imges/pexels-mikhail-nilov-6530545.jpg'
import { FiMail } from 'react-icons/fi'; // Import Feather Icons for mail icons
import Navbar2 from './Navbar';
import girl from './imges/girl.jpeg'

function Chatview() {
    const links = ["About Us", "Terms", "Privacy Policy", "Contact", "FAQs", "Refund"];

    const handleBlockUser = () => {
        // Handle blocking user action
    };
    const handleClick = (url) => {
        window.open(url, '_blank'); // Open the social media link in a new tab
    };
    return (
        <div>
            <Navbar2/>
        <div className="container-fluid" style={{ overflowY: 'auto', overflowX: 'auto', overflowX: 'hidden', height: '85vh' }}>
            <div className="row">
                <div className="col-md-4">
                    {/* Content for col-md-4 */}
                    <div style={{ border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px' }}>
              <Stack gap={3}>
              <div className="p-2" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={girl} alt="Profile" style={{ width: '100px', borderRadius: '70%' }} /> {/* Replaced icon with img */}
            <div style={{ color: 'white', flex: '1', marginLeft: '10px' }}>
                <div>John Doe</div>
                <div>Popularity: Low</div>
            </div>
            <div style={{ display: 'flex' }}>
                <Button style={{ color: 'blue', border: '1px solid blue', borderRadius: '20px', padding: '5px', display: 'inline-block', background: 'transparent' }}>
                    <FaGift /> {/* Gift clickable icon */}
                </Button>
                <Dropdown style={{ marginLeft: '5px' }}>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: 'purple' }}>
                        <FaEllipsisV /> {/* Three dots icon */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleBlockUser}>
                            <FaBan /> Block {/* Block button with icon */}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
                <div className="p-2">
                  <Badge bg="primary">Visitors: 100</Badge>
                  <Badge bg="success">Likes: 50</Badge>
                  <Badge bg="info">Friends: 20</Badge>
                </div>
                <div>
                  <Nav variant="tabs" defaultActiveKey="/find-matches" className="flex-column">
                   
                  <h3 style={{color:'white'}}>Interests</h3>
                    <div style={{ border: '1px solid purple', borderRadius: '20px' }}>
                      <Nav.Item>
                        <Nav.Link href="/people-i-like" style={{ color: 'white' }}>asa asd d d d dsd <br></br>e dskad </Nav.Link>
                      </Nav.Item>
                    </div>
                    <br>
                    </br>
                    <div style={{ border: '1px solid purple', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <Col md={2} onClick={() => handleClick('https://www.facebook.com')}>
                <FaFacebook size={30} style={{ cursor: 'pointer', color: '#3b5998' }} /> {/* Original Facebook color */}
            </Col>
            <Col md={2} onClick={() => handleClick('https://twitter.com')}>
                <FaTwitter size={30} style={{ cursor: 'pointer', color: '#1da1f2' }} /> {/* Original Twitter color */}
            </Col>
            <Col md={2} onClick={() => handleClick('https://www.instagram.com')}>
                <FaInstagram size={30} style={{ cursor: 'pointer', color: '#c13584' }} /> {/* Original Instagram color */}
            </Col>
            <Col md={2} onClick={() => handleClick('https://www.linkedin.com')}>
                <FaLinkedin size={30} style={{ cursor: 'pointer', color: '#0077b5' }} /> {/* Original LinkedIn color */}
            </Col>
            <Col md={2} onClick={() => handleClick('https://www.youtube.com')}>
                <FaYoutube size={30} style={{ cursor: 'pointer', color: '#ff0000' }} /> {/* Original YouTube color */}
            </Col>
        </div>
                  
                  </Nav>
                </div>
              </Stack>
            </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Content for first col-md-6 */}
                        
                            <div className="card-container">
                  <Card style={{ border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '350px' }}>
                    <Card.Img variant="top" src={logo2} style={{ maxHeight: '320px' }} />
                  </Card>
                </div>
                        </div>
                        <div className="col-md-6" style={{ margin: '70px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                            {/* Content for second col-md-6 */}
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
                <div style={{ position: 'absolute', top: '1x', left: '74px', width: '100%', zIndex: '1' }}>
                  <Button variant="light" style={{ marginRight: '20px' }}>
                    <FaHeart color="purple" /> Like
                  </Button>
                  <Button variant="light">
                    <FaTimes color="purple" /> Dislike
                  </Button>
                </div>
                        </div>
                    </div>

                <h2 style={{color:'purple', margin:'20px'}}>Profile Info</h2>
                    <div className="row">
                        <div className="col-md-6" style={{ margin: '10px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                        <Row>
                        <Col md={7} className="purple-text">
                    <p style={{color:'#CC42BD'}}>Basic</p>
                  </Col>
                  <Col md={4}>
                    <FaUserCircle size={20} style={{color:'#CC42BD'}} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Gender</h7>
            
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Female</h7>
             
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Preferred Language</h7>
                   
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>English</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" >Relationship status</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Single</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Work status</h7>
                  
                  </Col><Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>I'm working</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Education Level</h7>
                  
                  </Col>
                  <Col md={6} >
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Colledge</h7>
                  
                  </Col>
                </Row>
                        </div>
                        <div className="col-md-6">
                        <div className="col-md-6" style={{ margin: '10px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                        <Row>
                        <Col md={7} className="purple-text">
                    <p style={{color:'#CC42BD'}}>Looks</p>
                  </Col>
                  <Col md={4}>
                    <FaFemale  size={20} style={{color:'#CC42BD'}} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Ethnicity</h7>
            
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Middle Eastern

</h7>
             
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Body type</h7>
                   
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Curvy</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" > Height</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>141cm</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Hair Color

</h7>
                  
                  </Col><Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Black</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">Education Level</h7>
                  
                  </Col>
                  <Col md={6} >
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Colledge</h7>
                  
                  </Col>
                </Row>
                        </div>   
                                            
                                             </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6" style={{ margin: '2px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                        <Row>
                        <Col md={7} className="purple-text">
                    <p style={{color:'#CC42BD'}}>Personality</p>
                  </Col>
                  <Col md={4}>
                    < FaFingerprint  size={20} style={{color:'#CC42BD'}} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Character</h7>
            
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Lively

</h7>
             
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Children</h7>
                   
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Someday, maybe</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" > Friends</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Many friends</h7>
                  
                  </Col>
                  
                
                </Row>
                        </div>
                        <div className="col-md-6" style={{ margin: '2px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                        <Row>
                        <Col md={7} className="purple-text">
                    <p style={{color:'#CC42BD'}}>Lifestyle</p>
                  </Col>
                  <Col md={4}>
                    < FaTree  size={20} style={{color:'#CC42BD'}} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">I live with

</h7>
            
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Friends

</h7>
             
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Car</h7>
                   
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>My own car

</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" > Religion</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Muslim</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" >Smoke</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>I smoke</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" >Drink</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>I drink sometimes

</h7>
                  
                  </Col>
                  
                
                </Row>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6" style={{ margin: '70px 5px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '20px', maxWidth: '380px', maxHeight: '390px', position: 'relative' }}>
                        <Row>
                        <Col md={7} className="purple-text">
                    <p style={{color:'#CC42BD'}}>Favourites</p>
                  </Col>
                  <Col md={4}>
                    <FaHeart   size={20} style={{color:'#CC42BD'}} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Music Genre</h7>
            
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}> pop

</h7>
             
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h7 className="white-text">Dish</h7>
                   
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>meat</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" > Song</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>song</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">City

</h7>
                  
                  </Col><Col md={6}>
                    <h7 className="white-text" style={{color:'#CC42BD'}}>Patna

</h7>
                  
                  </Col>
                  <Col md={6}>
                    <h7 className="white-text">TV Show

</h7>
                  
                  </Col>
                  <Col md={6} >
                    <h7 className="white-text" style={{color:'#CC42BD'}}>tv</h7>
                  
                  </Col>
                </Row>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
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
        </div>
        
    );
}

export default Chatview;
