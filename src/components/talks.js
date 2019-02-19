import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'


export class Talks extends Component {
  render() {
    return <section id="talks-section" className="education-section section">
      <h2 className="section-title">
        Talks
        <br />
        <small>(Click each item for detailed info)</small>
      </h2>

      { this.props.data.talks.map(talk => {
          const snakeCaseTitle = talk.title.split(' ').join('-')

          return <span key={snakeCaseTitle}>
            <a href="#"
              data-toggle="modal"
              data-target={`#${snakeCaseTitle}`}>
              <div className="row" key={ talk.title }>

                <div className="item col-12 col-md-12">
                  <div className="talk-info">
                    <div className="item-inner">
                      <h3 className="degree">
                        { talk.title }
                      </h3>
                      <div className="education-body">
                        { talk.event }
                      </div>
                      <div className="time">{ talk.year }</div>
                      <div className="dialog">
                        <p>
                          { talk.excerpt }
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
                      {talk.title}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="item-img-container">
                      <img src={talk.picture} alt="" />
                    </div>
                    <br />
                    <br />
                    <p><b>Event:</b> {talk.event}</p>
                    <p><b>Event Link:</b> <a href={talk.link}>{talk.link}</a></p>
                    <p><b>Year:</b> {talk.year}</p>
                    <p><b>Language:</b> {talk.language}</p>

                    <p><b>Detailed Description:</b></p>
                    <ReactMarkdown
                      source={talk.description}
                      escapeHtml={false} />
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