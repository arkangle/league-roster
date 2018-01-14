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
  $this->group('/organization', function() {
    $Organization = new \api\Organization();
    $this->post('', array($Organization, "create"));
    $this->get('', array($Organization, "list"));
    $this->get('/{id}', array($Organization, "read"));
    $this->delete('/{id}', array($Organization, "delete"));
    $this->put('/{id}', array($Organization, "update"));
  });
});
$app->run();
