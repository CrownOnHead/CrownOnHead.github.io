import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerimage from './customHouse_headerImage.jpg'
import customHouse1Image from './images/CustomHouse1.jpg'
import customHouse2Image from './images/CustomHouse2.jpg'
import customHouse3Image from './images/CustomHouse3.jpg'
import customHouse4mage from './images/CustomHouse4.png'
import{ Link } from 'react-router-dom';
const CustomHouses = () => {

    
    return ( 
        <div className="customHousePage">
            <h1 className="customHousePhrase">Our Custom Houses</h1>
                <Jumbotron fluid className="customHousesIntroJumbo">
                    <img src={headerimage} 
                    alt="Header Image" 
                    width="100%"
                    height="700"
                    ></img>
                    
                </Jumbotron>

                <div className="customHousesTable">
                    <Jumbotron fluid className="customHousesTableJumbo">
                        <Container fluid className="customHouseTable">
                        <Row className="customHouseTableRow">
                            <Col sm className="customHouseTablePictures">
                               <Link  to="/CustomHouseView">
                                <img src={customHouse1Image} className="customHouse1" alt="Header Image">
                                </img>
                                </Link>
                            </Col>
                            <Col sm className="customHouseTablePictures">
                           
                            <img src={customHouse2Image} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="customHouseTablePictures">
                            <img src={customHouse3Image} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm className="customHouseTablePictures">
                            <img src={customHouse4mage} className="img1"
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
 
export default CustomHouses;