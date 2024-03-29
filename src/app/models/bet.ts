import { Match } from "./match";
import { Room } from "../shared/rooms/models/room";
import { Team } from "./team";
import { User } from "../shared/users/models/user";

export class Bet {
  id: number | null;
  hasWin: boolean;
  team: Team;
  matche: Match;
  user: User;
  room: Room;

  constructor(
    id: number | null,
    team: Team,
    matche: Match,
    user: User,
    room: Room
  ) {
    this.id = id;
    this.hasWin = null;
    this.team = team;
    this.matche = matche;
    this.user = user;
    this.room = room;
  }
}
