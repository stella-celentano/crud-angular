import { Component, OnInit } from '@angular/core'
import { Series } from './series.model'
import { SeriesService } from './series.service'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public serie: Series[]

  constructor(private serieService: SeriesService) { }

  ngOnInit() {
    this.getSeries()
  }

  getSeries() {
    this.serieService.getSeries().subscribe((serie) => {
      this.serie = serie['data']
    })
  }

}
