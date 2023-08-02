import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../interfaces/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  totalTickets: number;
  ticketsPerPage: number = 6;
  tickets: Ticket[];

  constructor(private _ticketService: TicketService) {
    this.tickets = this._ticketService.getTickets();
    this.totalTickets = this.tickets.length;
  }

  getPaginatedTickets(): Ticket[] {
    const startIndex = (this.currentPage - 1) * this.ticketsPerPage;
    return this.tickets.slice(startIndex, startIndex + this.ticketsPerPage);
  }

  currentPage: number = 1;
  onPageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
