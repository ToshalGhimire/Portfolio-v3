import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

import ReactFullpage from '@fullpage/react-fullpage';
import ProjectItem from '../components/ProjectItem'


import {Spring} from 'react-spring/renderprops'



// Image imports
import room8logo from '../assets/room8.png';
import CPPlogo from '../assets/C-PNG.png';
import NFL from '../components/NFL';
import Room8 from '../components/Room8';
import MachineLearning from '../components/MachineLearning';
import AI from '../components/AI';
import CppSandbox from '../components/CppSandbox';


const ProjectData = {
  Room8: {
    title: "Room8",
    desc: "Living with roommates can be hard and frustrating. My team and I realized this and decided to do something about it. Room8 is an mobile app that is currently in its early stages of development. It is a communication platform designed to be used specifically by people in shared living situation. It contatins a set of tools that guides roommates into a better household ecosystem.",
    imgURL: room8logo,
    iconLeft: true,
    Button: {
      firstTitle: "Title String",
      firstURL: "URL",
      secondTitle: "Title String",
      secondURL: "URL",
      colorPrimary: "colorCode",
      colorSecondary: "colorCode"
    }

  },
  
  CPP: {
    title: "Code Sandbox",
    desc: "This repo contains Various programs that are created using core concepts of Object-oriented programming and design patterns, using standard c++ and also the QT GUI framework.",
    imgURL: CPPlogo,
    iconLeft: false,
    Button: {
      firstTitle: "Title String",
      firstURL: "URL",
      secondTitle: "Title String",
      secondURL: "URL",
      colorPrimary: "colorCode",
      colorSecondary: "colorCode"
    }
  }

}

/**
 * 
 * NFL: {
    title: "NFL Teams App",
    desc: "I love NFL and fantasy football. I wanted an faster way to get live information about the league. So I built an app for andriod that does just this. There is no public API that is 100% free for this data, so I decided to get data using web scraping tools and use it to automaticly update the app with the latest information from the leauge. This app has real time stats, news straight from the NFL, injury updates, and all 32 teams depthcharts for fantasy football related postions. Built 100% by me using Java and Python and tools for Dynamic web Scraping, AWS live servers and Firebase.",
    imgURL: NFLlogo,
    iconLeft: false,
    Button: {
      firstTitle: "Title String",
      firstURL: "URL",
      secondTitle: "Title String",
      secondURL: "URL",
      colorPrimary: "colorCode",
      colorSecondary: "colorCode"
    }
  },
 */

const Fullpage = () => (

  
  <ReactFullpage
    responsiveWidth={800}
    navigation={true}
    navigationPosition='right'
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{backgroundColor: 'white',marginBottom: '100px'}}>
             <Room8 data={ProjectData.Room8}/>      
          </div>
          
          <div className="section" style={{backgroundColor: '#cce6ff'}}>
            <NFL/>
          </div>
          
          <div className="section" style={{backgroundColor: 'white'}}>
            <MachineLearning/>
          </div>
          <div className="section" style={{backgroundColor: 'white'}}>
            <AI />
                      
          </div>
          <div className="section" style={{backgroundColor: 'white'}}>
            <CppSandbox data={ProjectData.CPP}/>
                      
          </div>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default class Projects extends Component {

  render() {
    return (
      <div>
        <Fullpage/>
        
      </div>
    )
  }
}
