// Implementasikan MusicPlayer yang merupakan representasi dari pemutar musik.
// MusicPlayer memiliki atribut Playlist. Playlist merupakan daftar lagu yang tersimpan.
// Sebagai gambaran, seperti pada Spotify, playlist merepresentasikan lagu-lagu yang disimpan dalam satu playlist yang sama.
// Lagu direpresentasikan dalam objek Song yang memiliki dua atribut yaitu `singer` dan `title`.
// Di Playlist juga terdapat atribut `isRepeatable` yang merepresentasikan apakah playlist tersebut akan diputar ulang jika lagu telah habis.

// Lengkapilah tiga method yang ada pada MusicPlayer yaitu AddSong, Play, dan Repeat.

// - AddSong merupakan method yang menambahkan lagu pada playlist.
// - Play merupakan method yang memutar lagu pada playlist. Pada method ini, cetaklah sebuah wording dengan format `Now playing [Singer] - [Title]`
// Sebagai contoh, jika lagu One Direction dengan judul Night Changes diputar, maka akan mengeluarkan output `Now playing One Direction - Night Changes`
// - Repeat merupakan method yang memungkinkan playlist diputar ulang jika lagu telah habis.

// Jika playlist dilakukan repeat, maka ketika lagu telah diputar semua maka akan mengulang pada urutan semula.

const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        // for (let i = 0; i < this.playlist.songs.length; i++) { //const Song Playlist tidak terpakai
        //     if (this.playlist.songs[i].title === song.title) {
        //       return;
        //     }
        //   }
        // this.playlist.songs.push(song);

        let music = new Song(song.singer, song.title) //const Song Playlist dipakai
        let listToPlay = new Playlist([music], false)
        
        if (this.playlist.isEmpty()) {
            this.playlist = listToPlay
            
        } else {
            this.playlist.songs.push(music)
        }
    }

    play() {
        // TODO: answer here
        if (this.playlist.isEmpty()) {  
            return "";
        }
        if (this.playlist.isRepeatable) {
            let playing = this.playlist.songs.shift();
            this.playlist.songs.push(playing);

            return `Now Playing ${playing.singer} - ${playing.title}`;
            
        } else {
            let playing = this.playlist.songs.shift();
            return `Now Playing ${playing.singer} - ${playing.title}`;
        }
        
    }
}
