import { Match } from "./match";

export class Room {
  id: number | null;
  name: string;
  playerLimit: number;
  dateFrom: Date;
  dateTo: Date;
  balance: number;
  isCashPrice: boolean;
  matches: Match[];

  constructor(
    id: number | null,
    name: string,
    playerLimit: number,
    dateFrom: Date,
    dateTo: Date,
    balance: number,
    isCashPrice: boolean,
    matches: Match[]
  ) {
    this.id = id;
    this.name = name;
    this.playerLimit = playerLimit;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.balance = balance;
    this.isCashPrice = isCashPrice;
    this.matches = matches;
  }
}
