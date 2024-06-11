import React, { Component } from 'react'
import Markdown from 'react-markdown'


export class About extends Component {
  render() {
    return <section id="about-section" className="about-section section">
      <h2 className="section-title">About Me</h2>

      <div className="row">

        <div className="intro">
          <img className="profile-image" src={ this.props.data.picture } alt=""/>
          <div className="dialog">
            <h3 className="subtitle">¡Hello everybody!</h3>
            <br/>
            <Markdown>{this.props.data.bio}</Markdown>

          </div>
        </div>
      </div>

    </section>
  }
}