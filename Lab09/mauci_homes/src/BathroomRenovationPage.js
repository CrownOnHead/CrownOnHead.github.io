import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerimage from './customHouse_headerImage.jpg'
import BathroomRenovation1 from './images/BathroomRenovation1.jpg'
import BathroomRenovation2 from './images/BathroomRenovation2.jpg'
import BathroomRenovation3 from './images/BathroomRenovation3.jpg'
import BathroomRenovation4 from './images/BathroomRenovation4.jpg'
import BathroomRenovation5 from './images/BathroomRenovation5.jpg'
import BathroomRenovation6 from './images/BathroomRenovation6.jpg'
import BathroomRenovation7 from './images/BathroomRenovation7.jpg'
import BathroomRenovation8 from './images/BathroomRenovation8.jpg'
import { Link } from 'react-router-dom';

const BathroomRenovationPage = () => {
    return (  
        <div className="bathroomRenovationPage">
            <h1 className="bathroomRenovationPhrase">Bathroom Renovations</h1>
            <Link to='/RenovationBooking'><Button variant="danger" className="renovationBookingButton">Book Your Renovation Consultation</Button></Link>
            
                <Jumbotron fluid className="bathroomRenovationIntroJumbo">
                    <img src={BathroomRenovation4} 
                    alt="Header Image" 
                    width="100%"
                    height="700"
                    ></img>
                    
                    
                </Jumbotron>

                <div className="bathroomRenovationTable">
                    <Jumbotron fluid className="bathroomRenovationTableJumbo">
                        <Container fluid className="bathroomRenovationTable">
                        <Row className="bathroomRenovationTableRow">
                            <Col sm className="bathroomRenovationTablePictures">
                                <img src={BathroomRenovation1} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation2} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation3} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation4} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                        </Row>

                        <Row className="bathroomRenovationTableRow">
                            <Col sm className="bathroomRenovationTablePictures">
                                <img src={BathroomRenovation5} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation6} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation7} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="bathroomRenovationTablePictures">
                            <img src={BathroomRenovation8} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                        </Row>
                        </Container>
                        
                    </Jumbotron>
                </div>
    </div>
    );
}
 
export default BathroomRenovationPage;