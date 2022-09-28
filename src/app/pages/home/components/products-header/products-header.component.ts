import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: "products-header-component.html",
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {

  //para enivar para outro component o numero de colunas
  @Output() columnsCountChange = new EventEmitter<number>();

  sort_desc = 'Ordem';
  itemsMostrarConta = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort_desc = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsMostrarConta = count;
  }

  onColunmnsUpdated(colNum: number): void {
    this.columnsCountChange.emit(colNum);
  }

}
