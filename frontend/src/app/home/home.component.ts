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
  activePageNum = 1;
  backPageButton = true;
  pageBracket: number[] = [1, 2, 3, 4, 5];
  nextPageButton = false;

  
  ngOnInit(): void {
    this.objectAPI.getObjects(1).subscribe(res => { this.arts = res; })
  }

  pageNumberClicked(page: number) {
    console.log('Hello')
    if(page !== this.activePageNum) {
      this.objectAPI.getObjects(page).subscribe(res => { this.arts = res; });
      (<HTMLButtonElement>document.getElementById('page-num-'+this.activePageNum)).style.borderBottom = '0px';
      (<HTMLButtonElement>document.getElementById('page-num-'+page)).style.borderBottom = '0.25px solid #BD4B4B';
      this.activePageNum = page
    }
  }

  changePageBracket(direction: string) {
    if(direction === 'next' && this.pageBracket[0] < 9996) {
      for(let i = 0; i < 5; i++) {
        this.pageBracket[i] = this.pageBracket[i] + 5;
      }
      this.pageNumberClicked(this.pageBracket[0]);
    } else if(direction === 'back'  && this.pageBracket[0] > 1) {
      console.log(this.pageBracket[0])
      for(let i = 0; i < 5; i++) {
        this.pageBracket[i] = this.pageBracket[i] - 5;
      }
      this.pageNumberClicked(this.pageBracket[0]);
    }
  }
}
