import React from 'react'

function createChordTable(chords) {
	let rowLength = (chords.length % 12 === 0) ? 4 : 8;

    let chordsDisplayed = [];

    for (var i = 0; i < chords.length; i += rowLength) {
        chordsDisplayed.push(chords.slice(i, i + rowLength));
    }

    let table = []

    for (let i = 0; i < chordsDisplayed.length; i++) {
      let eightBarLine = chordsDisplayed[i];
      let children = []

      for (let j = 0; j < eightBarLine.length; j++) {
        children.push(<td>{eightBarLine[j]}</td>)
      }

      table.push(<tr>{children}</tr>)
    }
    return table;
}

const Sheet = (props) => {
  console.log('props.chords=' + props.sheet.chords)

  return (
    <div>
        <table>
            {createChordTable(props.sheet.chords)}
        </table>
    </div>
  )
}

export default Sheet
