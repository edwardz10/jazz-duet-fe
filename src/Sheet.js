import React from 'react'

function createChordTable(chords) {
    let chordsDisplayed = [];

    for (var i = 0; i < chords.length; i += 8) {
        chordsDisplayed.push(chords.slice(i, i + 8));
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
  console.log('props.chords=' + props.chords)

  return (
    <div>
        <table>
            {createChordTable(props.chords)}
        </table>
    </div>
  )
}

export default Sheet
