<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'referrer_id',
        'referrer_username',
    ];

    // Relationship to the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
