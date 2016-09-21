import React from 'react'

import { rectangle, white , clear } from './Foreground.scss'
import { Button } from '../Button'
import className from 'classnames'

export class Foreground extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var color = '';
    switch(this.props.color){
      case 'clear':
        color = clear;
        break;
      case 'white':
        color = white;
        break;
    }

    return (
      <div id={ this.props.name } className={ className(rectangle, color) }>
        {this.props.children}
      </div>
    )
  }
}