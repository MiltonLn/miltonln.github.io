import React, { Component } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


export class OpenSource extends Component {
    getProjectPicture(project) {
        if (project.picture) return <img src={project.picture} alt="" />

        return [
            <img src="assets/images/logia.jpg" alt="" />,
            <h2 class="image-title">
                { project.title }
            </h2>
        ]
    }
    render() {
        return <section id="open-source-section" className="education-section section">
            <h2 className="section-title">
                Open Source Contributions
                <br/>
                <small>(Click each item for detailed info)</small>
            </h2>

            { this.props.data.openSource.map(project => {
                const snakeCaseTitle = project.title.split(' ').join('-')
                return <span key={snakeCaseTitle}>
                    <a href="#"
                       data-toggle="modal"
                       data-target={`#${snakeCaseTitle}`}>
                        <div className="row">

                            <div className="item col-12 col-md-12">
                                <div className="talk-info">
                                    <div className="item-inner">
                                        <h3 className="degree">
                                            {project.title} &nbsp;
                                            (<i className="fa fa-star" style={{"color": "orange"}}></i>
                                            {project.stars})
                                        </h3>
                                        <div className="dialog">
                                            <p>
                                                {project.excerpt}
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
                                        { project.title }
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="item-img-container">
                                        {this.getProjectPicture(project)}
                                    </div>
                                    <br/>
                                    <br/>
                                    <p><b>Github Stars:</b> {project.stars} <i className="fa fa-star" style={{ "color": "orange" }}></i></p>

                                    <p>
                                        <b>Repository:</b> &nbsp;
                                        <a href={project.link}>{project.link}</a>
                                    </p>

                                    <p><b>Detailed Description:</b></p>
                                    <Markdown rehypePlugins={[rehypeRaw]}>{ project.description }</Markdown>
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