import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { MyserviceService } from 'src/app/services/myservice.service';
import { employee } from '../../../interfaces/employeemodel';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;


}




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  /*
  listUsuarios: Usuario[] = [
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" },
    {id:'1', usuario: "LuisFel", nombre: "Juan", correo: "Ramirez@gmail.com", contrasena: "Hombre" }
 

  ];

  displayedColumns: string[] = ['id','usuario', 'nombre','correo','contrasena','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  */

  public loading: boolean = false;
  public empy: employee = {} as employee;
  myemployee: any;
  constructor(private employeeservice: MyserviceService) { }

  ngOnInit(): void {
    this.getmyuser();
  }

  getmyuser() {
    this.employeeservice.getuser().subscribe(res => {
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

  deleteuser(user: any) {
    if (confirm('Are you sure to delete?'))
      this.employeeservice.delete(user).subscribe(() => {
        this.getmyuser();
      })
  }



}
