import React from 'react'
import StandardsAPI from './standardsApi'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
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

export default FullStandards

