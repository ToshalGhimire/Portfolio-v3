import React, { Component } from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavbarComponent from './navigation/NavbarComponent';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByk6TU6sTkAJkzfuwm0qpG7PiV5FM15zM",
    authDomain: "toshal-dev.firebaseapp.com",
    databaseURL: "https://toshal-dev.firebaseio.com",
    projectId: "toshal-dev",
    storageBucket: "toshal-dev.appspot.com",
    messagingSenderId: "1053394552177",
    appId: "1:1053394552177:web:2ef1424ecac5f6b1"
  };


export class App extends Component {
  constructor(props) {
    super(props)
    console.log("App Props",this.porps)
    this.state = {
       
    }


  }
  componentDidMount(){
    document.title = "Toshal Ghimire | Software Developer"
    firebase.initializeApp(firebaseConfig);

  }
  
  render() {
    return (<div>
      <NavbarComponent className="Navbar-Component" />
    </div>)
  }
}



export default App;
