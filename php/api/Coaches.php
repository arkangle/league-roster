<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class Coaches extends Base {
  function create(Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $coach = \model\Coach::create();
    $coach->team_id = $args['id'];
    $coach->first_name = $data['first_name'];
    $coach->last_name = $data['last_name'];
    $coach->save();
    return $response->withJson($coach->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $coach = \model\Coach::find_one($args['id']);
    if($coach) {
      return $response->withJson($coach->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $coaches = \model\Coach::where('team_id',$args['id'])
                            ->order_by_asc('last_name')
                            ->find_array();
    return $response->withJson($coaches, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $coach = \model\Coach::find_one($args['id']);
    if($coach) {
      $coach->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }

  function update(Request $request, Response $response, array $args) {
    $coach = \model\Coach::find_one($args['id']);
    if($coach) {
      $data = $request->getParsedBody();
      $coach->first_name = $data['first_name'];
      $coach->last_name = $data['last_name'];
      $coach->save();
      return $response->withJson($coach->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }
}

