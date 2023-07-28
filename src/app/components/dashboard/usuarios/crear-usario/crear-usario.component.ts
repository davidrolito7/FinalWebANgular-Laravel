import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usario',
  templateUrl: './crear-usario.component.html',
  styleUrls: ['./crear-usario.component.css']
})
export class CrearUsarioComponent {

  /*
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        usuario: ['', Validators.required],
        nombre: ['', Validators.required],
        correo: ['', Validators.required],
        contrasena: ['', Validators.required],




      }
    )
  }
*/
  
  public empy:Usuario={} as Usuario;

 
  constructor(private employeeservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }
   add(){
    this.employeeservice.createuser(this.empy).subscribe((data:Usuario)=>{
      console.log(data)
      alert("Datos ingresados correctamente")
    this.router.navigate(['/dashboard/usuarios'])
    },
    (error)=>{
      console.error(error);
      alert("Datos no ingresados")
      this.router.navigate(['/dashboard/inicio'])
    })
   }
}
