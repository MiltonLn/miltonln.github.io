import React, { Component } from 'react'

import { data } from '../data'


export class OpenSource extends Component {
    render() {
        return <section id="open-source-section" className="education-section section">
            <h2 className="section-title">Open Source</h2>

            {data.openSource.map(project =>
                <div className="row" key={project.title}>

                    <div className="item col-12 col-md-12">
                        <div className="talk-picture">
                            <img src={project.picture} alt="" />
                        </div>
                        <div className="talk-info">
                            <div className="item-inner">
                                <h3 className="degree">
                                    <a href={project.link} target="_blank" rel="noreferrer noopener">
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="dialog">
                                    <p>
                                        {project.description}
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