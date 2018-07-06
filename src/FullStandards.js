import React from 'react'
import { Link } from 'react-router-dom'

class FullStandards extends React.Component {
    constructor (props) {
        super(props);

        this.getViewableEls = this.getViewableEls.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = {
            viewableStandards: this.props.allStandards
        };
    }

    getViewableEls (standards, filterStr) {
		return standards.filter(st => st.name.toLowerCase().includes(filterStr));
    }

    handleFilterChange = e => {
        this.setState({
			viewableStandards: this.getViewableEls(this.props.allStandards, e.target.value.toLowerCase())
        })
    }

    render() {
		const { viewableStandards } = this.state;

        return (
            <div>
                <input type="text" onChange={this.handleFilterChange} placeholder="Search by name" />
                <ul>
                {
                    viewableStandards.map(s => (
                        <li key={s.id}>
                            <Link to={`/standards/${s.id}`}>{s.name}</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default FullStandards

