import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  films: any;
  searchEvent(searchTerm: string) {
    this.apiService.fetchFilms(searchTerm).subscribe((data: any) => {
      this.films = data

    })
  }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.films)
  }

}
