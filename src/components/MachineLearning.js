import React, { Component } from 'react'
import { Button, Card ,ListGroup} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';



/*


<div className="DigitsDiv" style={{marginTop: "5%",marginBottom: "5%"}}>
<h2 >Comparing digit classification models</h2>
<p style={styles.righttDesc}>This is an analyis of K-nearest-Neighbors VS Convolutional Neural Networks when using to classifiy handwritten digits</p>
<div className="Buttons2" style={{flexDirection: 'row'}}>
  <a href="http://www.toshalghimire.com/files/Reinforcement%20Learning.pdf" style={{margin: "3%"}} ><Button >Report</Button></a>
  <a href="http://www.toshalghimire.com/files/Reinforcement%20Learning.pdf" style={{margin: "3%"}} ><Button >Code</Button></a>
</div>

</div>

          */

export default class MachineLearning extends Component {
  constructor(props) {
    super(props)

    this.state = {
         width: window.innerWidth,
         heightMargin: '0%',
         
    }
}

updateDimensions = () => {
    // Full screen 
    if(window.innerWidth > 800){
        this.setState({heightMargin: '0%'})
    }
    // Half screen
    if(window.innerWidth < 800 && window.innerWidth > 500){
        this.setState({heightMargin: '5%'})
    }
    // Mobile
    if(window.innerWidth <= 500){
        this.setState({heightMargin: '5%'})
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
        <div >
        <div className="container">
            <Fade top cascade >
          <div style={{marginTop: this.state.heightMargin, marginBottom: "2%"}}>
              <h1 style={{textAlign:'center'}}>Machine Learning</h1>
          </div>
          </Fade>

          <div className="row">

          
            
          <div  className="col-md-6 col-md-6" >
          <Fade>

          <Pulse duration={1000}>

          <Card style={{ width: '100%',marginTop:'3%',marginBottom:'4%' }}>
            <Card.Body>
              <Card.Title>Comparing Digit Classification Models</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Keras and sklearn</Card.Subtitle>
              <Card.Text>
              This is an analyis of K-nearest-Neighbors VS Convolutional Neural Networks when using to classifiy handwritten digits using the minst dataset, Keras and sklearn.
              </Card.Text>
              <Card.Link href="https://docs.google.com/document/d/110mjLNbmsV75IoYJ9wNLKgsXw3HqbSp2SI7r1XppNT8/edit?usp=sharing">Report</Card.Link>
              <Card.Link href="#">Code</Card.Link>
            </Card.Body>
          </Card>
          </Pulse>
          </Fade >

          <Fade delay={400}>
          <Pulse delay={600} duration={1000}>
            <Card style={{ width: '100%' ,marginTop:'4%',marginBottom:'3%'}}>
            <Card.Body>
              <Card.Title>Reinforcement Learning Report</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Q-learning</Card.Subtitle>
              <Card.Text>
              In my machine learning course I decided to focus on reinforcement learning for the final project. My teammates and I attempted to program an agent to play the classic atari game pong using deep Q-learning.              </Card.Text>
              <Card.Link href="http://www.toshalghimire.com/files/Reinforcement%20Learning.pdf">Report</Card.Link>
            </Card.Body>
          </Card>
          </Pulse>
          </Fade>
   
            </div>
            
            <div className="col-md-6 col-md-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
              
            <Fade delay={1300} duration={1500}>

            <Card style={{ width: '100%' }}>
            <Card.Header>Additional Models and Practice</Card.Header>
            <ListGroup variant="flush">
              <Fade right distance='200px' delay={1200}>
              <ListGroup.Item>
                <a href="https://github.com/ToshalGhimire/Machine-Learning-Practice/blob/master/Decision%20tree%2C%20K-nearest%20neighbor%2C%20and%20the%20Bias-Variance%20Trade-Off.ipynb">Decision tree, Digit Classifier With KNN, and the Bias-Variance Trade-Off</a>
              </ListGroup.Item>
              </Fade>
              <Fade right distance='200px' delay={1400}>
              <ListGroup.Item>
                <a href="https://github.com/ToshalGhimire/Machine-Learning-Practice/blob/master/Perceptron%2C%20Logistic%20Regression%20%2C%20Stocashtic%20Gradient%20Descent.ipynb">Perceptron, Logistic Regression , Stocashtic Gradient Descent</a>
              </ListGroup.Item>
              </Fade>
              <Fade right distance='200px' delay={1600}>
              <ListGroup.Item>
                <a href="https://github.com/ToshalGhimire/Machine-Learning-Practice/blob/master/Single-Layer%20Perceptron%2C%20Neural%20Networks%20and%20Email%20Classification.ipynb">Single-Layer Perceptron, Neural Networks and Email Classification</a>
              </ListGroup.Item>
              </Fade>
              <Fade right distance='200px' delay={1800}>
              <ListGroup.Item>
                <a href="https://github.com/ToshalGhimire/Machine-Learning-Practice/blob/master/Vanilla%20Support%20Vector%20Machines%2C%20Grid%20Search%2C%20Movie%20Review%20Classifier.ipynb">Vanilla Support Vector Machines, Grid Search, Movie Review Classifier</a>
              </ListGroup.Item>
              </Fade>
            </ListGroup>
          </Card>
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