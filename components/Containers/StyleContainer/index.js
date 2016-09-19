import React from 'react'

import { styleContainer, inLine } from './StyleContainer.scss'
import className from 'classnames'

export class StyleContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ styleContainer }>
        <h1 className={ inLine }>{ this.props.text }</h1>
        { this.props.children }
      </div>
    )
  }
}