import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullStandards from './FullStandards'
import Standard from './Standard'
import NewStandard from './NewStandard'
import axios from 'axios'

class Standards extends React.Component {

	state = {
		standards: null
	};

	componentWillMount() {
		axios.get('http://localhost:1488/api/standards/all', {crossdomain: true})
			.then(response => {
				this.setState({standards: response.data});
			})
			.catch(error => {
				console.log('something went wrong: ' + error);
			});
	}

	render() {
		if (this.state.standards === null) {
			return "loading data..."
		} else {
			return (
				<Switch>
					<Route exact path='/standards' render={() => <FullStandards allStandards={this.state} />} />
					<Route exact path='/standards/new' component={NewStandard}/>
					<Route path='/standards/:id' component={Standard}/>
				</Switch>
			);
		}
	}
}


export default Standards

