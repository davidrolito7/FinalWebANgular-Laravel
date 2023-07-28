import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
//create
  createuser(data:any){
 return this.http.post<any>("http://127.0.0.1:8000/api/clientes",data)
 .pipe(map((data:any)=>{
  console.log(data); 
  return data;
 }))
  }
//displaying
  getuser(){
    return this.http.get("http://127.0.0.1:8000/api/clientes")
  }
//delete

delete(user:any){
  return this.http.delete("http://127.0.0.1:8000/api/clientes/"+user.id)
}
//pass through params
fetchdata(id:number){
return this.http.get<any>("http://127.0.0.1:8000/api/clientes/"+id)
}

//update
update(data:any,id:number){
return this.http.put<any>("http://127.0.0.1:8000/api/clientes/"+id,data)
.pipe(map((res:any)=>{
  return res;
}))
}

getropa(){
  return this.http.get("http://127.0.0.1:8000/api/registros")
}

deleter(ropa:any){
  return this.http.delete("http://127.0.0.1:8000/api/registros/"+ropa.id)
}

}
