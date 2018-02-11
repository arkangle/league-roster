<?php
namespace model;
class League extends \Model {
  function seasons() {
    return $this->has_many('model\Season');
  }
}
