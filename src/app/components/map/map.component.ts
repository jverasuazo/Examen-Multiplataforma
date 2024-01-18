import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true
})
export class MapComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic29sZGllcmhlYWQiLCJhIjoiY2xsd2lkdmcwMGhjZzNnbnNkZWFkNHh3ZyJ9.7uE86t38ERr4ItEamH7Kkg'

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    })
  }
}
