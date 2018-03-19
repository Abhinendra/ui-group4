import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NseServiceService {

  constructor(private http: Http) { }

public getJSON(sectorName:string): Observable<any> {
    return this.http.get('http://localhost:9080/topFive/display/'+sectorName)
                    .map((res: any) => res.json())
                    .catch((error: any) => error);
}

}
