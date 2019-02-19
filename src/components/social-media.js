import React from 'react'

import { tooltip } from '../util'


export class SocialMedia extends React.Component {
  render() {
    return <ul className="social list-inline">
      { this.props.data.socialMedia.map(media =>
        <li key={ media.name }
          className="list-inline-item"
          {...tooltip(`${ media.name }`)}>
          <a href={ media.link } target="_blank">
            <i className={`${ media.icon }`} aria-hidden="true"></i>
          </a>
        </li>
      )}
    </ul>
  }
}