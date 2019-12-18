import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  id;
  albums = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.id = this.searchService.getArtistId(); 
    this.searchService.getAlBums(this.id).subscribe((data: any) => {
      this.albums = data.tracks;
      console.log(this.albums);
    });
  }


}
