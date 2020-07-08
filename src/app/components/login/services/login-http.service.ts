import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { LoginModel } from "../models/login.model";
import { Observable } from "rxjs";
import { LoginResponseModel } from "../models/login-response.model";
import { baseUrl } from "../../../../routes/apiRoutes";

@Injectable()
export class LoginHttpService {
  private loginUrl = `${baseUrl}/sessions`
  constructor(private http: HttpClient) {

  }
  login(login: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(this.loginUrl, login)
  }
}
