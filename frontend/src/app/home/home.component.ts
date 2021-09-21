import { Component, OnInit } from '@angular/core';
import { ObjectsApiService } from 'src/app/services/objects-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private objectAPI: ObjectsApiService) { }

  arts: any = []
  iiifLink: string = ''
  
  ngOnInit(): void {
    this.objectAPI.getObjects().subscribe(res => { this.arts = res; this.iiifLink = this.arts['config']['iiif_url']; console.log(this.arts) })
  }

}
