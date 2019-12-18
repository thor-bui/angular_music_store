import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artists = [];
  albums = [];
  constructor(private route: ActivatedRoute, private router: Router, private searchServive: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
    })

    this.searchServive.getArtists(this.id).subscribe((artist: any) => {
      this.artists = artist;
      console.log(this.artists);
    });

    this.searchServive.setArtistId(this.id);
  }

}
