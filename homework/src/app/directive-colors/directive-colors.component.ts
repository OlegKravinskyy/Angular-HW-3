import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-colors',
  templateUrl: './directive-colors.component.html',
  styleUrls: ['./directive-colors.component.css'],
})
export class DirectiveColorsComponent {
  selectedColor: string = 'transparent';

  changeColor(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedColor = target.value;
  }
}
