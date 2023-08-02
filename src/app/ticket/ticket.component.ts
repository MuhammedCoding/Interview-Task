import { Ticket } from './../interfaces/ticket';
import { Component, Input } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() ticket: Ticket | undefined;

  constructor(private _ticketService: TicketService) {
    // this.tickets = this._ticketService.getTickets();
  }

  getStatusImage(status: string = 'New'): string {
    switch (status) {
      case 'Queued':
        return '../../assets/images/queue.svg';
      case 'Running':
        return '../../assets/images/refresh icon.svg';
      case 'Finished':
        return '../../assets/images/finished.svg';
      default:
        return '../../assets/images/New task icon.svg';
    }
  }

  showAllOperations: boolean = false;

  toggleViewMore() {
    this.showAllOperations = !this.showAllOperations;
  }
}
