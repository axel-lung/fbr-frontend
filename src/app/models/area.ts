export class Area {
  id: number | null;
  name: string;
  countryCode: string;
  flag: string;
  parentArea: Area;

  constructor(
    id: number | null,
    name: string,
    countryCode: string,
    flag: string,
    parentArea: Area
  ) {
    this.id = id;
    this.name = name;
    this.countryCode = countryCode;
    this.flag = flag;
    this.parentArea = parentArea;
  }
}
