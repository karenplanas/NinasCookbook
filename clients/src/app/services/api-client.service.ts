import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private localhostBaseURL = 'http://localhost:3000';
  private localhostRecipesURL = `${this.localhostBaseURL}/recipes`;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.localhostRecipesURL)
  }

}
