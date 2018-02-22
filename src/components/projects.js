import React, { Component } from 'react'

import { initializeIsotopePlugin } from '../util'
import { data } from '../data'


export class Projects extends Component {
  componentDidMount() {
    initializeIsotopePlugin()
  }

  render() {
    return <section id="projects-section" className="portfolio-section section">

        <h2 className="section-title">Projects</h2>

        <ul id="filters" className="filters clearfix">
          <li className="type active" data-filter="*">All</li>
          { data.projects.categories.map(category =>
            <li key={ category } className="type" data-filter={`.${ category }`}>
              { category.replace('-', ' ') }
            </li>
          )}
        </ul>

        <div className="items-wrapper isotope row">

          { data.projects.projectsList.map(project =>
            <div key={ project.title }
                 className={`item col-lg-4 col-12 ${ project.categories }`}>
              <div className="item-inner">
                <figure className="figure">
                  <img className="img-fluid" src={ project.picture } alt="" />
                </figure>
                <div className="content text-left">
                  <h3 className="sub-title">{ project.title }</h3>
                  <div className="meta">
                    { project.techStack.join(', ') }
                  </div>
                  <div className="action">{ project.link.label }</div>
                </div>
                { project.link.url &&
                  <a className="link-mask" href={ project.link.url } target="_blank" rel="noreferrer noopener"/>}
              </div>
            </div>
          )}

        </div>
        
    </section>
  }
}