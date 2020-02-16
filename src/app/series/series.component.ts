import { Component, OnInit } from '@angular/core'
import { Series } from './series.model'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public serie: Series[]

  constructor( ) { }

  ngOnInit() {
  }

}
