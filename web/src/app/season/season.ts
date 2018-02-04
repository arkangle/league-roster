export class Season {
  id: number = -1;
  league_id: number;
  name: string;
  constructor(league_id: number) {
    this.league_id = league_id;
  }
}
