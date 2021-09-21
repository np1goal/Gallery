import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  constructor() { }

  artist_display =  "Don A. DuBroff\nAmerican, born 1951";
  date_display = "1981"
  id = 102470
  image_link = "https://www.artic.edu/iiif/2/99837c39-af9d-a080-63c0-b34268f41674/full/843,/0/default.jpg"
  title = "Our Lady of Sorrows Basilica, Chicago"

  ngOnInit(): void {
  }
}
