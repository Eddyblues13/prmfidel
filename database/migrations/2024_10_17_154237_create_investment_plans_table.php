<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('investment_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('min_deposit', 10, 2);
            $table->decimal('max_deposit', 10, 2);
            $table->decimal('percentage', 5, 2);
            $table->string('duration');
            $table->timestamps();
            $table->string('btc')->default('0.02972994');
            $table->string('weekly_interest')->default('16%');
            $table->string('investment_sum')->default('2000');
            $table->string('withdrawal_commision')->default('10%');
            $table->string('referral_bonus')->default('5%');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investment_plans');
    }
};
