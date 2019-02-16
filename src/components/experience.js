import React, { Component } from 'react'


export class Experience extends Component {
  render() {
    return <section id="experiences-section" className="experiences-section section">

        <h2 className="section-title">Work Experiences</h2>

        <div className="timeline">

          { this.props.data.experience.map(work =>
            <div key={ work.workPlace.name } className="item">
              <div className="work-place">
                <a href={ work.workPlace.webPage } target="_blank">
                  <h3 className="place">{ work.workPlace.name }</h3>
                </a>
                <div className="location">
                  <i className="fa fa-map-marker-alt" aria-hidden="true"></i>{ work.workPlace.ubication }
                </div>
              </div>
              <div className="job-meta">
                <div className="title">{ work.role }</div>
                <div className="time">{ work.period }</div>
              </div>
              <div className="job-desc">
                <p>{ work.description }</p>
                { work.achievements &&
                  <div className="work-achievements">
                    <h6>Achievements:</h6>
                    <ul className="list-unstyled">
                      { work.achievements.map(achievement =>
                        <li key={ achievement }>
                          <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                          { achievement }
                        </li>)}
                    </ul>
                  </div>
                }
              </div>
            </div>
          )}
        </div>
    </section>
  }
}