import React, { Component } from 'react'

import { data } from '../data'


export class About extends Component {
  render() {
    return <section id="about-section" className="about-section section">
      <h2 className="section-title">About Me</h2>

      <div className="row">

        <div className="intro">
          <img className="profile-image" src={ data.picture } alt=""/>
          <div className="dialog">
            <h3 className="subtitle">¡Hello everybody!</h3>
            <br/>
            <p>
              My name is { data.name } and I'm a { data.role } from Colombia.
              <br/><br/>
              I'm a long life learner, always excited to work on the most cutting 
              edge technologies, ready to help and passionated about the things 
              I do on a daily basis
              <br/><br/>

              Some interesting facts about me: 
              <br/><br/>              
            </p>

            <ul className="list-unstyled facts-list">
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                I'm always worried about my work's quality and that's why I'm always
                trying to learn and apply the best practices for my tech stack, 
                and also, share them if possible 
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                I have some experience leading software teams and I feel like that's
                something I'm good for, but also, something I need to keep improving
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                I'm an organizer for the <a href="https://www.pythoncali.com/" target="_blank" rel="noopener noreferrer">Python Cali</a>&nbsp;
                community in which I'm always contributing or giving talks
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                I love Open Source and I feel like I owe so much to the community 
                that's why I like to contribute back in some interesting projects 
                I find useful, take a look at my Github profile!
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                I have a blog called <a href="http://www.lalogiadepython.com" target="_blank" rel="noopener noreferrer">"La Logia de Python"</a>&nbsp; 
                in which I try to write about the things I know mostly about Python
              </li>
            </ul>

          </div>
        </div>
      </div>
        
    </section>
  }
}