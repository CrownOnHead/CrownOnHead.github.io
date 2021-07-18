import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerimage from './customHouse_headerImage.jpg'
import customHouse1Image from './images/CustomHouse1.jpg';

import{ Link } from 'react-router-dom';

const CustomHouseView = () => {
    
    return ( 
        <div className="customHouseViewPage">
            <div className="customHouseSection">
                <Jumbotron fluid className="customHouseViewJumbo">
                <Container fluid className="customHouseViewTable">
                    <Row>
                        <Col sm={7} className="customHouseViewInfromation">
                        <h1>The King</h1>
                        <p className="houseinfo"><br/>This is a large home located Downtown in Port Carling <br/><br/><strong>Price:</strong> $1.4M<br/><strong>Beds:</strong> 4<br/><strong>Baths:</strong> 3</p>
                        <Link to='/HouseTourAppointment'><Button variant="danger" >Book a House Tour</Button></Link>
                            <Row className="customHousePicturesTop">
                            
                        </Row>
                        </Col>
                        <Col sm={5}>
                        <img src={customHouse1Image} className="img1"
                                alt="Header Image" 
                                ></img>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>

            <div className="mapDiv">
            <h1>Location</h1>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.8218870844496!2d-79.57830707074108!3d45.12050854500129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2af58172e2a9c9%3A0x549b641d68da3cb4!2s2%20James%20Bartleman%20Way%2C%20Port%20Carling%2C%20ON%20P0B%201J0!5e0!3m2!1sen!2sca!4v1624151806209!5m2!1sen!2sca" allowfullscreen="" loading="lazy"></iframe>
      
            </div>  
        </div>
    );
}
 
export default CustomHouseView;