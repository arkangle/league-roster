<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require "../vendor/autoload.php";
require "../php/config/config.inc.php";

$app = new \Slim\App($slim_config);

$app->group('/api', function() {
  $this->get('/status', function (Request $request, Response $response, array $args) {
    return $response->withJson(array("status" => "OK"), 200);
  });
  $this->group('/organizations', function() {
    $Organizations = new \api\Organizations();
    $Leagues = new \api\Leagues();
    $this->post('', array($Organizations, "create"));
    $this->get('', array($Organizations, "list"));
    $this->get('/{id}', array($Organizations, "read"));
    $this->delete('/{id}', array($Organizations, "delete"));
    $this->put('/{id}', array($Organizations, "update"));
    $this->get('/{id}/leagues', array($Leagues, "list"));
    $this->post('/{id}/leagues', array($Leagues, "create"));
  });
  $this->group('/leagues', function() {
    $Leagues = new \api\Leagues();
    $Seasons = new \api\Seasons();
    $Teams = new \api\Teams();
    $this->get('/{id}', array($Leagues, "read"));
    $this->delete('/{id}', array($Leagues, "delete"));
    $this->put('/{id}', array($Leagues, "update"));
    $this->get('/{id}/seasons', array($Seasons, "list"));
    $this->post('/{id}/seasons', array($Seasons, "create"));
    $this->get('/{id}/teams', array($Teams, "list"));
    $this->post('/{id}/teams', array($Teams, "create"));
  });
  $this->group('/seasons', function() {
    $Seasons = new \api\Seasons();
    $this->get('/{id}', array($Seasons, "read"));
    $this->delete('/{id}', array($Seasons, "delete"));
    $this->put('/{id}', array($Seasons, "update"));
  });
  $this->group('/teams', function() {
    $Teams = new \api\Teams();
    $Coaches = new \api\Coaches();
    $this->get('/{id}', array($Teams, "read"));
    $this->delete('/{id}', array($Teams, "delete"));
    $this->put('/{id}', array($Teams, "update"));
    $this->get('/{id}/coaches', array($Coaches, "list"));
    $this->post('/{id}/coaches', array($Coaches, "create"));
  });
  $this->group('/coaches', function() {
    $Coaches = new \api\Coaches();
    $this->get('/{id}', array($Coaches, "read"));
    $this->delete('/{id}', array($Coaches, "delete"));
    $this->put('/{id}', array($Coaches, "update"));
  });
});
$app->run();
