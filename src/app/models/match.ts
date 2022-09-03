import { Area } from "./area";
import { Competition } from "./competition";
import { Team } from "./team";

export class Match {
  id: number | null;
  utcDate: Date;
  status:string;
  matchday : number;
  stage: string;
  duration: string;
  homeScore: number;
  awayScore: number;
  groupe: string;
  area: Area;
  competition: Competition;
  homeTeam: Team;
  awayTeam: Team;
  winnerTeam: Team;

  constructor(
    id: number | null,
    utcDate: Date,
    status:string,
    matchday : number,
    stage: string,
    duration: string,
    homeScore: number,
    awayScore: number,
    groupe: string,
    area: Area,
    competition: Competition,
    homeTeam: Team,
    awayTeam: Team,
    winnerTeam: Team,
  ) {
    this.id = id;
    this.utcDate = utcDate;
    this.status = status;
    this.matchday = matchday;
    this.stage = stage;
    this.duration = duration;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.groupe = groupe;
    this.area = area;
    this.competition = competition;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.winnerTeam = winnerTeam;
  }
}
