<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deposit extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     * (Optional if it follows Laravel's naming convention)
     *
     * @var string
     */
    protected $table = 'deposits';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'transaction_id',
        'amount',
        'wallet_id',
        'image',
        'payment_method',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     * (Optional, based on your needs)
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'integer',
        'status' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that owns the deposit.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
