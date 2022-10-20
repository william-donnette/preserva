<?php

use App\Mail\MailContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

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

Route::post('/contact', function (Request $request) {
    Mail::to(config("mail.mailers.smtp.username"))
    ->send(new MailContact(
        $request->firstname,
        $request->lastname,
        $request->email,
        $request->phone,
        $request->enterprise,
        $request->address,
        $request->message,
    ));
});
