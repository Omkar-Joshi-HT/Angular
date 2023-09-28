import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalRecords!: number;
  @Input() recordsPerPage!: number;
  @Input() itemsPerPageOptions!: number[];
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  currentPage = 1;


  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
  onItemsPerPageChange(event: any): void {
    const value = event.target.value;
    this.itemsPerPageChange.emit(value);
    this.currentPage = 1;
    this.pageChange.emit(this.currentPage);

  }

  getDisplayText(): string {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.recordsPerPage, this.totalRecords);
    return `${startIndex}-${endIndex} of ${this.totalRecords}`;
  }
}