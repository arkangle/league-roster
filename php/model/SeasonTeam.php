<?php
namespace model;
class SeasonTeam extends \Model {
  function team() {
    return $this->belongs_to('model\Team');
  }
  function season() {
    return $this->belongs_to('model\Season');
  }
  static function names($orm) {
    return $orm->
      select('team.name', 'team_name')->
      select('season.name', 'season_name')->
      select('season_team.*')->
      join('team', array('season_team.team_id', '=', 'team.id'))->
      join('season', array('season_team.season_id', '=', 'season.id'));
  }
}
