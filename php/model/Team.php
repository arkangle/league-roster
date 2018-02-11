<?php
namespace model;
class Team extends \Model {
  function coaches() {
    return $this->has_many('model\Coach');
  }
}
