<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class Teams extends Base {
  function create(Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $team = \model\Team::create();
    $team->league_id = $args['id'];
    $team->name = $data['name'];
    $team->save();
    return $response->withJson($team->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $team = \model\Team::find_one($args['id']);
    if($team) {
      return $response->withJson($team->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $teams = \model\Team::where('league_id',$args['id'])
                            ->order_by_asc('name')
                            ->find_array();
    return $response->withJson($teams, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $team = \model\Team::find_one($args['id']);
    if($team) {
      $team->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }

  function update(Request $request, Response $response, array $args) {
    $team = \model\Team::find_one($args['id']);
    if($team) {
      $data = $request->getParsedBody();
      $team->name = $data['name'];
      $team->save();
      return $response->withJson($team->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }
}

