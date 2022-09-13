import { Match } from "./match";
import { Room } from "./room";
import { Team } from "./team";
import { User } from "./user";

export class Bet {
  id: number | null;
  hasWin: Boolean;
  team: Team;
  matche: Match;
  user: User;
  room: Room;

  constructor(
    id: number | null,
    hasWin: Boolean,
    team: Team,
    matche: Match,
    user: User,
    room: Room
  ) {
    this.id = id;
    this.hasWin = hasWin;
    this.team = team;
    this.matche = matche;
    this.user = user;
    this.room = room;
  }
}
