import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalTickets: number = 0;
  @Input() ticketsPerPage: number = 6;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number = 1;

  constructor() {}

  get totalPages(): number {
    return Math.ceil(this.totalTickets / this.ticketsPerPage);
  }

  goToPreviousPage(): void {
    //why this is wrong if(!this.currentPage===1) ?
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.emitPageChange();
  }

  goToNextPage(): void {
    if (this.currentPage === this.totalPages) return;
    this.currentPage++;
    this.emitPageChange();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.emitPageChange();
    }
  }

  getPageNumbers(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 3) {
      if (currentPage <= 2) endPage = 3;
      else if (currentPage >= totalPages - 1) startPage = totalPages - 2;
      else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    const pageNumbers: number[] = [];
    for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);
    return pageNumbers;
  }

  emitPageChange(): void {
    this.pageChanged.emit(this.currentPage);
  }
}
