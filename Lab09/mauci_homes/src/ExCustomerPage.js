import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, FormGroup, Button, InputGroup, Select, Alert } from 'react-bootstrap';
import { Jumbotron, Container, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import icon3 from './images/Icons/personal info 1.png'
import icon4 from './images/Icons/question 1.png'
import "react-datepicker/dist/react-datepicker.css";
const ExCustomerPage = () => {
    const [firstName1, setFirstName1] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [email, setEmail] = useState('');
    const [inputFeld, setInputField] = useState('');
    const [emailComplete, setEmailComplete] = useState(false);
    const [fnameComplete, setfname] = useState(false);
    const [lnameComplete, setlname] = useState(false);
    const [inputComplete, setInput] = useState(false);
    const [question, setQuestion] = useState('');
    const [compleate, setcompleate] = useState(false);

    const emailvaladate = (e) => {
        const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((emailTest.test(e)) == false){
            setEmail('');
            setEmailComplete(false);
            
        }else{
            
            setEmailComplete(true);
            setEmail(e);
        }
    };
    const firstnamevaladate = (e) => {
       
        if ( e == ''){
            setfname('');
            setfname(false);
            
        }else{
            
            setfname(true);
            setFirstName1(e);
        }
    };
    const lastnamevaladate = (e) => {
       
        if ( e == ''){
            setlname(false);
            setlname('');
        }else{
            setlname(true);
            setLastName1(e);
        }
    };
    const inputvaladate = (e) => {
       
        if ( e == ''){
            setInput('')
            setInput(false);
            
        }else{
            setInput(true);
            setQuestion(e);
        }
    };

    const valadate = () => {
       
        if ((emailComplete == true) && (fnameComplete == true) && (lnameComplete == true) && (inputComplete == true)){
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(true);
            
        }else{
            setShow5(false);
            if (emailComplete == false){
                setShow3(true);
            }else{
                setShow3(false);
            }
            if (fnameComplete == false){
                setShow1(true);
            }else{
                setShow1(false);
            }
            if (lnameComplete == false){
                setShow2(true);
            }else{
                setShow2(false);
            }
            if (inputComplete == false){
                setShow4(true);
            }else{
                setShow4(false);
            }
        }
    };
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    return (  
        <div className="teamTalkPage">
        <div className="bufferDiv2"></div>
        <h1 className="renovationConsultationHeader">Contact an Ex Customer</h1>
        <div className="personalInfoSection">
            <h1 className="formHeader"><br/><img src={icon3} className="iconHead" alt="Header Image" ></img>Personal Information</h1>
            <Form>
        
                <Row className="align-items-center">
                    <Col sm={5} className="my-1">
                    <InputGroup>
                        <InputGroup.Text>First Name</InputGroup.Text>
                        <FormControl id="inlineFormInputGroupfirstname" type = 'text' placeholder="John" value={firstName1} onChange={(e) =>firstnamevaladate(e.target.value)}/>
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
                        <FormControl id="inlineFormInputGrouplastName" type ='text' placeholder="Doe" value={lastName1} onChange={(e) => lastnamevaladate(e.target.value)} />
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
                <FormControl id="inlineFormInputGrouplastName" placeholder="johndoe@gmail.com" type="text" value={email} onChange={(e) => emailvaladate(e.target.value)} />
            </InputGroup>
            <Alert show={show3} variant="danger" className="Alert">
                        <p>
                        Please Enter An Valid Email Address!
                        </p>
                    </Alert>
            </Col>
        </Row>

        <Row className="align-items-center">
                    
                    
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><br/><h1 className="formHeader"><br/><img src={icon4} className="iconHead" alt="Header Image" ></img>Your Question</h1></Form.Label>
                    <Form.Control as="textarea" rows={3} value={question} onChange={(e) => inputvaladate(e.target.value)} />
                </Form.Group>
                    <Alert show={show4} variant="danger" className="Alert">
                            <p>
                            Please Enter Your Question!
                            </p>
                        </Alert>
             
                    
                </Row>
        </Form>
        <Button type="submit" onClick={(e) =>valadate()}>Send</Button>
    <Alert show={show5} variant="success" className="Alert">
                        <p>
                        Your message has been sent.
                        </p>
                    </Alert>
    </div>
</div>

        
    );
}
 
export default ExCustomerPage;