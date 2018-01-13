<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require "../vendor/autoload.php";
$app = new \Slim\App;

$app->group('/api', function() {
  $this->get('/status', function (Request $request, Response $response, array $args) {
    return $response->withJson(array("status" => "OK"), 200);
  });
});
$app->run();
?>
