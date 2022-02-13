import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  newRecipeForm?: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newRecipeForm = this.formBuilder.group({
      recipeName: "",
      ingredients: "",
      steps: ""
    });

    this.newRecipeForm.valueChanges.subscribe( form => console.log(form));
  }

}
