import React, { Component } from 'react'


export class Education extends Component {
  render() {
    return <section id="education-section" className="education-section section">
      <h2 className="section-title">Education</h2>

      <div className="row">

        <div className="item col-12 col-md-12 text-center">
          <div className="item-inner">
            <img className="university-logo" src={ this.props.data.education.universityLogo } alt=""/>
            <h3 className="degree">{ this.props.data.education.degree }</h3>
            <div className="education-body">
              { this.props.data.education.university }
            </div>
            <div className="time">{ this.props.data.education.period }</div>
            <div className="dialog">
              <p>
                { this.props.data.education.description }
                <br/>
              </p>
              <h6>Achievements:</h6>
              <ul className="list-unstyled achievements-list">
                { this.props.data.education.achievements.map((achievement, i) => 
                  <li key={`achievement-${i}`}>
                    <i className="fa fa-check" aria-hidden="true"></i> { achievement }
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  }
}