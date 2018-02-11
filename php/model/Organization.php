<?php
namespace model;
class Organization extends \Model {
  function leagues() {
    return $this->has_many('model\League');
  }
}
