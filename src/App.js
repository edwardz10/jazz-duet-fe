import React, { Component } from 'react';
import Standard from './standard';
import StandardsList from './standards-list';

var standards = [
    {
        id: 0,
        name: 'There Will Never Be Another You',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=lkB9w50wGPI',
        chords: [
            'Eb', 'Eb', 'Dm7b5', 'G7', 'Cm7', 'Cm7', 'Bbm7', 'Eb7', 'Ab', 'Db7', 'Eb', 'Cm7', 'F7', 'F7', 'Fm7', 'Bb7',
            'Eb', 'Eb', 'Dm7b5', 'G7', 'Cm7', 'Cm7', 'Bbm7', 'Eb7', 'Ab', 'Db7', 'Eb', 'Am7b5 D7', 'Gm7 Ab', 'Gm7 C7', 'Fm7 B7', 'Eb'
        ]

    },
    {
        id: 1,
        name: 'All Of Me',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=9l5U_v39h1s',
        chords: [
            'C', 'C', 'E7', 'E7', 'A7', 'A7', 'Dm7', 'Dm7', 'E7', 'E7', 'Am7', 'Am7', 'D7', 'D7', 'Dm7', 'G7',
            'C', 'C', 'E7', 'E7', 'A7', 'A7', 'Dm7', 'Dm7', 'F6', 'Fm7', 'C', 'A7', 'Dm7', 'G7', 'C', 'A7'
        ]

    },
    {
        id: 2,
        name: 'Hungaria',
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=l_HKqgi32Rw',
        chords: [
            'G6/9', 'G6/9', 'G#6/9', 'G#6/9', 'G6/9', 'G6/9', 'E7', 'E7', 'A7', 'A7', 'D7', 'D7', 'G/B', 'BbO', 'Am7', 'D7',
            'G6/9', 'G6/9', 'G#6/9', 'G#6/9', 'G6/9', 'G6/9', 'E7', 'E7', 'Am6', 'Cm6', 'G/B', 'BbO', 'Am7', 'D7', 'G', 'D7'
        ]

    }

]

export default class App extends Component {
    constructor () {
        super();
    }

    render() {
        var standard = standards[1];

        return (
            <div>
                <StandardsList standards = {standards} />
            </div>
        );
    }
}

