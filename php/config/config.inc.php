<?php
ORM::configure('pgsql:host=localhost;dbname=leagueroster');
ORM::configure('username', 'leagueroster');
ORM::configure('password', 'qwerty.');
ORM::configure('return_result_sets', true);
Model::$short_table_names = true;
$slim_config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];
