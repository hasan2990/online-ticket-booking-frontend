import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login} from '../login/login.component';
import { Register } from '../register/register.component';
import { Busesinfo } from '../userbusinfo/userbusinfo.component';
import { map } from 'rxjs/operators';
import { SelectedBusesResponse } from '../Models/SelectedBusesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseApiUrl = 'https://localhost:44320/api';

  LoginUser(loginObj : Login) : Observable<Login>{
      return this.http.post<Login>(this.baseApiUrl + '/login', loginObj);
  }
  RegisterUser(RegisterObj : Register) : Observable<Register>{
    return this.http.post<Register>(this.baseApiUrl + '/registration', RegisterObj);
  }
  // GetBusesByUser(UserObj : Busesinfo) : Observable<Busesinfo>{
  //   console.log("Inside getBusesByUser");
  //   return this.http.post<Busesinfo>(this.baseApiUrl + '/GetBuses/GetBusDetails', UserObj);
  // }

  GetBusesByUser(UserObj: Busesinfo): Observable<SelectedBusesResponse> {
    console.log("Inside getBusesByUser");
    return this.http.post<SelectedBusesResponse>(this.baseApiUrl + '/GetBuses/GetBusDetails', UserObj);
  }
}