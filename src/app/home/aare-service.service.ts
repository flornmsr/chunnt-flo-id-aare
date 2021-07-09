import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Aare } from './aare.model';

@Injectable()
export class AareService {

  constructor(private http: HttpClient) { }

  getCurrentAareData() : Observable<Aare>{
    return this.http.get<Aare>('https://aareguru.existenz.ch/v2018/current?city=bern&app=my.app.ch&version=1.0.42');
  }
}
