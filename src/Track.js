import qs from 'query-string';
import React, {Component} from 'react';
 
export default class Track extends Component {

  constructor(props) {
    super(props);
    this.init();

    window['onYouTubeIframeAPIReady'] = (e) => {
        console.log('get here');
        console.log('props: ' + this.props);
        console.log('videoId: ' + this.props.video);
        const videoId = this.getIdFromVideoString(this.props.video);

        this.YT = window['YT'];
        this.reframed = false;
        this.player = new window['YT'].Player('player', {
            videoId: videoId,
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this)
            },
            width: "0",
            height: "0"
        });
    };
  }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() === 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
          console.log('paused @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
      default:
        console.log('unsupported event');
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      default:
        break;
    };
  };
/*
  static urlMap = new Map([
    ['youtube', 'http://www.youtube.com/embed/'],
    ['vimeo', 'http://player.vimeo.com/video/'],
    ['rutube', 'https://rutube.ru/video/']
  ]);
*/
  getIdFromVideoString (vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);

    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  stopVideo() {
    this.player.stopVideo();
  }

  render() {
    return (
        <div>
            <div id="player"></div>
            <div>
                <button id='playButton' onClick={this.playVideo.bind(this)}>Play!</button>
                <button id='pauseButton' onClick={this.pauseVideo.bind(this)}>Pause!</button>
                <button id='stopButton' onClick={this.stopVideo.bind(this)}>Stop!</button>
            </div>
        </div>
    );

  }
}

