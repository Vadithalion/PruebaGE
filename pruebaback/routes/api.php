<?php

use App\Http\Controllers\LikesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('user')->group(function () {

    Route::apiResource('users', 'UserController');
    Route::get('userid/{id}', 'UserController@getUserById');
    Route::post('register','UserController@register');
    Route::post('login','UserController@login');
    Route::post('addfollow', 'UserController@addfollow');

    Route::middleware(['auth:api'])->group(function () {
        Route::post('newpublication','PublicationController@newPublication');
        });

});
