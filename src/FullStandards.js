import React from 'react'
import StandardsAPI from './standardsApi'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
/*
const FullStandards = () => (
  <div>
    <ul>
      {
        StandardsAPI.all().map(s => (
          <li key={s.id}>
            <Link to={`/standards/${s.id}`}>{s.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
*/

class FullStandards extends React.Component {
    constructor (props) {
        super(props);
        this.getViewableEls = this.getViewableEls.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = {
            allStandards: StandardsAPI.all(),
            filterStr: ''
        };
        console.log('standards: ' + this.state.allStandards.length);
        console.log('1');
    }

    componentDidMount () {
        console.log('2');
    }

    getViewableEls (standards, filterStr) {
        return standards.filter(st => st.name.includes(filterStr))
    }

    handleFilterChange = e => {
        this.setState({
            filterStr: e.target.value,
            viewableStandards: this.getViewableEls(this.state.allStandards, this.state.filterStr)
        })

        console.log('filter str=' + this.state.filterStr);
    }

    render() {
        return (
            <div>
                <input type="text" value={ this.state.filterStr } onChange={this.handleFilterChange} />
                <ul>
                {
                    this.state.viewableStandards.map(s => (
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

