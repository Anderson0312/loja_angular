import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>();
  categories = ['sapatos', 'camisas', 'calças']

  constructor() { }

  ngOnInit(): void {
  }

  onshowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
