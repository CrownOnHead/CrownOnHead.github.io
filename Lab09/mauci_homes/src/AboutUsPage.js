import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerimage from './headerimage.jpg'
import React from "react";
import PropTypes from "prop-types";
const AboutUsPage = () => {
    return ( 
        <div className="aboutUsPage">
        
            <div className="meetTheTeamSection">
                <Jumbotron fluid className="meetTheTeamJumbo">
                <Container fluid className="meetTheTeamTable">
                    <Row>
                        <Col sm={8} className="meetTheTeamVideo">
                        <Row className="customHousePicturesTop">
                        <iframe width="560" height="600" src="https://www.youtube.com/embed/6HkPbqXKjSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                        </Row>
                        
                        
                        
                        </Col>
                        <Col sm={4}><h1 className="customHousesBody">Meet the Team</h1></Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>

            <div className="renovationSection">
                <Jumbotron fluid className="renovationJumbo">
                <Container fluid className="renovationTable">
                    <Row>
                    <Col sm={4}><h1 className="renovationBody">See How We Do Renovations</h1></Col>
                        <Col sm={8} className="renovationPictures">
                        <Row className="renovationPicturesTop">
                        <iframe width="560" height="600" src="https://www.youtube.com/embed/Ewjg-0NKr2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        </Row>
                        
                    
                        </Col>
                       
                    </Row>
                </Container>
                </Jumbotron>
            </div>

            <div className="communitySection">
            <Jumbotron fluid className="communityJumbo">
                <Container fluid className="communityTable">
                    <Row>
                        <Col sm={8} className="communityPictures">
                        <Row className="communityPicturesTop">
                            
                        <iframe width="560" height="600" src="https://www.youtube.com/embed/VFfEoo7pgP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Row>
                        
                        
                        
                        </Col>
                        <Col sm={4}><h1 className="customHousesBody">See How We Build Custom Homes</h1></Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>

        </div>

     );
}
 
export default AboutUsPage;