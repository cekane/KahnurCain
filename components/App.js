import React from 'react';
import { Toggle } from './Toggle'
import { Button } from './Button'
import { Row } from './Containers/Row'
import { CommentBox } from './CommentBox'
import { Background } from './Containers/Background'
import { StyleContainer } from './Containers/StyleContainer'
import { Navbar } from './Navbar'
import { NavbarButton } from './NavbarButton'

import { BodyFront } from './BodyFront'

export class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Background>

					<Navbar>
						<NavbarButton color={ "limeGreen" } link={ "http://www.google.com" }>Home</NavbarButton>
						<NavbarButton color={ "white" } link={"http://localhost:4444/work.html"}>Blog</NavbarButton>
						<NavbarButton color={ "white" } >Work</NavbarButton>
					</Navbar>
					<BodyFront>
					
					</BodyFront>

					

					
				</Background>
			</div>
		);
	}
}
