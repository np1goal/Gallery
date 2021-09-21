import { Component, OnInit } from '@angular/core';
import { DepartmentApiService } from 'src/app/services/department-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private departmentApi: DepartmentApiService) { }

  departments: any = []

  ngOnInit(): void {
    this.departmentApi.getDepartments().subscribe((res) => { this.departments = res; console.log(this.departments['departments'])})
  }

}
