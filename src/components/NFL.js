import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import NFLIcon from '../assets/NFL.svg'

export default class NFL extends Component {
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
        this.setState({ResponsiveTextAlign: 'right'})
    }
    // Half screen
    if(window.innerWidth < 800 && window.innerWidth > 575){
        this.setState({ResponsiveTextAlign: 'right'})
    }
    // Mobile
    if(window.innerWidth <= 575){
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
    const IconDiv = (
      <div id="icon" className="col-md-6 col-sm-6" >
              <img src={NFLIcon} style={styles.icon}/>
      </div>
    )
    return (
        <div >
        <div className="container">
          <div className="row">
            
            {(this.state.ResponsiveTextAlign == 'center') ? IconDiv: null}
            <div className="col-md-6 col-sm-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
              <div>
              <Fade top distance={"50px"} duration={2000}>
              <h1 style={{textAlign:this.state.ResponsiveTextAlign}}>NFL Teams App</h1>
              </Fade>
              <Fade left distance={"50px"} duration={2000}>
              <h4 style={{textAlign: this.state.ResponsiveTextAlign,color: '#737C84'}}>Android</h4>
              </Fade>


              <p className="p-projects" style={{textAlign:this.state.ResponsiveTextAlign}}>
                I love NFL and fantasy football. I wanted an faster way to get live information about the league. So I built an app for andriod that does just this. There is no public API that is 100% free for this data, so I decided to get data using web scraping tools and use it to automaticly update the app with the latest information from the leauge. This app has real time stats, news straight from the NFL, injury updates, and all 32 teams depthcharts for fantasy football related postions. Built 100% by me using Java and Python and tools for Dynamic web Scraping, AWS live servers and Firebase.
              </p>
              
              </div>
              <Fade delay={1200}>
              <div className="buttonContainer" style={{textAlign:this.state.ResponsiveTextAlign,flexDirection:'row'}}> 
                <a href="https://www.youtube.com/watch?v=J3jaws8nDek&feature=youtu.be"><Button style={{marginRight:'1%',borderRadius: 20}}>Video Demo</Button></a>
                <a href="https://github.com/ToshalGhimire/DepthChart" ><Button style={{marginLeft:'1%',borderRadius: 20}}>Code</Button></a>
              </div>
              </Fade>
              
            </div>
            {(this.state.ResponsiveTextAlign == 'right') ? IconDiv: null}


            
            
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