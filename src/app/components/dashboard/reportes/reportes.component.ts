import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ropa } from 'src/app/interfaces/ropa';
import { MyserviceService } from 'src/app/services/myservice.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  public loading: boolean = false;
  public empy: Ropa = {} as Ropa;
  myemployee: any;
  constructor(private employeeservice: MyserviceService) { }

  ngOnInit(): void {
    this.getmyropa();
  }

  getmyropa() {
    this.employeeservice.getropa().subscribe(res => {
      setTimeout(() => {
        this.myemployee = res;
        //console.log(res);
      }, 2000)
      setTimeout(() => {
        this.loading = true;
        //console.log(res);
      }, 1500)

    })
  }

  deleteuser(ropa: any) {
    if (confirm('Are you sure to delete?'))
      this.employeeservice.deleter(ropa).subscribe(() => {
        this.getmyropa();
      })
  }


}
