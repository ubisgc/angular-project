import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { Land } from './land';
import { ApiService } from './api.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  student: Land[] = [];

  public displayedColumns = ['name', 'capital' ];

  public dataSource = new MatTableDataSource<Land>();

  constructor(private landApiService: ApiService) {

  }

  ngOnInit(): void {
    this.getLandData();
  }
  
  getLandData(){
    this.landApiService.getLands()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })
  }
  title = 'my-first-project';
}
