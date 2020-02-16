import React, { Component } from 'react'

import { yearsUntilNow, tooltip } from '../util'


export class Skills extends Component {
	render() {
		return <section id="skills-section" className="skills-section section text-center">

        <h2 className="section-title">
          Professional Skills
        </h2>

        <div className="top-skills">

          <h3 className="subtitle">Main Skills</h3>

          <div className="row">

            { this.props.data.skills.main.map(skill =>
              <div key={ skill.title } className="item col-12 col-md-12">
                <div className="item-inner">
                  <div className="skill-icon">
                    <i className={ 'fab fa-' + skill.icon }></i>
                  </div>
                  <h4 className="skill-name">{ skill.title }</h4>
                  <div className="level">{ yearsUntilNow(skill.learnedAt) } year(s)</div>
                  <div className="desc">
                    { skill.description }
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        <div className="other-skills">

          <h3 className="subtitle">Tech Skills</h3>

          <div className="row">
            { Object.keys(this.props.data.skills.tech).map(techSkillCategory =>
              <div key={ techSkillCategory } className="col-md-6">
                <h4 className="sub-subtitle">
                  { techSkillCategory }
                </h4>
                <div className="misc-skills">
                  { this.props.data.skills.tech[techSkillCategory].map(skill =>
                    <span className="skill-tag"
                          key={ skill }>
                      { skill }
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="personal-skills">

          <h3 className="subtitle">Soft Skills</h3>
          <div className="misc-skills">
            { this.props.data.skills.soft.map(skill =>
              <div className="row" key={ skill.name }>
                <div className="col-md-12">
                  <span {...tooltip(skill.description, 'right')}
                        className="skill-tag">
                    { skill.name }
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>
    </section>
	}
}