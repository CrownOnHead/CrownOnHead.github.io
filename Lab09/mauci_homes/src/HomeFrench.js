import { Jumbotron, Container, Button, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerimage from './headerimage.jpg'
import customHouse1Image from './images/CustomHouse1.jpg'
import customHouse2Image from './images/CustomHouse2.jpg'
import customHouse3Image from './images/CustomHouse3.jpg'
import customHouse4mage from './images/CustomHouse4.png'
import Basement3 from './images/Basement/Basement3.jpg'
import BathroomRenovation4 from './images/BathroomRenovation4.jpg'
import Bedroom4 from './images/Bedroom/Bedroom4.jpg'
import Kitchen3 from './images/kitchen/Kitchen3.jpg'
import LivingRoom2 from './images/LivingRoom/LivingRoom2.jpg'
import { Link } from 'react-router-dom';
import icon1 from './images/Icons/custom house 2.png'
import icon2 from './images/Icons/custom house 3.png'
import icon3 from './images/Icons/community 1.png'
const HomeFrench = () => {
    return (  
        <div className="home">
            <div className="introSection">
            <h1 className="introPhrase">Nous Transformons Votre Maison De Rêve En<strong>Réalité</strong></h1>
                <Jumbotron fluid className="introJumbo">
                    <img src={headerimage} 
                    alt="Header Image" 
                    width="100%"
                    height="650"
                    ></img>
                    <Link to='/Home'><Button variant="danger" className="language">Voir En Anglaise</Button></Link>
                    
                </Jumbotron>
            </div>
            <div className="customHouseSection">
                <Jumbotron fluid className="customHouseJumbo">
                <Container fluid className="customHouseTable">
                    <Row>
                        <Col sm={8} className="customHousePictures">
                        <Row className="customHousePicturesTop">
                            <Col sm>
                            <Link  to='/CustomHouses'>
                                <img src={customHouse1Image} className="imgSelect" alt="Header Image">
                                </img>
                                </Link>
                            </Col>
                            <Col sm><Link  to="/CustomHouseView">
                                <img src={customHouse2Image} className="imgSelect" alt="Header Image">
                                </img>
                                </Link></Col>
                            <Col sm><img src={customHouse3Image} className="imgSelect"
                                alt="Header Image" 
                                ></img></Col>
                        </Row>
                        <Row className="customHousePicturesBottom">
                        <Col sm>
                                
                            </Col>
                            <Col sm><Link  to="/CustomHouseView">
                                <img src={customHouse4mage} className="customHouse1" alt="Header Image">
                                </img>
                                </Link></Col>
                            <Col sm></Col>
                        </Row>
                        
                        
                        </Col>
                        <Col sm={4}><h1 className="customHousesBody">Maisons De Douane </h1><img src={icon1} className="icon" alt="Header Image"></img><h2>Nous construisons de belles maisons qui transformeront vos rêves en réalité</h2></Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>

            <div className="renovationSection">
                <Jumbotron fluid className="renovationJumbo">
                <Container fluid className="renovationTable">
                    <Row>
                    <Col sm={4}><h1 className="renovationBody">Rénovations</h1><img src={icon2} className="icon" alt="Header Image"></img><h2>Nous mettons à jour vos anciennes chambres en celles que vous aimez</h2></Col>
                        <Col sm={8} className="renovationPictures">
                        <Row className="renovationPicturesTop">
                            <Col sm>
                                <img src={BathroomRenovation4} className="img1"
                                alt="Header Image" 
                              
                                ></img>
                            </Col>
                           
                            <Col sm><img src={Basement3} className="img1"
                                alt="Header Image" 
                                ></img></Col>
                        </Row>
                        <Row className="renovationPicturesBottom">
                        <Col sm>
                                <img src={Bedroom4} className="img1"
                                alt="Header Image" 
                                ></img>
                            </Col>
                            <Col sm><img src={Kitchen3} className="img1"
                                alt="Header Image" 
                                ></img></Col>
                            <Col sm><img src={LivingRoom2} className="img1"
                                alt="Header Image" 
                                ></img></Col>
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
                        <Row className="ourteam">
                            <Col sm>
                            <Link to='/TeamTalkPage'><Button variant="danger" className="ourteam">Contactez Notre Equipe Maintenant</Button></Link>
                            </Col>
                            <Col sm><Link to='/ExCustomerPage'><Button variant="danger" className="ourteam">Contacter Un Ancien Client Maintenant</Button></Link></Col>
                        
                        </Row>
                        
                        
                        
                        </Col>
                        <Col sm={4}><h1 className="customHousesBody">Communauté</h1><img src={icon3} className="icon" alt="Header Image"></img><h2>Contactez notre équipe</h2></Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>

        </div>

    );
}
 
export default HomeFrench;