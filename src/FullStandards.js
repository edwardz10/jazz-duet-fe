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
			viewableStandards: {
                standards: this.getViewableEls(this.props.allStandards.standards, e.target.value.toLowerCase())
            }
        })

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleFilterChange} placeholder="Search by name" />
                <ul>
                {
                    this.state.viewableStandards.standards.map(s => (
                        <li key={s.id}>
                            <Link to={`/standards/${s.standard_id}`}>{s.name} ({s.sheet.key})</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default FullStandards

