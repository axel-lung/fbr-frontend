import { Area } from "./area";

export class Competition{
  id: number | null;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  area: Area;

  constructor(
    id: number | null,
    name: string,
    code: string,
    type: string,
    emblem: string,
    plan: string,
    area: Area
  ) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.type = type;
    this.emblem = emblem;
    this.plan = plan;
    this.area = area
  }
}
