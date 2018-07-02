import qs from 'query-string';
import React, {Component, PropTypes} from 'react';
import Sheet from './sheet';
import Track from './track';
 
export default class StandardShort extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
         <tr>
            <td>
                <a href="www.google.com">{this.props.standard.name}</a>
            </td>
         </tr>
    );
  }
}

