import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TutoserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3200/classes"

  getlec(){
    return this.http.get(this.url)
  }

  


  saveClasses(data:any){
    return this.http.post('http://localhost:3200/savelect',data)
  }

  delProd(id:any){
    return this.http.delete(`http://localhost:3200/product/${id}`)
  }
  updateProd(data:any,id:any){
    return this.http.put(`http://localhost:3200/updatelec/${id}`,data)
  }

  getCurrentData(id:any){
    return this.http.get(`(this.url)/${id}`)
  }




}
