import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../interfaces/commit.interface';

const url = 'http://localhost:3000/bryanmps07/home-test-backend';
@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private httpClient: HttpClient) { }

  getCommit(): Observable<Commit[]> {
    return this.httpClient.get<Commit[]>(url);
  }
}
