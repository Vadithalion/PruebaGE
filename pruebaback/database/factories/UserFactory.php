<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'surname'=>$faker->name,
        'adress'=>$faker->name,
        'postal'=>$faker->word,
        'email'=>$faker->email,
        'password'=>$faker->password,
        ];
});
