import { Role } from "./role";
import { Room } from "../../rooms/models/room";

export class User {
  id: number | null;
  username: string;
  password: string;
  email: string;
  birthday: Date;
  roles: Role[];
  rooms: Room[] | null;

  constructor(
    id: number | null,
    username: string,
    password: string,
    email: string,
    birthday: Date,
    roles: Role[],
    rooms: Room[]
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.roles = roles;
    this.rooms = rooms;
  }
}
