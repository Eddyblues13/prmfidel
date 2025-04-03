<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investment extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     * (Optional if the table name follows Laravel's naming conventions)
     *
     * @var string
     */
    protected $table = 'investments';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'transaction_id',
        'amount',
        'email',
        'plan_name',
        'plan_percent',
        'plan_percentage',
        'plan_duration',
        'plan_start',
        'plan_end',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     * Adjust the casting as necessary.
     *
     * @var array
     */
    protected $casts = [
        'amount' => 'integer',
        'status' => 'integer',
        'plan_start' => 'datetime',
        'plan_end' => 'datetime',
    ];

    /**
     * Get the user that owns the investment.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
