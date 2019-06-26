import React, { Component } from 'react';
import {Button,OverlayTrigger} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default class Room8 extends Component {
  constructor(props) {
    super(props)

    this.state = {
         width: window.innerWidth,
         ResponsiveTextAlign: 'right',
         
    }
}

updateDimensions = () => {
    // Full screen 
    if(window.innerWidth > 800){
        this.setState({ResponsiveTextAlign: 'left'})
    }
    // Half screen
    if(window.innerWidth < 800 && window.innerWidth > 500){
        this.setState({ResponsiveTextAlign: 'left'})
    }
    // Mobile
    if(window.innerWidth <= 500){
        this.setState({ResponsiveTextAlign: 'center'})
    }
    this.setState({width: window.innerWidth});
}
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount(){
      window.removeEventListener("resize", this.updateDimensions);
  }

  
  render() {

    const renderTooltip = (
      <div
        
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          margin: "8px 5px",
          padding: '10px 10px',
          color: 'white',
          borderRadius: 10,
          
        }}
      >
        Expo app is requried to run the beta
      </div>
    );

    return (
        <div className={this.props.data.title}>
        <div className="container">
          <div className="row">
            
          <div id="icon" className="col-md-6 col-sm-6" >
              <img src={this.props.data.imgURL} style={styles.icon}/>
              
            </div>
            
            <div className="col-md-6 col-sm-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
              <div>
              <Fade top distance={"50px"} duration={2000}>
                <h1 style={{textAlign: this.state.ResponsiveTextAlign}}>Room8</h1>
              </Fade>
              <Fade right distance={"50px"} duration={2000}>
                <h4 style={{textAlign: this.state.ResponsiveTextAlign,color: '#737C84'}}>Android and iOS</h4>
              </Fade>
              <p className="p-projects" style={{textAlign: this.state.ResponsiveTextAlign}}>
                Living with roommates can be hard and frustrating. My team and I realized this and decided to do something about it. Room8 is an mobile app that is currently in its early stages of development. It is a communication platform designed to be used specifically by people in shared living situation. It contatins a set of tools that guides roommates into a better household ecosystem.
              </p>

              </div>

              <Fade delay={1200}>
              <div className="buttonContainer" style={{textAlign:this.state.ResponsiveTextAlign,flexDirection:'row'}}> 
                <a href='http://roomate.us/landing-page/'><Button style={{marginRight:'1%',borderRadius: 20}}>Learn More</Button></a>
                
              <OverlayTrigger
                placement="bottom-start"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <a href='https://expo.io/@room8/Room8'><Button style={{marginLeft:'1%',borderRadius: 20}}>Beta Link</Button></a>
              </OverlayTrigger>
              </div>
              </Fade>
              
              
            </div>

            
            
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
    icon: {
      padding: "10%",
      height: "100%",
      width: "100%",
      
    },
    rightTitle: {
      textAlgin:"right"
  
    },
    rightDesc: {
      textAlgin:"right"
    },
    leftTitle: {
      textAlgin:"right"
    },
    leftDesc: {
      textAlgin:"right"
    }
  
  }