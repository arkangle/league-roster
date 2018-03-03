<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class SeasonTeams extends Base {
  function create(Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $season_team = \model\SeasonTeam::create();
    $season_team->season_id = $args['id'];
    $season_team->team_id = $data['team_id'];
    $season_team->save();
    return $response->withJson($season_team->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $season_team = \model\SeasonTeam::filter('names')->find_one($args['id']);
    if($season_team) {
      return $response->withJson($season_team->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $season_teams = \model\SeasonTeam::filter('names')->where('season_id', $args['id'])->order_by_asc('team.name')->find_array();
    return $response->withJson($season_teams, 200);
  }

  function remaining(Request $request, Response $response, array $args) {
    $teams = \model\Team::filter('remaining_season', $args['id'])->order_by_asc('team.name')->find_array();
    return $response->withJson($teams, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $season_team = \model\SeasonTeam::find_one($args['id']);
    if($season_team) {
      $season_team->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }
}
