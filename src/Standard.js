import React from 'react'
import StandardsAPI from './standardsApi'
import Sheet from './Sheet'
import Track from './Track'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Standard extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
			standard: null
		};
	}

	componentWillMount() {
		axios.get('http://localhost:1488/api/standards/' + parseInt(this.props.match.params.id, 10), {crossdomain: true})
			.then(response => {
				console.log('got response: ' + response);
				this.setState({standard: response.data});
			})
			.catch(error => {
				console.log('something went wrong: ' + error);
			});
	}

	render() {
		if (this.state.standard === null) {
			return "loading data..."
		} else {
			return (
				<div>
					<h1>{this.state.standard.name}</h1>
					<i><h3>Author: {this.state.standard.author}</h3></i>
					<h3>Key: {this.state.standard.sheet.key}</h3>
					<Sheet chords={this.state.standard.sheet} />
					<Track video={this.state.standard.video} />
						<Link to='/standards'>Back</Link>
				</div>
			);
		}
	}
}

export default Standard


