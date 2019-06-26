import React, { Component } from 'react';
import { Form ,Button} from 'react-bootstrap';

import bgContact from "../assets/bgContact.jpg";
import bgContactMD from "../assets/bgContactMD.jpg";
import bgContactSM from "../assets/bgContactSM.jpg";

import ReCAPTCHA from "react-google-recaptcha";

import * as firebase from 'firebase'

export default class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
         width: window.innerWidth,
         ResponsiveFormSize: "70%",
         bgImage: bgContact,

         isMobile: false,
         isHuman: false ,
         isSend: false,
         
         name: "",
         email: "",
         message: ""

         
    }

    this.textInput = React.createRef();

    
}

updateDimensions = () => {
  // Full screen 
  if(window.innerWidth > 800){
      this.setState({ResponsiveFormSize: '70%',bgImage: bgContact,isMobile: false,isHuman: false})
  }
  // Half screen
  if(window.innerWidth < 800 && window.innerWidth > 575){
      this.setState({ResponsiveFormSize: '90%',bgImage: bgContactMD,isMobile: false,isHuman: false})
  }
  // Mobile
  if(window.innerWidth <= 575){
      this.setState({ResponsiveFormSize: '100%',bgImage: bgContactSM, isMobile: true,isHuman: true})
      
  }
  this.setState({width: window.innerWidth});
}
  componentWillMount() {
      this.updateDimensions();
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    document.body.style.overflow = 'hidden';
    
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
    window.removeEventListener("resize", this.updateDimensions);

  }

  onSendClick = () => {
    var data = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message,
      time: Date.now()
    }


    firebase.database().ref('contact/').push(data);
    this.setState({ isSend: true })
  }

  onChange = () => {
    this.setState({isHuman: true})
  }

  render() {
    //div styles
    const styles = {
      mainDiv: {
        width: "100%", 
        paddingLeft: '10%', paddingRight: '10%', paddingBottom: '10%', paddingTop: '4%', 

 
        height: window.innerHeight, 
        backgroundImage: `url(${this.state.bgImage})`, 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        
      }
    }
    const mobileVerification = (<ReCAPTCHA
      sitekey="6LfqW6YUAAAAAF8BptpitM8zG2dG1a_3NSIx4Wbp"
      onChange={this.onChange}
      size="invisible"
      />)

    const normalVerification = (<ReCAPTCHA
      sitekey="6LdzWqYUAAAAAOGUDpmr-nFXj6treE3HimY4xyUv"
      onChange={this.onChange}
      />)
    
    if(this.state.isSend){
      return(      <div style={styles.mainDiv} >
        <div style={{width: "60%", textAlign: this.state.isMobile ? "left" : "center"}}>

        <h2>Your message has been sent and I will reach out as soon as I can!</h2>
        </div>
      </div> )
      
    }else{
      return (
      <div style={styles.mainDiv} >
         <Form> 

         <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Your name</Form.Label>
          <Form.Control 
          onChange = {(event) => this.setState({name: event.target.value })}
            
           placeholder="Rick Sanchez"  
           style={{width: this.state.ResponsiveFormSize}}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Your email address</Form.Label>
          <Form.Control 
          onChange = {(event) => this.setState({email: event.target.value })}
            type="email" 
           placeholder="example@email.com"  
           style={{width: this.state.ResponsiveFormSize}}/>
        </Form.Group>
        
        <Form.Group controlId="ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control 
          onChange = {(event) => this.setState({message: event.target.value })}
          as="textarea" 
          rows="3" 
          placeholder="Aa" 
          style={{width: this.state.ResponsiveFormSize}}/>
        </Form.Group>
          </Form> 

          

          {this.state.isMobile? mobileVerification : normalVerification}

        
          <div style={{paddingTop:'2%'}}>
            <Button 
            onClick={this.onSendClick} 
            bsStyle="info"
            disabled={!this.state.isHuman} >
              Send</Button>
          </div>
      </div >
    )
    }
  }
}


