import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Api } from '../../constants/api';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http:HttpClient) {}
   
  signIn(userData):Observable<any>{
     return this.http.post(Api.HOSTURL+Api.SIGNIN, userData);
   }
   resetPassword(data):Observable<any>{
     return this.http.put(Api.HOSTURL+Api.FORGETPASSWORD, data);
   }
   getLocations():Observable<any>{
     return this.http.get(Api.HOSTURL+Api.LOCATION);
   }
   getLocations_admin():Observable<any>{
    return this.http.get(Api.HOSTURL+Api.LOCATION_ADMIN);
   }
   createLocation(data):Observable<any>{
     return this.http.post(Api.HOSTURL+Api.LOCATION, data);
   }
   updateLocation(data, id):Observable<any>{
     return this.http.put(Api.HOSTURL+Api.LOCATION +"/"+ id, data);
   }
   getDepartment():Observable<any>{
     return this.http.get(Api.HOSTURL+Api.DEPARTMENT);
   }
   getDepartment_admin():Observable<any>{
    return this.http.get(Api.HOSTURL+Api.DEPARTMENT_ADMIN);
  }
   createDepartment(data):Observable<any>{
     return this.http.post(Api.HOSTURL+Api.DEPARTMENT, data);
   }
   updateDepartment(data, id):Observable<any>{
     return this.http.put(Api.HOSTURL+Api.DEPARTMENT +"/"+id, data);
   }
   getSection_admin():Observable<any>{
     return this.http.get(Api.HOSTURL+Api.SECTION_ADMIN);
  }
   createSection(data):Observable<any>{
     return this.http.post(Api.HOSTURL+Api.DEPARTMENT, data);
   }
   updateSection(data, id):Observable<any>{
    return this.http.put(Api.HOSTURL+Api.DEPARTMENT + "/" +id, data);
   }
}
