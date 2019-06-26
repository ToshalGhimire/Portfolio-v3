import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


/*
Input object

{
  title: "String",
  desc: "String",
  imgURL: "String",
  iconLeft: "Boolean"
  Button: {
    firstTitle: "Title String",
    firstURL: "URL",
    secondTitle: "Title String",
    secondURL: "URL",
    colorPrimary: "colorCode",
    colorSecondary: "colorCode"
  }
}

*/
export default class ProjectItem extends Component {
  render() {
    if(this.props.data.iconLeft){
      return (
        <div className={this.props.data.title}>
          <div className="container">
            <div className="row">
              <div id="icon" className="col-md-6 col-sm-6" >
                <img src={this.props.data.imgURL} style={styles.icon}/>
                
              </div>

              <div className="col-md-6 col-sm-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
                <div>
                <h1 style={styles.leftTitle}>{this.props.data.title}</h1>
                <p style={styles.leftDesc}>{this.props.data.desc}</p>

                </div>
                <div className="buttonContainer">
              
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      )

    }else{
      return (
        <div className={this.props.data.title}>
          <div className="container">
            <div className="row">
              
              <div className="col-md-6 col-sm-6" style={{paddingTop: "10%",paddingBottom: "10%"}}>
                <div>
                <h1 style={styles.rightTitle}>{this.props.data.title}</h1>
                <p style={styles.righttDesc}>{this.props.data.desc}</p>

                </div>
                <div className="buttonContainer">
                  
                  
                </div>

                
              </div>

              <div id="icon" className="col-md-6 col-sm-6" >
                <img src={this.props.data.imgURL} style={styles.icon}/>
                
              </div>
              
            </div>
          </div>
        </div>
      )
    }
    
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