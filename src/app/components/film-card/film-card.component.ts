import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  favourite: boolean = false;

  likeEvent() {
    // alert("Added " + this.filmData.Title + " to your favourites!")
    this.favourite = true;
    console.log(this.favourite)
  }

  dislikeEvent() {
    // alert("Removed " + this.filmData.Title + " from your favourites!")
    this.favourite = false;
    console.log(this.favourite)

  }

  filmData = {
    "Title": "The Great Gatsby",
    "Year": "2013",
    "imdbID": "tt1343092",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
    "Poster2": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
