import React from 'react'

import { outerConatiner, flex } from './NavBar.scss'
import { Button } from '../Button'
import className from 'classnames'

export class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ outerConatiner }>
        {this.props.children}
      </div>
    )
  }
}