import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Badge, Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { FaBolt, FaBell, FaComment, FaUser, FaHeart, FaCog, FaCreditCard, FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icons

function Navbar2() {
  const [showChatModal, setShowChatModal] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true); // Initial online status
  const [allUsersStatus, setAllUsersStatus] = useState(true); // Initial all users status

  const handleChatClick = () => {
    setShowChatModal(true);
  };

  const handleCloseChatModal = () => {
    setShowChatModal(false);
  };

  const handleToggleStatus = () => {
    setOnlineStatus(!onlineStatus);
  };

  const handleToggleStatus2 = () => {
    setAllUsersStatus(!allUsersStatus);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: 'black' }}>
        <Container className="d-flex justify-content-between align-items-center"> {/* Utilizing flexbox utility classes */}
          <Navbar.Brand href="#home" style={{ color: 'white' }}>Your Logo</Navbar.Brand>

          <div className="d-flex"> {/* Utilizing flexbox utility classes */}
            <Nav className="me-auto">
              <Nav.Link href="#chat" className="text-white" onClick={handleChatClick}>
                <FaComment size={20} />
              </Nav.Link>
              <Nav.Link href="#notifications" className="text-white">
                <FaBell size={20} />
                <Badge bg="danger" className="ml-1">9+</Badge>
              </Nav.Link>
              <Nav.Link href="#thunder" className="text-warning">
                <FaBolt size={20} />
              </Nav.Link>
              <Nav.Link href="#credits" className="text-info" >
                <span style={{ color: 'purple' }}>Credits</span>  <Badge >Balance: <span style={{ color: 'purple' }}>$</span>100</Badge>
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

      {/* Chat Modal */}
      <Modal show={showChatModal} onHide={handleCloseChatModal} dialogClassName="custom-modal">
        <Modal.Header closeButton style={{ backgroundColor: 'rgba(128, 0, 128, 0.9)', color: 'white', borderBottom: 'none' }}> {/* Removed border */}
          <Modal.Title>Messenger</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'rgba(0, 0, 0, 1)', color: 'white', height: '500px' }}> {/* Increase height here */}
          <Form.Group controlId="onlineStatusToggle" className="mb-3">
            <h3>Active Status</h3>
            <Form.Check
              type="switch"
              id="onlineSwitch"
              label="Online Status"
              checked={onlineStatus}
              onChange={handleToggleStatus}
              style={{ color: 'purple' }}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="searchField" className="mb-3">
                <Form.Control type="text" placeholder="Search" style={{ borderRadius: '20px' }} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="allUsersToggle" className="mb-3" style={{ marginLeft: '15px' }}>
                <Form.Check
                  type="switch"
                  id="allUsersSwitch"
                  label="Online Users"
                  checked={allUsersStatus}
                  onChange={handleToggleStatus2}
                  style={{ color: 'purple' }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        {/* Add footer or additional buttons if needed */}
      </Modal>
    </>
  );
}

export default Navbar2;
