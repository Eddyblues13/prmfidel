<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('wallet_details', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // e.g., Bitcoin, Ethereum, USDT(TRC20), Ripple, Dogecoin
            $table->string('network')->nullable(); // e.g., BTC Network, ERC20, TRC20, XRP Network
            $table->string('address')->nullable(); // Crypto wallet address
            $table->string('xrp_tag')->nullable(); // Destination tag for XRP
            // Bank transfer fields (nullable since we're focusing on crypto)
            $table->string('bank_name')->nullable();
            $table->string('account_holder')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_type')->nullable(); // e.g., savings, checking
            $table->string('branch_name')->nullable();
            $table->string('branch_code')->nullable();
            $table->string('swift_code')->nullable();
            $table->timestamps();

            // Optional index for faster queries
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('wallet_details');
    }
};
