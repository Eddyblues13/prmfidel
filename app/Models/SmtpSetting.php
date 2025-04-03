<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmtpSetting extends Model
{
    use HasFactory;
    protected $fillable = [
        'smtp_host',
        'smtp_username',
        'smtp_password',
        'smtp_auth',
        'smtp_port',
        'display_name',
        'sms_enabled',
        'sms_sender_id',
        'sms_api_key',
        'twilio_account_sid',
        'twilio_auth_token',
        'twilio_phone_number',
    ];
}
