import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() title: string = "Loading...";
  @Input() year: string = "Loading...";
  @Input() imdbID: string = "";
  @Input() poster: string = "../../../assets/poster.png";

  filmData: any;
  localData: any;
  favourite: any = false;

  likeEvent() {
    // alert("Added " + this.filmData.Title + " to your favourites!")
    this.favourite = true;
    localStorage.setItem(this.filmData.imdbID, JSON.stringify(this.filmData))
  }

  dislikeEvent() {
    // alert("Removed " + this.filmData.Title + " from your favourites!")
    this.favourite = false;
    localStorage.removeItem(this.imdbID)
  }

  constructor() { }

  ngOnInit(): void {
    this.localData = localStorage.getItem(this.imdbID)
    this.favourite = JSON.parse(this.localData) != null
    this.filmData = {
      "Title": this.title,
      "Year": this.year,
      "imdbID": this.imdbID,
      "Type": "movie",
      "Poster": this.poster == "N/A" ? "../../../assets/poster.png" : this.poster
    }
  }

}
