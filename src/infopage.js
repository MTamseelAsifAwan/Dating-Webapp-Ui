import React, { useState } from 'react';
import { Tabs, Tab, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { FaFileImage } from 'react-icons/fa'; // Import the picture icon
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Footer from './Footer';
import BackgroundRings from './BackgroundRings';


function FillExample() {
    const links = ["About Us", "Terms", "Privacy Policy", "Contact", "FAQs", "Refund"];

    const [selectedTab, setSelectedTab] = useState('home');
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        height: '',
        country: '',
        birthday: '',
        hairColor: '',
        gender: ''
    });

    const handleTabSelect = (tabKey) => {
        // Disable tab change if the tab is not enabled
        if ((tabKey === 'profile' || tabKey === 'longer-tab') && !selectedFile) return;

        setSelectedTab(tabKey);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        // You can perform additional actions with the selected file here
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate(); // Initialize the navigate function

    const handleNextClick = () => {
        if (selectedTab === 'profile') {
            setSelectedTab('longer-tab');
        } else if (selectedTab === 'longer-tab') {
            // Navigate to AutoLayoutExample page
            navigate('/Home');
        }
    };

    return (
        <><div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
           
            <Card style={{ width: '500px', backgroundColor: '#BD39B2', color: 'white' }}>
           
                <Card.Header>
                    <Tabs
                        activeKey={selectedTab}
                        onSelect={handleTabSelect}
                        id="image-upload-tabs"
                        fill
                        style={{ backgroundColor: 'purple' }}
                    >
                        <Tab eventKey="home" title={<div>
                            <AccountCircleIcon style={{ marginRight: '5px', fontSize: '24px', color: selectedTab === 'home' ? 'red' : 'white' }} />
                            Avatar
                        </div>}>
                        <BackgroundRings/>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <PhotoCameraIcon style={{ fontSize: 190, color: 'white' }} />
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ color: 'white' }} />
                                {selectedFile && (
                                    <div style={{ color: 'white', marginTop: '10px' }}>
                                        Selected file: {selectedFile.name}
                                        {/* Display additional information about the selected file */}
                                    </div>
                                )}
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="profile" title={<div style={{ color: !selectedFile ? 'gray' : selectedTab === 'profile' ? 'red' : 'white' }}>
                            <InfoIcon style={{ marginRight: '5px', fontSize: '24px', color: 'inherit' }} />
                            Info
                        </div>} disabled={!selectedFile}>
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formHeight">
                                            <Form.Label>Height</Form.Label>
                                            <select
                                                name="height"
                                                value={formData.height}
                                                onChange={handleFormChange}
                                                className="form-select" // Custom class to apply bootstrap styling
                                                style={{ color: 'black' }} // Custom style for text color
                                            >
                                                <option value="">Select Height</option>
                                                <option value="121">4 feet</option>
                                                <option value="132">4 feet 4 inches</option>
                                                <option value="142">4 feet 8 inches</option>
                                                {/* Include more options for various heights */}
                                            </select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formCountry">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Select name="country" value={formData.country} onChange={handleFormChange}>
                                                <option value="">Select Country</option>
                                                <option value="USA">USA</option>
                                                <option value="Canada">Canada</option>
                                                <option value="UK">UK</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formBirthday">
                                            <Form.Label>Birthday</Form.Label>
                                            <DatePicker onChange={(date, dateString) => setFormData({ ...formData, birthday: dateString })} style={{ width: '100%', color: 'black' }} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formHairColor">
                                            <Form.Label>Hair Color</Form.Label>
                                            <Form.Select name="hairColor" value={formData.hairColor} onChange={handleFormChange}>
                                                <option value="">Select Hair Color</option>
                                                <option value="Blonde">Blonde</option>
                                                <option value="Brunette">Brunette</option>
                                                <option value="Black">Black</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Select name="gender" value={formData.gender} onChange={handleFormChange}>
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="longer-tab" title={<div style={{ color: !selectedFile ? 'gray' : selectedTab === 'longer-tab' ? 'red' : 'white' }}>
                            <DoneIcon style={{ marginRight: '5px', fontSize: '24px', color: 'green' }} />
                            Finish
                        </div>} disabled={!selectedFile}>
                            <Card.Body>
                                <div style={{ textAlign: 'center', fontSize: '24px', color: 'white' }}>
                                    <DoneIcon style={{ fontSize: '48px', marginBottom: '10px', color: 'green' }} />
                                    Congratulations!
                                </div>
                                <p style={{ color: 'white', textAlign: 'center' }}>
                                    You have successfully completed the form. Please wait...
                                </p>
                            </Card.Body>
                        </Tab>
                    </Tabs>
                </Card.Header>
                <Card.Footer className="text-end">
                    {(selectedTab === 'profile' || selectedTab === 'longer-tab') && selectedFile && (
                        <Button
                            onClick={handleNextClick}
                            style={{
                                backgroundColor: '#6A0DAD', // Adjust the color code as needed
                                borderColor: '#6A0DAD', // Adjust the color code as needed
                                color: 'white',
                                ':hover': {
                                    backgroundColor: '#4C0572', // Adjust the color code as needed
                                    borderColor: '#4C0572' // Adjust the color code as needed
                                }
                            }}
                        >
                            Next
                        </Button>
                    )}
                </Card.Footer>
            </Card>
            <div style={{marginTop:'140px'}}>
            <Footer links={links}  /></div>
        </div> 
        </>
    );
}

export default FillExample;
