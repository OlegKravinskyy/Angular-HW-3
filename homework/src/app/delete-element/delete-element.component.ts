import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.css'],
})
export class DeleteElementComponent {
  elements = [
    {
      id: 1,
      text: 'Element1',
      visible: true,
    },
    {
      id: 2,
      text: 'Element2',
      visible: true,
    },
    {
      id: 3,
      text: 'Element3',
      visible: true,
    },
  ];

  removeElementById(id: number): void {
    const element = this.elements.find((e) => e.id === id);
    if (element) {
      element.visible = false;
    }
  }
}
