export class GetUser {
  static readonly type = '[User] GetUser';
  constructor(public id: number){}
}

export class ChangePassword {
  static readonly type = '[User] ChangePassword';
  constructor(public password: string){}
}
