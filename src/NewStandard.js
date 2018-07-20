import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewStandard extends React.Component {

	render() {
		return (
			<div>
				<h1>New Standard</h1>
				<Link to='/standards'>Back</Link>
			</div>
		);
	}
}

export default NewStandard


