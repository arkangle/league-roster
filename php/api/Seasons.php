<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class Seasons extends Base {
  function create(Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $season = \model\Season::create();
    $season->league_id = $args['id'];
    $season->name = $data['name'];
    $season->save();
    return $response->withJson($season->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $season = \model\Season::find_one($args['id']);
    if($season) {
      return $response->withJson($season->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $seasons = \model\Season::where('league_id',$args['id'])
                            ->order_by_asc('name')
                            ->find_array();
    return $response->withJson($seasons, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $season = \model\Season::find_one($args['id']);
    if($season) {
      $season->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }

  function update(Request $request, Response $response, array $args) {
    $season = \model\Season::find_one($args['id']);
    if($season) {
      $data = $request->getParsedBody();
      $season->name = $data['name'];
      $season->save();
      return $response->withJson($season->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }
}

