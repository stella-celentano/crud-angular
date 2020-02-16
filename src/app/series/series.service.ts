import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Series } from './series.model'
import { ApiSeries } from './../app.api'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(`${ApiSeries}/series`)
  }
}
