import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ApiClientService } from '../../services/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recepies: Recipe[] = [];

  constructor( 
    private client: ApiClientService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getRecep();
  }

  getRecep() : void {
    this.client.getRecipes()
      .subscribe( recipes => this.recepies = recipes);
  }
  
  btnClick(): void {
    this.router.navigateByUrl('/new-recipe')
  }

}
