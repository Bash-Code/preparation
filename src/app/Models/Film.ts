export class Film{
  private _id : number;
  private _vote_average : number;
  private _title:string;
  private _poster_path:string;
  private _ooriginal_title:string;
  private _overview:string;
  private _release_date:string;


  constructor(id: number, vote_average: number, title: string, poster_path: string, ooriginal_title: string, overview: string, release_date: string) {
    this._id = id;
    this._vote_average = vote_average;
    this._title = title;
    this._poster_path = poster_path;
    this._ooriginal_title = ooriginal_title;
    this._overview = overview;
    this._release_date = release_date;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get vote_average(): number {
    return this._vote_average;
  }

  set vote_average(value: number) {
    this._vote_average = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  set poster_path(value: string) {
    this._poster_path = value;
  }

  get ooriginal_title(): string {
    return this._ooriginal_title;
  }

  set ooriginal_title(value: string) {
    this._ooriginal_title = value;
  }

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }
}
