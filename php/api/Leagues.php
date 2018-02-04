<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class Leagues extends Base {
  function create(Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $league = \model\League::create();
    $league->organization_id = $args['id'];
    $league->name = $data['name'];
    $league->save();
    return $response->withJson($league->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $league = \model\League::find_one($args['id']);
    if($league) {
      return $response->withJson($league->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $leagues = \model\League::where('organization_id',$args['id'])
                            ->order_by_asc('name')
                            ->find_array();
    return $response->withJson($leagues, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $league = \model\League::find_one($args['id']);
    if($league) {
      $league->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }

  function update(Request $request, Response $response, array $args) {
    $league = \model\League::find_one($args['id']);
    if($league) {
      $data = $request->getParsedBody();
      $league->name = $data['name'];
      $league->save();
      return $response->withJson($league->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }
}

