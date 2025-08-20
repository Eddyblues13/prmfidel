<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InvestmentPlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('investment_plans')->insert([
            [
                'name' => 'Starter Plan',
                'min_deposit' => 100.00,
                'max_deposit' => 999.00,
                'percentage' => 10.00,
                'duration' => '7 days',
                'btc' => '0.02972994',
                'weekly_interest' => '16%',
                'investment_sum' => '2000',
                'withdrawal_commision' => '10%',
                'referral_bonus' => '5%',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Premium Plan',
                'min_deposit' => 1000.00,
                'max_deposit' => 4999.00,
                'percentage' => 15.00,
                'duration' => '14 days',
                'btc' => '0.02972994',
                'weekly_interest' => '16%',
                'investment_sum' => '2000',
                'withdrawal_commision' => '10%',
                'referral_bonus' => '5%',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Professional Plan',
                'min_deposit' => 5000.00,
                'max_deposit' => 9999.00,
                'percentage' => 20.00,
                'duration' => '30 days',
                'btc' => '0.02972994',
                'weekly_interest' => '16%',
                'investment_sum' => '2000',
                'withdrawal_commision' => '10%',
                'referral_bonus' => '5%',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'VIP Plan',
                'min_deposit' => 10000.00,
                'max_deposit' => 50000.00,
                'percentage' => 25.00,
                'duration' => '60 days',
                'btc' => '0.02972994',
                'weekly_interest' => '16%',
                'investment_sum' => '2000',
                'withdrawal_commision' => '10%',
                'referral_bonus' => '5%',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
