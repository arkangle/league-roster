export class Coach {
  id: number = -1;
  team_id: number;
  first_name: string;
  last_name: string;
  constructor(team_id: number) {
    this.team_id = team_id;
  }
}
