function Song(title, artist) {
  this.title = title;
  this.artist = artist;
}

Song.prototype.play = function () {
  console.log(`Playing: ${this.title} by ${this.artist}`);
};


let song1 = new Song("Let There Be Love", "Oasis");
let song2 = new Song("Back to Me", "Rose");
song1.play();
song2.play();
