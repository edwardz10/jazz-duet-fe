import React, {Component, PropTypes} from 'react';
 
export default class Sheet extends Component {

  constructor(props) {
    super(props);
  }

  createChordTable = () => {
    let chordsDisplayed = [];

    for (var i = 0; i < this.props.chords.length; i += 8) {
        chordsDisplayed.push(this.props.chords.slice(i, i + 8));
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


  render() {
    return (
        <div>
            <table>
                {this.createChordTable()}    
            </table>
        </div>
    );
  }
}

