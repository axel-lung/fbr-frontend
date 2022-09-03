export class Team{
  id: number | null;
  name: string;
  shortName: string;
  tla: string;
  crest: string;

  constructor(
    id: number | null,
    name: string,
    shortName: string,
    tla: string,
    crest: string
  ) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crest = crest;
  }
}
