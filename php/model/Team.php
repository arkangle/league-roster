<?php
namespace model;
class Team extends \Model {
  function coaches() {
    return $this->has_many('model\Coach');
  }
  static function remaining_season($orm, $season_id) {
    return $orm->
      select('team.*')->
      join('season', array('season.league_id', '=', 'team.league_id'))->
      left_outer_join('season_team', 'season_team.team_id = team.id AND season_team.season_id = season.id')->
      where('season.id', $season_id)->
      where_null('season_team.id');
  }
}
