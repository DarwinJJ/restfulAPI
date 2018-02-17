import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();
  }

  getTasks(){
  // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
  // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));


  }
  getOneTask(){
    let tempObservable = this._http.get("/tasks/5a85e440d3bc652a904de181");
    tempObservable.subscribe(data => console.log("Got one task!", data))
  }
}
