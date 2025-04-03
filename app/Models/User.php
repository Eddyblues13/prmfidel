<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'user_type',
        'username',
        'country',
        'phone',
        'btc_address',
        'usdt_address',
        'eth_address',
        'email',
        'kyc_status',
        'card',
        'referred_by',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    // app/Models/User.php
    public function referrer()
    {
        return $this->belongsTo(User::class, 'referred_by');
    }

    public function referrals()
    {
        return $this->hasMany(User::class, 'referred_by');
    }

    // Generating a unique referral code
    public function generateReferralCode()
    {
        $this->referral_code = strtoupper(substr(md5(uniqid()), 0, 8));
        $this->save();
    }


    public function deposits()
    {
        return $this->hasMany(Deposit::class, 'user_id');
    }


    public function earnings()
    {
        return $this->hasMany(Earnings::class, 'user_id');
    }


    public function profits()
    {
        return $this->hasOne(Profit::class, 'user_id');
    }

    public function withdrawals()
    {
        return $this->hasOne(Withdrawal::class, 'user_id');
    }

    public function transactions()
    {
        return $this->hasOne(Transaction::class, 'user_id');
    }
}
