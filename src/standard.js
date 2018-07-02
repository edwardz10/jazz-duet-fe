import qs from 'query-string';
import React, {Component, PropTypes} from 'react';
import Sheet from './sheet';
import Track from './track';
 
export default class Standard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {name, service, video, chords} = this.props;
    console.log('name=' + name);
    console.log('service=' + service);
    console.log('video=' + video);

    return (
        <div>
            <h1>{name}</h1>
            <Sheet chords={this.props.chords} />
            <Track service={this.props.service} video={this.props.video} />
        </div>
    );
  }
}

