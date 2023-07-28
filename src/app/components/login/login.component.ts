import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading=false;

  //aca se mandar el usuario y contraseña
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,private router:Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  //se muestra el usuario y contraseña en la consola
  ingresar(){
    console.log(this.form);

    //obtener la informacion de los input
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    //obtener los datos
    console.log(usuario);
    console.log(password);

    //comprobar si el usarios es valido
    if(usuario=="luisfel" && password=="123456"){
      //direccionamos al dashbord
      this.fakeLoading();


    }else{
      //mostramos un mensaje de error. 
      this.error();
      //resetear los input del formulario de login
      this.form.reset();
    }
  }

  //error al ingresar el usuario
  error(){
    this._snackBar.open('Usuario o contraseña invalidos','',{
      duration:500,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLoading(){
    //despues de un tiempo se borra el spinner
    this.loading=true;
    setTimeout(()=>{
      //llamar al dashboard
      this.router.navigate(['dashboard']);
    },1500);
  }
  
  
}
