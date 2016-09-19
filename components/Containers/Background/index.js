import React from 'react'

import { backgroundStyle } from './Background.scss'
import className from 'classnames'

export class Background extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ backgroundStyle }>
        { this.props.children }
      </div>
    )
  }
}