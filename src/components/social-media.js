import React from 'react'

import { data } from '../data'
import { tooltip } from '../util'


export const SocialMedia = () =>
	<ul className="social list-inline">
      { data.socialMedia.map(media =>
        <li key={ media.name } 
        	className="list-inline-item"
        	{...tooltip(`${ media.name }`)}>
          <a href={ media.link } target="_blank">
            <i className={`fa ${ media.icon }`} aria-hidden="true"></i>
          </a>
        </li>
      )}
    </ul>