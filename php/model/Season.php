<?php
namespace model;
class Season extends \Model {
  function teams() {
    return $this->has_many_through('model\Team');
  }
}
