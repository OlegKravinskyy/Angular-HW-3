import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrl: './directive-list.component.css',
})
export class DirectiveListComponent {
  arrayList: string[] = ['First line', 'Second line', 'Third line'];
  lastClicked: string | null = null;

  addArray() {
    this.arrayList.push('New line' + (this.arrayList.length + 1));
  }

  displayContent(item: string) {
    this.lastClicked = item;
  }

  ngOnInit(): void {}
}
