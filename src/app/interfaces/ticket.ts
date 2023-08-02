export interface Ticket {
  name: string;
  id: string;
  status: string;
  date: {
    ddmmyy: string;
    time: string;
  };

  selectionCriteria: string[];
  operations: string[];
  progress: {
    firstProgress: number;
    secondProgress: number;
    thirdProgress: number;
  };

  timeFrame: string;
}
