//import student interface
import {Land} from "./land";
//import this to make http requests
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
//we've defined our base url here in the env
import {environment} from "./../environments/environment";
import { Injectable } from "@angular/core";
// ....
//class apiService
@Injectable({ providedIn: 'root' })

export class ApiService {

  baseUrl: string = environment.baseURL;

  constructor(private httpClient: HttpClient) { }

  /**
   * This method returns Land details
   */
  getLands(): Observable<Land[]>{
    return this.httpClient.get<Land[]>("http://localhost:8081/land/list");
  }
}
