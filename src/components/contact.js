import React, { Component } from 'react'

import { SocialMedia } from './social-media'
import { data } from '../data'


export class Contact extends Component {
  render() {
    return <section id="contact-section" className="contact-section section">

        <h2 className="section-title">Get in Touch</h2>

        <div className="intro">
          <img className="profile-image" src={ data.picture } alt=""/>
          <div className="dialog">
            <p>
              If you want to discuss about Python, Open Source, Programming communities, Soccer or Videogames
              I'm the one you are looking for, also I can take some freelance work.
            </p>
            <p><strong>I can help with the following:</strong></p>
            <ul className="list-unstyled service-list">
              <li><i className="fa fa-check" aria-hidden="true"></i> Front-end development with ReactJS</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Back-end development with Django/Python</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> UI development</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> UX prototyping</li>
            </ul>
            <p>
              Drop me a line at <a href={`mailto:${ data.email }`}>{ data.email }</a>&nbsp;
              or call me at <a href={`tel:${ data.phone }`}>{ data.phone }</a>
            </p>

            <SocialMedia/>
          </div>
        </div>

    </section>
  }
}