import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';
import { FaBolt, FaBell ,FaUser,FaHeart,FaCog,FaCreditCard,FaSignOutAlt} from 'react-icons/fa'; // Import FontAwesome icons

function Navbar1() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'black' }}>
        <Container className="d-flex justify-content-between align-items-center"> {/* Utilizing flexbox utility classes */}
          <Navbar.Brand href="#home" style={{ color: 'white' }}>Your Logo</Navbar.Brand>

          <div className="d-flex"> {/* Utilizing flexbox utility classes */}
            <Nav className="me-auto">
              <Nav.Link href="#notifications" className="text-white">
                <FaBell size={20} />
                <Badge bg="danger" className="ml-1">9+</Badge>
              </Nav.Link>
              <Nav.Link href="#thunder" className="text-warning">
                <FaBolt size={20} />
              </Nav.Link>
              <Nav.Link href="#credits" className="text-info" >
                <span style={{color:'purple'}}>Credits</span>  <Badge >Balance: <span style={{color:'purple'}}>$</span>100</Badge>
              </Nav.Link>
            </Nav>

            <NavDropdown title={<span style={{ color: 'white' }}><FaUser /> Profile</span>} id="profile-dropdown">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 1)', transition: 'background-color 0.3s ease', padding: '20px' }}>
                <NavDropdown.Item href="#action/3.1" style={{color:'purple'}}><FaUser /> Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{color:'purple'}}><FaHeart /> Matches</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1" style={{color:'purple'}}><FaHeart /> Likes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{color:'purple'}}><FaHeart /> People I like</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{color:'purple'}}><FaHeart /> People I dislike</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" style={{color:'purple'}}><FaCog /> Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{color:'purple'}}><FaCreditCard /> Transaction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3" style={{color:'purple'}}><FaSignOutAlt /> Logout</NavDropdown.Item>
              </div>
            </NavDropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
