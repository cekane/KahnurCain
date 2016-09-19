import React from 'react'

import { row } from './Row.scss'
import className from 'classnames'

export class Row extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ row }>
        { this.props.children }
      </div>
    )
  }
}