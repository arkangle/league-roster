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

  $Organizations = new \api\Organizations();
  $Leagues = new \api\Leagues();
  $Seasons = new \api\Seasons();
  $Teams = new \api\Teams();
  $SeasonTeams = new \api\SeasonTeams();
  $Coaches = new \api\Coaches();

  $this->group('/organizations', function() use ($Organizations, $Leagues) {
    $this->post('', array($Organizations, "create"));
    $this->get('', array($Organizations, "list"));
    $this->get('/{id}', array($Organizations, "read"));
    $this->delete('/{id}', array($Organizations, "delete"));
    $this->put('/{id}', array($Organizations, "update"));
    $this->get('/{id}/leagues', array($Leagues, "list"));
    $this->post('/{id}/leagues', array($Leagues, "create"));
  });
  $this->group('/leagues', function() use ($Leagues, $Seasons, $Teams) {
    $this->get('/{id}', array($Leagues, "read"));
    $this->delete('/{id}', array($Leagues, "delete"));
    $this->put('/{id}', array($Leagues, "update"));
    $this->get('/{id}/seasons', array($Seasons, "list"));
    $this->post('/{id}/seasons', array($Seasons, "create"));
    $this->get('/{id}/teams', array($Teams, "list"));
    $this->post('/{id}/teams', array($Teams, "create"));
  });
  $this->group('/seasons', function() use ($Seasons, $SeasonTeams) {
    $this->get('/{id}', array($Seasons, "read"));
    $this->delete('/{id}', array($Seasons, "delete"));
    $this->put('/{id}', array($Seasons, "update"));
    $this->get('/{id}/teams', array($SeasonTeams, "list"));
    $this->get('/{id}/teams/remaining', array($SeasonTeams, "remaining"));
    $this->post('/{id}/teams', array($SeasonTeams, "create"));
    $this->group('/teams', function() use ($SeasonTeams) {
      $this->delete('/{id}', array($SeasonTeams, "delete"));
      $this->get('/{id}', array($SeasonTeams, "read"));
    });
  });
  $this->group('/teams', function() use ($Teams, $Coaches) {
    $this->get('/{id}', array($Teams, "read"));
    $this->delete('/{id}', array($Teams, "delete"));
    $this->put('/{id}', array($Teams, "update"));
    $this->get('/{id}/coaches', array($Coaches, "list"));
    $this->post('/{id}/coaches', array($Coaches, "create"));
  });
  $this->group('/coaches', function() use ($Coaches) {
    $this->get('/{id}', array($Coaches, "read"));
    $this->delete('/{id}', array($Coaches, "delete"));
    $this->put('/{id}', array($Coaches, "update"));
  });
});
$app->run();
