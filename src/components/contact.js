import React, { Component } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { SocialMedia } from './social-media'


export class Contact extends Component {
  render() {
    return <section id="contact-section" className="contact-section section">

        <h2 className="section-title">Get in Touch</h2>

        <div className="intro">
          <img className="profile-image" src={ this.props.data.picture } alt=""/>
          <div className="dialog">
            <Markdown rehypePlugins={[rehypeRaw]}>{this.props.data.contactContent}</Markdown>

            <SocialMedia data={this.props.data}/>
          </div>
        </div>

    </section>
  }
}