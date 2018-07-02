import React, {Component, PropTypes} from 'react';
import StandardShort from './standard-short';
 
export default class StandardsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
            <table>
               <tbody>
                  {this.props.standards.map((standard, i) => <StandardShort key = {i} standard = {standard} />)}
               </tbody>
            </table>
        </div>
    );
  }
}

