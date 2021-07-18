import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, FormGroup, Button, InputGroup, Select, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Jumbotron, Container, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import icon1 from './images/Icons/info2.png'
import icon3 from './images/Icons/personal info 1.png'
import icon4 from './images/Icons/info 1.png'
import "react-datepicker/dist/react-datepicker.css";


const HouseTourAppointment = () => {
    const [startDate, setStartDate] = useState('');
    const [firstName1, setFirstName1] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [firstName2, setFirstName2] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [service, setService] = useState('');
   
    
    const valadate = () => {
        const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phoneNumberTest = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const cardTest = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
        const cvvTest = /^(\d{3})$/;
        

        if (firstName1 == ''){
            setShow1(true);
            
        } else {
            setShow1(false);
        }
        if (lastName1 == ''){
            setShow2(true);
        }else{
            setShow2(false);
        }
        if ((emailTest.test(email)) == false){
            setShow3(true);
        }else{
            setShow3(false);
        }
        if ((phoneNumberTest.test(phoneNumber)) == false){
            setShow4(true);
        }else {
            setShow4(false);
        }
        if (city == ''){
            setShow5(true);
        }else{
            setShow5(false);
        }
        if (province == ''){
            setShow6(true);
        }else{
            setShow6(false);
        }
        if (country == ''){
            setShow7(true);
        }else{
            setShow7(false);
        }
        if (postalCode == ''){
            setShow8(true);
        }else{
            setShow8(false);
        }
        if (firstName2 == ''){
            setShow9(true);
        }else{
            setShow9(false);
        }
        if (lastName2 == ''){
            setShow10(true);
        }else{
            setShow10(false);
        }
    
        if ((cardTest.test(cardNumber)) == false){
            setShow11(true);
        }else {
            setShow11(false);
        }
        if (expiry == ''){
            setShow12(true);
        }else{
            setShow12(false);
        }
        if ((cvvTest.test(cvv)) == false){
            setShow13(true);
        }else {
            setShow13(false);
        }
        if (startDate == ''){
            setShow14(true);
        }else{
            setShow14(false);
        }
       
    };
    
    const valadateCheck = () => {
        valadate();
        if ((show1 == true) || (show2 == true) ||(show3 == true) || (show4 == true) ||(show5 == true) ||(show6 == true) ||(show7 == true) ||(show8 == true) ||(show14 == true)){
            setShow15(false);
        }
        else{
            setShow15(true);
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          We ask for this information to verify that it is you at the appointment
        </Tooltip>
      );
    
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    
    
   
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };
   

    return (  
        <div className="RenovationBooking">
            <div className="bufferDivHouseTour"></div>
            <h1 className="renovationConsultationHeader">House Tour Appointment</h1>
            <div className="personalInfoSection">
                <h1 className="formHeader"><br/><img src={icon3} className="iconHead" alt="Header Image" ></img>Personal Information  
                <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
                <img src={icon1} className="iconSub" alt="Header Image" ></img>
                </OverlayTrigger>
                </h1>
                <Form>
            
                    <Row className="align-items-center">
                        <Col sm={5} className="my-1">
                        <InputGroup>
                            <InputGroup.Text>First Name</InputGroup.Text>
                            <FormControl id="inlineFormInputGroupfirstname" type = 'text' placeholder="John" value={firstName1} onChange={(e) =>setFirstName1(e.target.value)}/>
                        </InputGroup>
                        <Alert show={show1} variant="danger" className="Alert">
                                <p>
                                Please Enter Your First Name!
                                </p>
                            </Alert>
                        </Col>
                        <Col sm={5} className="my-1">
                        
                        <InputGroup>
                            <InputGroup.Text>Last Name</InputGroup.Text>
                            <FormControl id="inlineFormInputGrouplastName" type ='text' placeholder="Doe" value={lastName1} onChange={(e) => setLastName1(e.target.value)} />
                        </InputGroup>
                        <Alert show={show2} variant="danger" className="Alert">
                                <p>
                                Please Enter Your Last Name!
                                </p>
                            </Alert>
                        </Col>
                        
                    </Row>
                    <Row className="align-items-center">
                    <Col sm={5} className="my-1">
                        
                    <InputGroup>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="johndoe@gmail.com" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </InputGroup>
                    <Alert show={show3} variant="danger" className="Alert">
                                <p>
                                Please Enter An Valid Email Address!
                                </p>
                            </Alert>
                    </Col>
                </Row>
                <Row className="align-items-center">
                <Col sm={5} className="my-1">
                    
                    <InputGroup>
                        <InputGroup.Text>Phone Number</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="123-456-7823" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </InputGroup>
                    <Alert show={show4} variant="danger" className="Alert">
                                <p>
                                Please Enter A Valid Phone Number!
                                </p>
                            </Alert>
                    </Col>
                </Row>
                <Row className="align-items-center">
                <Col sm={3} className="my-1">
                    
                    <InputGroup>
                        <InputGroup.Text>City</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="Barrie" value={city} onChange={(e) => setCity(e.target.value)} />
                    </InputGroup>
                    <Alert show={show5} variant="danger" className="Alert">
                                <p>
                                Please Enter City!
                                </p>
                            </Alert>
                </Col>
                <Col sm={3} className="my-1">
                    
                    <InputGroup>
                        <InputGroup.Text>Province</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="Ontario" value={province} onChange={(e) => setProvince(e.target.value)} />
                    </InputGroup>
                    <Alert show={show6} variant="danger" className="Alert">
                                <p>
                                Please Enter A Province!
                                </p>
                            </Alert>
                </Col>
                <Col sm={2} className="my-1">
                    
                    <InputGroup>
                        <InputGroup.Text>Country</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="Canada" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </InputGroup>
                    <Alert show={show7} variant="danger" className="Alert">
                                <p>
                                Please Enter A Country!
                                </p>
                            </Alert>
                </Col>
                <Col sm={2} className="my-1">
                    
                    <InputGroup>
                        <InputGroup.Text>Postal Code/ Zip</InputGroup.Text>
                        <FormControl id="inlineFormInputGrouplastName" placeholder="L9O 0A4" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </InputGroup>
                    <Alert show={show8} variant="danger" className="Alert">
                                <p>
                                Please Enter A Postal Code!
                                </p>
                            </Alert>
                </Col>
                </Row>
                
                
            </Form>

    

            <h1 className="formHeader"><br/><img src={icon4} className="iconHead" alt="Header Image" ></img>Consultation Information</h1>
            <Form>
            <Row className="align-items-center">
                    <Col sm={5} className="my-1">
                    
                        <InputGroup>
                                <InputGroup.Text>Select a Service</InputGroup.Text>
                                <Form.Control
                        as="select">
                        <option value="bathroom">Bathroom</option>
                        <option value="basement">Basement</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="livingRoom">Living Room</option>
                        onChange={(e) => setService(e.target.value)}
                        </Form.Control>
                    </InputGroup>
                
                </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={5} className="my-1">
                    
                    <InputGroup>
                                <InputGroup.Text>Consultation Date</InputGroup.Text>
                                <DatePicker
                                showTimeSelect
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={new Date()}
                                timeClassName={handleColor}
                               
                                />
                    </InputGroup>
                    <Alert show={show14} variant="danger" className="Alert">
                                <p>
                                Please Select A Date!
                                </p>
                            </Alert>
                </Col>
                </Row>
            </Form>
            <Button type="submit" onClick={(e) =>valadateCheck()}>Submit</Button>
            <Alert show={show15} variant="success" className="Alert">
                                <p>
                                Your Consultation has been booked.
                                </p>
                            </Alert>
            </div>
        </div>
    );
}
 
export default HouseTourAppointment;