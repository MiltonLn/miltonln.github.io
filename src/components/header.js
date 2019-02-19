import React, { Component } from 'react'

import { Experience } from './experience'
import { Education } from './education'
import { Skills } from './skills'
import { Projects } from './projects'
import { Contact } from './contact'
import { SocialMedia } from './social-media'
import { About } from './about'
import { Talks } from './talks'
import { OpenSource } from './open-source'
import { Blog } from './blog'
import { scrollToSection } from '../util'


export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      section: 'about'
    }
  }

  switchSection(section) {
    this.setState({ section }, () => scrollToSection(section))
  }

  renderSection() {
    switch(this.state.section) {
      case 'experiences':
        return <Experience data={this.props.data}/>
      case 'education':
        return <Education data={this.props.data}/>
      case 'skills':
        return <Skills data={this.props.data}/>
      case 'projects':
        return <Projects data={this.props.data}/>
      case 'contact':
        return <Contact data={this.props.data}/>
      case 'about':
        return <About data={this.props.data}/>
      case 'talks':
        return <Talks data={this.props.data}/>
      case 'openSource':
        return <OpenSource data={this.props.data}/>
      case 'blog':
        return <Blog data={this.props.data}/>
      default:
        return <span>There's a problem in here!</span>
    }
  }

  render() {
    return [
      <header key="header" className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <a className="btn d-none d-md-inline-block" href="mailto:miltonln04@gmail.com">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> Drop me a line
            </a>
            <a className="btn" href="assets/pdf/cv.pdf" target="_blank" rel="noreferrer noopener">
              <i className="fa fa-download" aria-hidden="true"></i> Download My Resume
            </a>
          </div>

          <SocialMedia data={this.props.data}/>
        </div>

        <div className="intro">
          <div className="container text-center">
            <img className="profile-image" src={ this.props.data.picture } alt=""/>
            <h1 className="name">{ this.props.data.name }</h1>
            <div className="title">{ this.props.data.role }</div>
            <div className="profile">
              <p>
                { this.props.data.profile }
              </p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="container text-center">
            <ul className="list-inline">
              <li className="email list-inline-item">
                <i className="fa fa-envelope"></i><a href="mailto:someone@example.com">{ this.props.data.email }</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="page-nav-space-holder">
          <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
            <div className="container">
              <ul id="page-nav" className="nav page-nav list-inline">
                <li className="nav-item">
                  <a onClick={() => this.switchSection('about')}
                     className="scrollto nav-link"
                     id="about-selector"
                     href="#about-section">
                     About me
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('skills')}
                     className="scrollto nav-link"
                     id="skills-selector"
                     href="#skills-section">
                     Skills
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('projects')}
                     className="scrollto nav-link"
                     id="projects-selector"
                     href="#projects-section">
                     Projects
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('openSource')}
                    className="scrollto nav-link"
                    id="open-source-selector"
                    href="#open-source-section">
                    Open Source
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('experiences')}
                     className="scrollto nav-link"
                     id="experiences-selector"
                     href="#experiences-section">
                     Experience
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('talks')}
                     className="scrollto nav-link"
                     id="talks-selector"
                     href="#talks-section">
                     Talks
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('education')}
                     className="scrollto nav-link"
                     id="education-selector"
                     href="#education-section">
                     Education
                   </a>
                </li>
                <li className="nav-item">
                  <a className="scrollto nav-link"
                     onClick={() => this.switchSection('blog')}
                     id="blog-selector"
                     href="#blog-section">
                     Blog
                   </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.switchSection('contact')}
                     className="scrollto nav-link"
                     id="contact-selector"
                     href="#contact-section">
                     Contact
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>,
      <div key="section-container" className="wrapper container">
        { this.renderSection() }
      </div>
    ]

  }
}