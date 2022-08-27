import { Role } from "./role";

export class User {
  id: number | null;
  username: string;
  password: string;
  email: string;
  birthday: Date;
  roles: Role[];

  constructor(
    id: number | null,
    username: string,
    password: string,
    email: string,
    birthday: Date,
    roles: Role[]
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.roles = roles;
  }
}
