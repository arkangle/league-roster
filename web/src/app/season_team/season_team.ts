export class SeasonTeam {
  id: number = -1;
  season_id: number;
  team_id: number;
  team_name: string;
  season_name: string;
  constructor(season_id: number) {
    this.season_id = season_id;
  }
}
