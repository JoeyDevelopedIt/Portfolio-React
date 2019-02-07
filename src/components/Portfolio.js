import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      
      <div className="row education">
      <div className="three columns header-col">
      <h1><span>Portfolio</span></h1>
      </div>

<div className="nine columns main-col">
  {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="row item">
                <div className="twelve columns">
                          <a href={item.url} target="blank"><button>{item.name}</button></a>
                          <p>{item.description}</p>

                          
                          
                         
                        </div>
                      </div>
              )
            })
          }
          </div>
        </div>
  </section>
        );
  }
}