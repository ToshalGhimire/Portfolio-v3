import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

export default class AI extends Component {
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
            this.setState({heightMargin: '2%'})
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
            <h1 style={{textAlign:'center'}}>Artifical Intelegence</h1>
          </div>
          </Fade>

          <div className="row">
          
            
          <div  className="col-md-6 col-md-6" >
          <Fade delay={400}>
          <Pulse delay={600} duration={1000}>
          <Card style={{ width: '100%',marginTop:'3%',marginBottom:'4%' }}>
            <Card.Body>
              <Card.Title>Search Problems</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pacman</Card.Subtitle>
              <Card.Text>
                  Implementation of various diffrent search algorthims using python for the classic version of pacman. Algorthims like Depth First Search, Breadth First Search, Uniform Cost Search and A* search.
              </Card.Text>
               {/* TODO links and animation */}
              <Card.Link href="#">Code</Card.Link>
            </Card.Body>
          </Card>
          </Pulse>
          </Fade >

          <Fade delay={800}>
          <Pulse delay={1000} duration={1000}>
            <Card style={{ width: '100%' ,marginTop:'4%',marginBottom:'3%'}}>
            <Card.Body>
              <Card.Title>Implementation of Multiple Agents</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pacman</Card.Subtitle>
              <Card.Text>
                Implementation of diffrent agents (Pacman and Ghosts) for the classic version of Pacman. Reflex Agents, Minimax and Minimax with alpha beta pruning and finaly Expectimax.
            </Card.Text>
                {/* TODO links and animation */}
              <Card.Link href="#">Code</Card.Link>
            </Card.Body>
          </Card>
          </Pulse>
          </Fade >
   
            </div>
            <div  className="col-md-6 col-md-6" >
            <Fade >
          <Pulse duration={1000}>
            <Card style={{ width: '100%' ,marginTop:'4%',marginBottom:'3%'}}>
            <Card.Body>
              <Card.Title>Markov Decision Process</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Gridworld</Card.Subtitle>
              <Card.Text>
                  Impementation of reinformcent learning algorthims done on Gridworld with Value iteration and Q-learning. 
            </Card.Text>
                {/* TODO links and animation */}
              <Card.Link href="#">Code</Card.Link>
            </Card.Body>
          </Card>
          </Pulse>
          </Fade >

          <Fade delay={1300} duration={1500}>

          <Card style={{ width: '100%' }}>
            <Card.Header>Essays on Artificial Intelligence</Card.Header>
            <ListGroup variant="flush">
            <Fade right distance='200px' delay={1200}>
              <ListGroup.Item>
                <a href="https://docs.google.com/document/d/1FR1pQ6gLDSXiLn4NUhnvXFr-hFiw5AXpYZBKmbFKQJk/edit?usp=sharing">Ethics of Artificial Intelligence and Jobs</a>
              </ListGroup.Item>
              </Fade>
              <Fade right distance='200px' delay={1400}>

              <ListGroup.Item>
              <a href="https://docs.google.com/document/d/1nWWP92blQwnROEUrwkQfkbAfJjrpYsUf9yJuECf3vHc/edit?usp=sharing">Real world AI applications</a>
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
