import React, { Component } from 'react'

import { data } from '../data'


export class Talks extends Component {
  render() {
    return <section id="talks-section" className="education-section section">
      <h2 className="section-title">Talks</h2>

      { data.talks.map(talk =>
        <div className="row" key={ talk.title }>

          <div className="item col-12 col-md-12">
            <div className="talk-picture">
              <img src={ talk.picture } alt=""/>
            </div>
            <div className="talk-info">
              <div className="item-inner">
                <h3 className="degree">
                  <a href={ talk.link } target="_blank" rel="noreferrer noopener">
                    { talk.title }
                  </a>
                </h3>
                <div className="education-body">
                  { talk.event }
                </div>
                <div className="time">{ talk.year }</div>
                <div className="dialog">
                  <p>
                    { talk.description }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </section>
  }
}