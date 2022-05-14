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


  favourite: boolean = false;

  likeEvent() {
    // alert("Added " + this.filmData.Title + " to your favourites!")
    this.favourite = true;
    console.log(this.favourite)
    console.log(this.filmData)
  }

  dislikeEvent() {
    // alert("Removed " + this.filmData.Title + " from your favourites!")
    this.favourite = false;
    console.log(this.favourite)

  }



  constructor() { }

  ngOnInit(): void {


    this.filmData = {
      "Title": this.title,
      "Year": this.year,
      "imdbID": this.imdbID,
      "Type": "movie",
      "Poster": this.poster == "N/A" ? "../../../assets/poster.png" : this.poster
    }
  }

}
