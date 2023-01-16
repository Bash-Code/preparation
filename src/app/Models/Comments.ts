import {User} from "./User";

export class Comments{
  private _id : string;
  private _comment : string;
  private _user : User;


  constructor(id: string, comment: string, user: User) {
    this._id = id;
    this._comment = comment;
    this._user = user;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
