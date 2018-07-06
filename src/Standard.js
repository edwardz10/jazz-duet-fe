import React from 'react'
import StandardsAPI from './standardsApi'
import Sheet from './Sheet'
import Track from './Track'
import { Link } from 'react-router-dom'

const Standard = (props) => {
    console.log('get here')
  const standard = StandardsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!standard) {
    return <div>Sorry, but the standard was not found</div>
  }
  return (
    <div>
      <h1>{standard.name}</h1>
	  <h3>Key: {standard.key}</h3>
      <Sheet chords={standard.chords} />
      <Track video={standard.video} />
      <Link to='/standards'>Back</Link>
    </div>
  )
}

export default Standard


