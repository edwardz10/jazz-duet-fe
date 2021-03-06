const StandardsAPI = {
    standards: [
        {
            id: 0,
            name: 'There Will Never Be Another You',
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=lkB9w50wGPI',
            chords: [
                'Eb', 'Eb', 'Dm7b5', 'G7', 'Cm7', 'Cm7', 'Bbm7', 'Eb7', 'Ab', 'Db7', 'Eb', 'Cm7', 'F7', 'F7', 'Fm7', 'Bb7',
                'Eb', 'Eb', 'Dm7b5', 'G7', 'Cm7', 'Cm7', 'Bbm7', 'Eb7', 'Ab', 'Db7', 'Eb', 'Am7b5 D7', 'Gm7 Ab', 'Gm7 C7', 'Fm7 B7', 'Eb'
            ],
			key: 'Eb',
			author: 'H. Warren'
        },
        {
            id: 1,
            name: 'All Of Me',
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=9l5U_v39h1s',
            chords: [
                'C', 'C', 'E7', 'E7', 'A7', 'A7', 'Dm7', 'Dm7', 'E7', 'E7', 'Am7', 'Am7', 'D7', 'D7', 'Dm7', 'G7',
                'C', 'C', 'E7', 'E7', 'A7', 'A7', 'Dm7', 'Dm7', 'F6', 'Fm7', 'C', 'A7', 'Dm7', 'G7', 'C', 'A7'
            ],
			key: 'C',
			author: 'G. Marks'
        },
        {
            id: 2,
            name: 'Hungaria',
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=l_HKqgi32Rw',
            chords: [
                'G6/9', 'G6/9', 'G#6/9', 'G#6/9', 'G6/9', 'G6/9', 'E7', 'E7', 'A7', 'A7', 'D7', 'D7', 'G/B', 'BbO', 'Am7', 'D7',
                'G6/9', 'G6/9', 'G#6/9', 'G#6/9', 'G6/9', 'G6/9', 'E7', 'E7', 'Am6', 'Cm6', 'G/B', 'BbO', 'Am7', 'D7', 'G', 'D7'
            ],
			key: 'G',
			author: 'folk'
        },
        {
            id: 3,
            name: 'China Boy',
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=bQeOPDvrAN4',
            chords: [
                'F', 'F', 'F', 'F', 'F', 'F', 'D7', 'D7', 'G7', 'G7', 'G7', 'G7', 'Bbm6', 'Bbm6', 'C7', 'Eb7',
                'Ab', 'Eb7', 'Ab', 'Eb7', 'Ab', 'Eb7', 'Ab', 'C7', 'F', 'F', 'F#O', 'F#O', 'Gm7', 'C7', 'F F#O', 'Gm7 C7'
            ],
			key: 'F',
			author: 'P. Boutelje'
        },
        {
            id: 4,
            name: 'Rose Room',
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=bQeOPDvrAN4',
            chords: [
                'G7', 'C7', 'F', 'F', 'F7', 'F7', 'Bb', 'Bb', 'Bbm6', 'Bbm6', 'F', 'D7', 'G7', 'G7', 'C7', 'C7',
                'G7', 'C7', 'F', 'F', 'F7', 'F7', 'Bb', 'Bb', 'Bbm6', 'Bbm6', 'F', 'D7', 'G7', 'C7', 'Am7', 'D7'
            ],
			key: 'F',
			author: 'A. Hickman'
        },
        {
            id: 5,
            name: "Django's Tiger",
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=AQW2RxwwnRo',
            chords: [
                'A', 'A', 'A', 'A', 'A/C#', 'CO', 'E7/B', 'E7', 'E7', 'E7', 'F7', 'F7', 'A/C#', 'CO', 'Bm7', 'E7', 
                'A', 'A', 'A', 'A', 'Em7', 'A7', 'D', 'D', 'D', 'D#O', 'A7', 'B7', 'E7', 'A CO', 'Bm E7' 
            ],
			key: 'A',
			author: 'D. Reinhardt'
        },
        {
            id: 6,
            name: "Limehouse Blues",
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=nr47ZhrNfUY',
            chords: [
                'C7', 'C7', 'C7', 'C7', 'A7', 'A7', 'A7', 'A7', 'G', 'G', 'B7', 'Em', 'A7', 'A7', 'D7', 'Db7', 
                'C7', 'C7', 'C7', 'C7', 'A7', 'A7', 'A7', 'A7', 'G', 'E7', 'Am', 'Am', 'Cm6', 'D7', 'G', 'G7' 
            ],
			key: 'C',
			author: 'D. Furber'
        },
        {
            id: 7,
            name: "My Melancholy Baby",
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=alEi3HUNd2E',
            chords: [
                'C', 'C', 'Bb7', 'A7', 'Dm7', 'A7', 'Dm7', 'Dm7', 'G7', 'G7', 'D7', 'G7', 'C/E', 'EbO', 'Dm7', 'G7', 
                'C', 'C', 'Bb7', 'A7', 'Dm7', 'A7', 'Dm7', 'Dm7', 'F', 'F#O', 'C', 'A7', 'Dm7', 'G7', 'C EbO', 'Dm G7' 
            ],
			key: 'C',
			author: 'E. Burnett'
		},
        {
            id: 8,
            name: "Blues For Alice",
            service: 'youtube',
            video: 'https://www.youtube.com/watch?v=UtdzMfSwXi8',
            chords: [
                'F', 'Emb5 A7b9', 'Dm7 G7', 'Cm7 F7', 'Bb', 'Bbm7 Eb7', 'Am7 D7', 'Abm7 Dbm7', 'Gm7', 'C7', 'F Dm7', 'Gm7 C7' 
            ],
			key: 'F',
			author: 'C. Parker'
        }
    ],
    all: function() { return this.standards},
    get: function(id) {
        const isStandard = s => s.id === id
        return this.standards.find(isStandard)
    }
}

export default StandardsAPI

