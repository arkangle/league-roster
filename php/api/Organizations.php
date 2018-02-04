<?php
namespace api;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
class Organizations extends Base {
  function create(Request $request, Response $response) {
    $data = $request->getParsedBody();
    $organization = \model\Organization::create();
    $organization->name = $data['name'];
    $organization->active = $data['active'] == 'true';
    $organization->save();
    return $response->withJson($organization->as_array(), 201);
  }

  function read(Request $request, Response $response, array $args) {
    $organization = \model\Organization::find_one($args['id']);
    if($organization) {
      return $response->withJson($organization->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }

  function list(Request $request, Response $response, array $args) {
    $organizations = \model\Organization::order_by_asc('name')->find_array();
    return $response->withJson($organizations, 200);
  }

  function delete(Request $request, Response $response, array $args) {
    $organization = \model\Organization::find_one($args['id']);
    if($organization) {
      $organization->delete();
      return $response->withStatus(204);
    } else {
      return $response->withStatus(404);
    }
  }

  function update(Request $request, Response $response, array $args) {
    $organization = \model\Organization::find_one($args['id']);
    if($organization) {
      $data = $request->getParsedBody();
      $organization->name = $data['name'];
      $organization->active = $data['active'] == 'true';
      $organization->save();
      return $response->withJson($organization->as_array(), 200);
    } else {
      return $response->withStatus(404);
    }
  }
}
