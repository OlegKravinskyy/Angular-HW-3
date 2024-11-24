import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pipes',
  templateUrl: './all-pipes.component.html',
  styleUrl: './all-pipes.component.css',
})
export class AllPipesComponent {
  textOne = 'Example text';
  textTwo = 'CAPS LOCK';

  piNumber = Math.PI;

  date: Date = new Date(1991, 7, 24);

  float: number = 1.85;

  obj = {
    name: 'John',
    age: 35,
    online: true,
  };

  ngOnInit(): void {}
}
