import React, { Component } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { PicturesCarousel } from './carousel'


export class Events extends Component {
  render() {
    return <section id="events-section" className="education-section section">
      <h2 className="section-title">
        Community & Events
        <br />
        <small>(Click each item for detailed info)</small>
      </h2>

      { this.props.data.events.map(event => {
          const snakeCaseTitle = event.title.split(' ').join('-')

          return <span key={snakeCaseTitle}>
            <a href="#"
               data-toggle="modal"
               data-target={`#${snakeCaseTitle}`}>
              <div className="row" key={ event.title }>

                <div className="item col-12 col-md-12">
                  <div className="talk-picture">
                    <img src={ event.logo } alt=""/>
                  </div>
                  <div className="talk-info">
                    <div className="item-inner">
                      <h3 className="degree">
                        { event.title }
                      </h3>
                      <div className="education-body">
                        { event.role }
                      </div>
                      <div className="time">{ event.timePeriod }</div>
                      <div className="dialog">
                        <p>
                          { event.excerpt }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </a>

            <div className="modal fade"
                id={snakeCaseTitle}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={`${snakeCaseTitle}Label`}
                aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`${snakeCaseTitle}Label`}>
                      {event.title}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="item-img-container">
                      <PicturesCarousel title={snakeCaseTitle} pictures={event.pictures}/>
                    </div>
                    <br />
                    <br />
                    <p><b>Role:</b> {event.role}</p>
                    <p><b>Year:</b> {event.timePeriod}</p>

                    <p><b>Detailed Description:</b></p>
                    <Markdown rehypePlugins={[rehypeRaw]}>{event.description}</Markdown>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </span>
      })}
    </section>
  }
}