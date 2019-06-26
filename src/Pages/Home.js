import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import CPP from '../assets/cpp.svg'
import APP from '../assets/app.svg'
import python from '../assets/python.svg'
import coding from '../assets/coding.svg'



export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      RFontSizeP: '24px',
      RFontSizeImportant: '30px',
      ResponsiveTextAlignLeft: "left",
      ResponsiveTextAlignRight: "right",
      isMobile: false,
      isHalf: false,
      isFull: false

    }
  }

  updateDimensions = () => {
    // Full screen 
    if (window.innerWidth > 800) {
      this.setState({
        RFontSizeP: '24px',
        RFontSizeImportant: '34px',
        isMobile: false, isHalf: false, isFull: true,
        ResponsiveTextAlignRight: 'right',
        ResponsiveTextAlignLeft: 'left'


      })
    }
    // Half screen
    if (window.innerWidth < 800 && window.innerWidth > 500) {
      this.setState({
        RFontSizeP: '18px',
        RFontSizeImportant: '26px',
        isMobile: false, isHalf: true, isFull: false,
        ResponsiveTextAlignRight: 'right',
        ResponsiveTextAlignLeft: 'left'
      })
    }
    // Mobile
    if (window.innerWidth <= 500) {
      this.setState({
        RFontSizeP: '14px',
        RFontSizeImportant: '20px.', 
        isMobile: true, isHalf: false, isFull: false, 
        ResponsiveTextAlignRight: 'center',
        ResponsiveTextAlignLeft: 'center'
      })
    }
    this.setState({ width: window.innerWidth });
  }

  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const ImageCPP = (<div id="icon" className="col-md-6 col-sm-6" style={{marginTop: (this.state.isHalf)? "20%": 0}}>
        <img src={CPP}  />
      </div>)

    const ImageAPP = (<div id="icon" className="col-md-6 col-sm-6"  style={{marginTop: (this.state.isHalf)? "20%": 0}}>
        <img src={APP} />
        </div>)

    const ImageResearch = (<div id="icon" className="col-md-6 col-sm-6"  style={{marginTop: (this.state.isHalf)? "20%": 0}}>
      <img src={python} />
    </div>)

    const ImageWeb = (<div id="icon" className="col-md-6 col-sm-6"  style={{marginTop: (this.state.isHalf)? "20%": 0}}>
    <img src={coding} />
  </div>)

    return (
      <div className="Home-app"  style={{backgroundColor:'white'}}>
        <div className="intro-div" style={{ marginTop: '7%',padding: '10%', textAlign: 'center',borderRadius:'82% 65% 70% 100% / 27% 28% 10% 10%'}}>
          <h2 className="intro-text" >
            I am a graduate of the University of Colorado at Boulder with a bachelor's in the field of computer science (2019).
   </h2>
          <br />
          <h3 className="intro-text" >
            I love this field and I am eager to see where my career as a software developer takes me.
   </h3>
        </div>

        
        {/* Where I started */}
        <div className="container" style={{marginTop: '8%',marginBottom: '8%',textAlign: this.state.ResponsiveTextAlignRight}}>
          <div className="row">
            {this.state.isMobile ? ImageCPP : null }
            <div id="icon" className="col-md-6 col-sm-6" >
              <div className="home-intro" >
                <h2 style={{marginTop: '5%',fontWeight: "bold" }}>Where I Started.</h2>
                <div style={{ marginTop: '3%' }}>
                  <p style={{ fontSize: this.state.RFontSizeP ,color:"#606060"}}>
                    C and C++ are the first programing languages that I learned. Although I was not a fan of computer science when I was introduced to it,
                    I fell in love with programing after I learned about object-oriented programming and after I was able to get over the initial learning curve.
            </p>
                  <br />
                  <p style={{ fontSize: this.state.RFontSizeP,color:"#606060" }}>
                    My interest in this field all started with this language.
            </p>
                </div>
              </div>
            </div>
            {this.state.isMobile ? null : ImageCPP }
          </div>
        </div>

        <hr/>

        {/* Mobile Development */}
        <div className="container" style={{marginTop: '8%',marginBottom: '8%',textAlign: this.state.ResponsiveTextAlignLeft}}>
          <div className="row">
            {this.state.isMobile ? ImageAPP : null }
            {this.state.isMobile ? null : ImageAPP }

            <div id="icon" className="col-md-6 col-sm-6" >
            <h2 style={{marginTop: '5%',fontWeight: "bold" }}>Mobile Development</h2>
                <div style={{ marignTop: '3%' }}>
                  <p style={{ fontSize: this.state.RFontSizeP,color:"#606060" }}>
                  I learned Java because I wanted to learn mobile application development. I taught myself how to use android studio 
                  and by doing so, I was able to learn Java and the core parts of the android SDK.
                  </p>
                  <br/>
                  <p style={{ fontSize: this.state.RFontSizeP,color:"#606060" }}>
                  But android was not enough, I soon found myself building a cross platform mobile application for iOS and Android using React Native.
                </p>
              </div>

            </div>

          </div>
        </div>

        <hr/>
        {/* Data Science and Python */}

        <div className="container" 
        style={{marginTop: '8%',marginBottom: '8%',textAlign: this.state.ResponsiveTextAlignRight}}>
          <div className="row">
            {this.state.isMobile ? ImageResearch : null }

            <div id="icon" className="col-md-6 col-sm-6" >
            <h2 style={{marginTop: '5%',fontWeight: "bold" }} >Data Science and Python</h2>
                <div style={{ marignTop: '3%' }}>
                  <br/>
                  <p style={{ fontSize: this.state.RFontSizeP ,color:"#606060"}}>
                  While in college, I took three courses in which I was able to learn and excel in the Python programing language.
                   Those courses were Data Science, Machine Learning and AI.</p>
                   <br/>
                   <p style={{ fontSize: this.state.RFontSizeP,color:"#606060" }}>
                  Now it is easily my go to language when data is involved. I have used python to write scripts, 
                  create machine learning models, create AI agents and run cronjobs on servers using AWS.
                  </p>
              </div>

            </div>
            {this.state.isMobile ? null : ImageResearch }


          </div>
        </div>

        <hr/>
        {/* Web Development */}

        <div className="container" style={{marginTop: '8%',paddingBottom: '3%',textAlign: this.state.ResponsiveTextAlignLeft}}>
          <div className="row">
            {this.state.isMobile ? ImageWeb : null }
            {this.state.isMobile ? null : ImageWeb }


            <div id="icon" className="col-md-6 col-sm-6" >
            <h2 style={{marginTop: '5%',fontWeight: "bold" }}>Web Development</h2>
                <div style={{ marignTop: '3%' }}>
                  <br/>
                  <p style={{ fontSize: this.state.RFontSizeP ,color:"#606060"}}>
                    ReactJS is the frameworks that I am comfortable with when it comes to web development. 
                    I am not an expert at front-end and UX, but if given proper time,
                    I can create any web design element that is requried of me.</p>
                   <br/>
                   <p style={{ fontSize: this.state.RFontSizeP,color:"#606060" }}>
                    This site was created by me using ReactJS with a firebase back-end. A previous build of my site, built on ASP.NET with AWS, can be found at <a href="http://www.toshalghimire.com/">www.toshalghimire.com</a>
                  </p>
              </div>

            </div>


          </div>
        </div>

        <div className="home-intro" style={{ marginTop: '7%',padding: '15%', backgroundColor: '#323333', textAlign: 'center',borderRadius: "56% 28% 81% 14% / 25% 11% 29% 32% " }}>
          <p style={{ fontSize: this.state.RFontSizeImportant,fontWeight: "bold" ,color:'white'}}>
          I am an excellent learner and in the field of computer science I undoubtedly 
          believe I can learn and adapt to anything that is requried of me.   
          </p>
          <br />
          <p style={{ fontSize: this.state.RFontSizeImportant,fontWeight: "bold",color:'white'}}>
            Check out my <a href="https://drive.google.com/file/d/14rXZPo3ynHuG6BQUrRmRwFz2lixfRtzU/view?usp=sharing">Resume</a> to learn more about me!
           </p>
        </div>



      </div>)
  }
}
