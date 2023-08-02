import { Injectable } from '@angular/core';
import { Ticket } from './interfaces/ticket';
import { MOCK_TICKETS } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor() {
    // test
  }

  getTickets(): Ticket[] {
    return MOCK_TICKETS;
  }
}
