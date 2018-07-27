import React, { Component } from 'react'

import { data } from '../data'
import { yearsUntilNow, tooltip } from '../util'


export class Skills extends Component {
	render() {
		return <section id="skills-section" className="skills-section section text-center">

        <h2 className="section-title">
          Professional Skills
          <br/>
          <small>(Check the tooltips for a brief description)</small>
        </h2>

        <div className="top-skills">

          <h3 className="subtitle">Main Skills</h3>

          <div className="row">

            { data.skills.main.map(skill =>
              <div key={ skill.title } className="item col-12 col-md-6">
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
            { Object.keys(data.skills.others).map(techSkillCategory =>
              <div key={ techSkillCategory } className="col-md-6">
                <h4 className="sub-subtitle">
                  { techSkillCategory }
                </h4>
                <div className="misc-skills">
                  { data.skills.others[techSkillCategory].map(skill =>
                    <span {...tooltip(skill.description, 'right')}
                          className="skill-tag"
                          key={ skill.name }>
                      { skill.name }
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="personal-skills">

          <h3 className="subtitle">Personal Skills</h3>
          <div className="misc-skills">
            { data.skills.personal.map(skill =>
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