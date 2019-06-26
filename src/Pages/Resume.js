import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';

import resume_CV from '../assets/Resume_CV.pdf'
import Home from './Home';

export default class Resume extends Component {
  render() {
    return (
        <div>
        <Home/>
      </div>
    )
  }
}
