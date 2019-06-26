import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import binary from '../assets/binary.svg'

export default class CppSandbox extends Component {
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
        return (
            <div className={this.props.data.title}>
            <div className="container">
              <div className="row">
                
              <div id="icon" className="col-md-6 col-sm-6" >
                  <img src={binary} style={styles.icon}/>
                  
                </div>
                
                <div className="col-md-6 col-sm-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
                  <div>
                  <Fade top distance={"50px"} duration={2000}>
                  <h1 style={{textAlign: this.state.ResponsiveTextAlign}}>Code Sandbox</h1>
                  </Fade>
                  <Fade right distance={"50px"} duration={2000}>
                  <h4 style={{textAlign: this.state.ResponsiveTextAlign,color: '#737C84'}}>C++</h4>
                  </Fade>

                  <p className="p-projects" style={{textAlign: this.state.ResponsiveTextAlign}}>
                  This repo contains Various programs that are created using core concepts of Object-oriented programming and design patterns, using standard c++ and also the QT GUI framework.
                  </p>
    
                  </div>
                  <Fade delay={1200}>

                  <div className="buttonContainer" style={{textAlign:this.state.ResponsiveTextAlign,flexDirection:'row'}}> 
                    <a href="https://github.com/ToshalGhimire/CPP-Sandbox" ><Button style={{marginRight:'1%',borderRadius: 20}}>Github Repo</Button></a>
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
        
    }
    
    }