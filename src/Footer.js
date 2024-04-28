import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer({ links }) {
    return (
        <footer style={{ backgroundColor: 'transparent', color: 'white', textAlign: 'center',  }}>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} md={1}>
                        {/* <FaGlobe style={{ color: 'white' }} />
                        <h7 style={{ color: 'white' }}> Languages  </h7> */}
                        {/* Social media icons */}
                        <FaFacebook style={{ color: 'white' }} />
                        <FaTwitter style={{ color: 'white' }} />
                        <FaInstagram style={{ color: 'white' }} />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="row-md-4">
                            {links.map((link, index) => (
                                <React.Fragment key={index}>
                                    <a href={"#" + link.toLowerCase().replace(/\s+/g, '-')}>{link}</a>
                                    {index !== links.length - 1 && <span> - </span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <p style={{ color: 'white' }}>Copyright © 2024 Dating Demo. All rights reserved.</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;
