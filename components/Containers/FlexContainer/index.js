import React from 'react'

import { flexStyle } from './FlexContainer.scss'
import className from 'classnames'

export class FlexContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ flexStyle }>
        { this.props.children }
      </div>
    )
  }
}