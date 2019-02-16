import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import { SocialMedia } from './social-media'


export class Contact extends Component {
  render() {
    return <section id="contact-section" className="contact-section section">

        <h2 className="section-title">Get in Touch</h2>

        <div className="intro">
          <img className="profile-image" src={ this.props.data.picture } alt=""/>
          <div className="dialog">
            <ReactMarkdown
              source={this.props.data.contactContent}
              escapeHtml={false}/>

            <SocialMedia data={this.props.data}/>
          </div>
        </div>

    </section>
  }
}