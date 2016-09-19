import React from 'react'

import { outerConatiner, sleepingBeauty } from './BodyFront.scss'
import { Button } from '../Button'
import className from 'classnames'

export class BodyFront extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className={ outerConatiner }>
        <img src="../../images/frontpage-background.jpg" className={ sleepingBeauty }/>
      </div>
    )
  }
}