import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Menu } from '../interfaces/menu';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {
   }

   getMenu() : Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
   }

   //create
  createuser(data:any){
    return this.http.post<any>("http://localhost/apiProyecto/public/api/clientes",data)
    .pipe(map((data:any)=>{
     console.log(data); 
     return data;
    }))
     }
   //displaying
     getuser(){
       return this.http.get("http://localhost/apiProyecto/public/api/clientes")
     }
   //delete
   
   delete(user:any){
     return this.http.delete("http://localhost/apiProyecto/public/api/clientes/"+user.id)
   }
   //pass through params
   fetchdata(id:number){
   return this.http.get<any>("http://localhost/apiProyecto/public/api/clientes/"+id)
   }
   
   //update
   update(data:any,id:number){
   return this.http.put<any>("http://localhost/apiProyecto/public/api/clientes/"+id,data)
   .pipe(map((res:any)=>{
     return res;
   }))
   }
}
