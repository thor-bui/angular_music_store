import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // tslint:disable-next-line: max-line-length
  private token = 'Bearer BQC7P9F6PIyyON-I0loMGeeXt2jzKBZugyXrTRQDitUgfqvY6D5_F92oNocZwI_vlDb7dlzNDiOLj5bhf-8fROmz335bNuOHeU5ePUO_EWgHXtsQ2Lz456mRHHx8_f0Gnqzusi9-2quEEDEbsVIvfvFj_TV1I-KRwA';
  private artistsUrl = 'https://api.spotify.com/v1/search?type=artist&q=';
  private artistUrl: string;
  private albumUrl: string;
  artistId;
  constructor(private http: HttpClient) { }

  searchArtist(name: string) {
    name = name.replace(/\s/g, '');
    const url = this.artistsUrl + name;
    return this.http.get(url, {
      headers: {
        'Content-Type':  'application/json',
        Authorization: this.token
      }
    });
  }

  getArtists(id: string){
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistUrl, {
      headers: {
        'Content-Type':  'application/json',
        Authorization: this.token
      }
    });
  }

  setArtistId(id) {
    this.artistId = id;
  }

  getArtistId() {
    return this.artistId;
  }

  getAlBums(artistId: string) {
    this.albumUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=us';
    return this.http.get(this.albumUrl, {
      headers: {
        'Content-Type':  'application/json',
        Authorization: this.token
      }
    });
  }
}
