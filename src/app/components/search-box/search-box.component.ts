import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchEvent(searchTerm: string) {
    console.log(searchTerm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
