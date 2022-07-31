export class User {
  id: number | null;
  username: string;
  password: string;
  email: string;
  birthday: Date;
  roles: null;

  constructor(
    id: number | null,
    username: string,
    password: string,
    email: string,
    birthday: Date,
    roles: string[]
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.roles = null;
  }
}
