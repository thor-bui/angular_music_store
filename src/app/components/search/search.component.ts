import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputField: FormControl = new FormControl();
  listItems: any[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.inputField.valueChanges
      // tslint:disable-next-line: deprecation
      .subscribe(name => {
        this.searchService.searchArtist(name).subscribe(result => {
          if (result['status'] === 400) {
            return;
          }else {
            this.listItems = result['artists'].items;
          }
          console.log(this.listItems);
        });
      });

  }

}
