import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent implements OnInit {

  favData: any = []

  constructor() { }

  ngOnInit(): void {


    for (let item of Object.entries({ ...localStorage })) {
      this.favData.push((JSON.parse(item[1] as string)))
    }
    console.log(this.favData)
  }

}
