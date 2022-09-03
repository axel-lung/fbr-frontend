import { Match } from "./match";
import { Team } from "./team";
import { User } from "./user";

export class Bet {
  id: number | null;
  betTeam: Team;
  betMatche: Match;
  betUser: User;

  constructor(
    id: number | null,
    betTeam: Team,
    betMatche: Match,
    betUser: User
  ) {
    this.id = id;
    this.betTeam = betTeam;
    this.betMatche = betMatche;
    this.betUser = betUser;
  }
}
