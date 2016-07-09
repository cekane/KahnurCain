import React from 'react';
import { Toggle } from './Toggle'
import { Button } from './Button'
import { Row } from './Row'

export class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Toggle />
				<Row>	
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'medium' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'small' }/>
				</Row>
				<Row>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } color={ 'blue' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'medium' } color={ 'blue' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'small' } color={ 'blue' }/>
				</Row>
				<Row>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } color={ 'red' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'medium' } color={ 'red' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'small' }  color={ 'red' } />
				</Row>
				<Row>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } color={ 'yellow' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'medium' } color={ 'yellow' }/>
					<Button text={ 'Click Me' } handleOnClick={ k=>{ console.log("You Clicked the buttons") } } size={ 'small' } color={ 'yellow' }/>
				</Row>
			</div>
		);
	}
}
