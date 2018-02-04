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
    $this->get('/{id}', array($Leagues, "read"));
    $this->delete('/{id}', array($Leagues, "delete"));
    $this->put('/{id}', array($Leagues, "update"));
  });
});
$app->run();
