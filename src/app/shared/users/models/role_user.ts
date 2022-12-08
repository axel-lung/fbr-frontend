export class RoleUser {
  username: string;
  roleName: string;

  constructor(
    username: string,
    roleName: string
  ) {
    this.roleName = roleName;
    this.username = username;
  }
}
