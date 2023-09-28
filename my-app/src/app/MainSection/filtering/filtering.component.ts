import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  selectedRoleFilter: string = 'all'; 

  @Output() roleFilterChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onRoleFilterChange() {
    this.roleFilterChanged.emit(this.selectedRoleFilter);
  }
}
