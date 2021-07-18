import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerimage from './customHouse_headerImage.jpg'
import BathroomRenovation1 from './images/Basement/Basement1.jpg'
import BathroomRenovation2 from './images/Basement/Basement2.jpg'
import BathroomRenovation3 from './images/Basement/Basement3.jpg'
import BathroomRenovation4 from './images/Basement/Basement4.jpg'
import BathroomRenovation5 from './images/Basement/Basement5.jpg'
import BathroomRenovation6 from './images/Basement/Basement6.jpg'
import BathroomRenovation7 from './images/Basement/Basement7.jpg'
import BathroomRenovation8 from './images/Basement/Basement3.jpg'
import { Link } from 'react-router-dom';
const BasementRenovationPage = () => {
    return (  
        <div className="bathroomRenovationPage">
            <h1 className="bathroomRenovationPhrase">Basement Renovations</h1>
            <Link to='/RenovationBooking'><Button variant="danger" className="renovationBookingButton">Book Your Renovation Consultation</Button></Link>
                <Jumbotron fluid className="bathroomRenovationIntroJumbo">
                    <img src={BathroomRenovation3} 
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
 
export default BasementRenovationPage;