import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import "../App.css"

import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import bgImage from '../assets/binary.svg'

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import bgContact from '../assets/bgContact.jpg'



export class NavbarComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         IntroLoaded: false,
    }
    
}
    updateText = () => {
        this.setState({IntroLoaded: true})

    }
    
    render() {
        
        const Intro = (<div style={{marginTop: '5%',PaddingTop:'5%',PaddingBottom:'5%',marginBottom: '5%'}}>
        <Fade duration={1500}>
        <div style={{textAlign: 'center',}}>
        <Slide top duration={3000}>
        <h1 >Hi, I'm Toshal!</h1>
        </Slide>
        </div>
        </Fade>

        <Fade delay={2000}>
            <Pulse delay={2000} duration={2500}>
        <div style={{textAlign: "center"}}>
        <h2 >I'm a Full Stack Software Developer</h2>
        </div>
            </Pulse>
        </Fade>

        <br/>

        <Fade Botton duration={2500} delay={5000}>
        <div style={{textAlign: "center"}}>
          <h1 >Welcome to my Portfolio Site</h1>
        </div>
        </Fade>

        </div> )



        const HomeRoute = (<div >
            <Fade Top duration={2500} delay={5000}>
            <Router>
                <Navbar className="NavBar-Component navbar-light bg-transparent" variant="light" expand="lg" style={{ zIndex: 5 }}>
                    <LinkContainer to="/Home">
                        <Navbar.Brand href="/Home">Toshal Ghimire</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="justify-content-end" activeKey="/home">

                            <LinkContainer to="/Projects">
                                <Nav.Item>
                                    <Nav.Link href="/Projects" ><span className="nav-text">Projects</span></Nav.Link>
                                </Nav.Item>
                            </LinkContainer>

                            <LinkContainer to="/Contact">
                                <Nav.Item>
                                    < Nav.Link href="/Contact" ><span className="nav-text">Contact</span></Nav.Link>
                                </Nav.Item>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/test' component={Resume} />

                </Switch>
            </Router>
            </Fade >

            {Intro}
        <div>
            <Fade Top duration={2500} delay={5000}>
                
            <Home/>
            </Fade>
        </div>
        

        
        </div>)

        const NotHomeRoute = (
            <Router>
                <Navbar className="NavBar-Component" bg="dark" variant="dark" expand="lg" style={{ zIndex: 5 }}>
                    <LinkContainer to="/Home">
                        <Navbar.Brand href="/Home">Toshal Ghimire</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="justify-content-end" activeKey="/home">

                            <LinkContainer to="/Projects">
                                <Nav.Item>
                                    <Nav.Link href="/Projects">Projects</Nav.Link>
                                </Nav.Item>
                            </LinkContainer>

                            <LinkContainer to="/Contact">
                                <Nav.Item>
                                    <   Nav.Link href="/Contact">Contact</Nav.Link>
                                </Nav.Item>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/test' component={Resume} />


                </Switch>
            </Router>
        )

        // Makes sure home page is delayed
        if (this.props.location.hash == "#/Home" || this.props.location.hash == "#/" ) {
            return (HomeRoute)
        } else {
            return (NotHomeRoute)
        }
    }
}

export default withRouter(NavbarComponent)
