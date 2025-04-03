<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'btc_address',
        'eth_address',
        'usdt_address',
        'account_no',
        'bank_name',
        'account_name'
    ];

    // Relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
