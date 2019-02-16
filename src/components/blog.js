import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'


export class Blog extends Component {
    render() {
        return <section id="blog-section" className="education-section section">
            <h2 className="section-title">Blog</h2>

            <div className="row">

                <div className="item col-12 col-md-12 text-center">
                    <div className="item-inner">
                        <img className="university-logo" src={this.props.data.blog.logo} alt="" />
                        <h3 className="degree">
                            <a href={this.props.data.blog.link} target="_blank">
                                {this.props.data.blog.name}
                            </a>
                        </h3>
                        <br/>
                        <div className="dialog">
                            <ReactMarkdown
                                source={this.props.data.blog.description}
                                escapeHtml={false} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    }
}