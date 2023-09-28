// src/app/sorting/sorting.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  selectedSortOption: string = 'Sort by';
  @Output() sortChange = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void { }

  onSortChange(): void {
    this.sortChange.emit(this.selectedSortOption);
  }
}