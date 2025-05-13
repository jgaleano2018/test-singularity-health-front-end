import React, { useState } from 'react'
import { ADD_USER, GET_TYPE_DOCUMENT, GET_COUNTRY } from '../queries';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { toDateStr } from '../Convert';

import 'bootstrap/dist/css/bootstrap.min.css';

function CreateUser() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isMilitary, setIsMilitary] = useState(false);
    const [timeCreate, setTimeCreate] = useState(new Date());
    const [isTemporal, setIsTemporal] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerified, setEmailVerified] = useState('');
    const [verificationToken, setVerificationToken] = useState('');   
    const [selectedTypeDocuments, setSelectedTypeDocuments] = useState([]);
    const [document, setDocument] = useState('');   
    const [placeExpedition, setPlaceExpedition] = useState('');
    const [dateExpedition, setDateExpedition] = useState(new Date());
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [celPhone, setCelPhone] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');
    const [currentTypeDocument, setCurrentTypeDocument] = useState('');
    const [currentIndex, setCurrentIndex] = useState('');
    const [currentCountry, setCurrentCountry] = useState('');
    const [currentIndexCountry, setCurrentIndexCountry] = useState('');

    const [joiningDate, setJoiningDate] = useState('');

    this.setActiveTypeDocument = this.setActiveTypeDocument.bind(this);
    this.setActiveCountry = this.setActiveCountry.bind(this);

    let history = useNavigate();
    const [ addUser ] = useMutation(ADD_USER,);


    const typeDocuments = useQuery(GET_TYPE_DOCUMENT);
    typeDocuments.refetch();//refetch the query when redirecting


    const countries = useQuery(GET_COUNTRY);
    countries.refetch();//refetch the query when redirecting
    

    const setActiveTypeDocument = (typeDoc, index) => {
      this.setCurrentTypeDocument(typeDoc);
      this.setCurrentIndex(index);
    }

    const setActiveCountry = (country, index) => {
      this.setCurrentCountry(country);
      this.setCurrentIndexCountry(index);
    }

    const handleClickIsMilitary = (value) => {
        this.setIsMilitary(this.isMilitary);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();  // Prevent reload

        let typeDocumentId = this.currentIndex, countryId = this.currentCountry;
       
        let userJson = { "jName": name, "jLastName": lastName, "jIsMilitar": isMilitary, "jTimeCreate": timeCreate, "jIsTemporal": isTemporal, "jUserName": userName, "jPassword": password, "jEmail": email, "jEmailVerified": emailVerified, 
            "jVerificationToken": verificationToken, "jTypeDocumentId": typeDocumentId, "jDocument": document, "jPlaceExpedition": placeExpedition, "jDateExpedition": dateExpedition, "jCountryId": countryId, "jAddress": address,
            "jCity": city, "jPhone": phone, "jCellPhone": celPhone, "jEmergencyName": emergencyName, "jEmergencyPhone": emergencyPhone
        }

        try{
            await addUser({variables:{name: userJson.jName, lastName: userJson.jLastName, isMilitar: userJson.jIsMilitar, timeCreate: userJson.jTimeCreate, isTemporal: userJson.jIsTemporal, userName: userJson.jUserName, password: userJson.jPassword, 
                email: userJson.jEmail, emailVerified: userJson.jEmailVerified, verificationToken: userJson.jVerificationToken, typeDocumentId: userJson.jTypeDocumentId, document: userJson.jDocument, placeExpedition: userJson.jPlaceExpedition, 
                dateExpedition: userJson.jDateExpedition, countryId: userJson.jCountryId, address: userJson.jAddress, city: userJson.jCity, phone: userJson.jPhone, cellPhone: userJson.jCellPhone, emergencyName: userJson.jEmergencyName, 
                emergencyPhone: userJson.jEmergencyPhone 
                }})
            history('/')//redirect to home
        }catch(error){alert(error)}
    }
    return (
        <div >
            <Form className="d-grid gap-2" 
                style={{marginLeft:'25rem', marginRight:'25em'}}>
                <Form.Group className="mb-3">
                <div className="mb-3"> 
                    <label>Personal Information :</label>
                </div>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicTypeDocument">
                 <div className="col-md-6">
                    <h4>Type Document</h4>
                    <ul className="list-group">
                        {this.typeDocuments &&
                        this.typeDocuments.map((typeDocument, index) => (
                            <li
                            className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveTypeDocument(typeDocument, index)}
                            key={index}
                            >
                            {typeDocument.nameTypeDocument}
                            </li>
                        ))}
                    </ul>

                 </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDocument">
                    <Form.Control onChange={e => setDocument(e.target.value)}
                        type="text" placeholder="Enter Document" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={e => setName(e.target.value)}
                        type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Control onChange={e => setLastName(e.target.value)}
                        type="text" placeholder="Enter Last Name" required />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={e => setEmail(e.target.value)}
                        type="text" placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmailVerified">
                    <Form.Control onChange={e => setEmailVerified(e.target.value)}
                        type="text" placeholder="Enter Email Verified" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPlaceExpedition">
                    <Form.Control onChange={e => setPlaceExpedition(e.target.value)}
                        type="text" placeholder="Enter Place Expedition" required />
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicDateExpedition">
                <div className="mb-3"> 
                    <label for="dateExpedition">Date Expedition :</label>
                        <DatePicker value={dateExpedition} 
                        onChange={e => setDateExpedition(toDateStr(e))} />
                </div>
                </Form.Group>
                
                <Form.Group className="mb-3">
                <div className="mb-3"> 
                    <label>Contact Information :</label>
                </div>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicCountries">
                 <div className="col-md-6">
                    <h4>Country</h4>
                    <ul className="list-group">
                        {this.countries &&
                        this.countries.map((country, index) => (
                            <li
                            className={
                                "list-group-item " +
                                (index === currentIndexCountry ? "active" : "")
                            }
                            onClick={() => this.setActiveCountry(country, index)}
                            key={index}
                            >
                            {country.countryCode + ' - ' + country.countryName}
                            </li>
                        ))}
                    </ul>
                 </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control onChange={e => setAddress(e.target.value)}
                        type="text" placeholder="Enter Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Control onChange={e => setCity(e.target.value)}
                        type="text" placeholder="Enter City" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control onChange={e => setPhone(e.target.value)}
                        type="text" placeholder="Enter Phone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCellPhone">
                    <Form.Control onChange={e => setCelPhone(e.target.value)}
                        type="text" placeholder="Enter Cell Phone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmergencyName">
                    <Form.Control onChange={e => setEmergencyName(e.target.value)}
                        type="text" placeholder="Enter Emergency Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmergencyPhone">
                    <Form.Control onChange={e => setEmergencyPhone(e.target.value)}
                        type="text" placeholder="Enter Emergency Phone" required />
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicIsMilitary">
                <div className="mb-3"> 
                    <label>Is Military :</label>
                    <input
                        type="checkbox"
                        checked={this.isMilitary}
                        onClick={this.handleClickIsMilitary}
                    />
                </div>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicIsTemporal">
                <div className="mb-3"> 
                    <label>Is Temporal :</label>
                    <input
                        type="checkbox"
                        checked={this.isTemporal}
                        onClick={this.handleClickIsTemporal}
                    />
                </div>
                </Form.Group>

                <Form.Group className="mb-3">
                <div className="mb-3"> 
                    <label>User Account :</label>
                </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Control onChange={e => setUserName(e.target.value)}
                        type="text" placeholder="Enter User Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={e => setPassword(e.target.value)}
                        type="text" placeholder="Enter Password" required />
                </Form.Group>

                <div>
                    <Link to='/'>
                        <Button variant="info" size="md">
                            Home
                        </Button>
                    </Link>
                    <Button
                        onClick={async(e) => await handelSubmit(e)}
                        variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}
  
export default CreateUser