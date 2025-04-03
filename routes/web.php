<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\KycController;
use App\Http\Controllers\Admin\PlanController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\TradeController;
use App\Http\Controllers\Admin\WalletController;
use App\Http\Controllers\Admin\DepositController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\BrandingController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\Auth\CustomAuthController;
use App\Http\Controllers\GeneralSettingsController;
use App\Http\Controllers\Admin\WithdrawalController;
use App\Http\Controllers\Admin\SmtpSettingController;
use App\Http\Controllers\Admin\TradingPlanController;
use App\Http\Controllers\Admin\WalletDetailController;


Route::get('/', function () {
    return view('home.homepage');
});

Route::get('/about', function () {
    return view('home.about');
});

Route::get('/contact', function () {
    return view('home.contact');
});


Route::middleware('guest')->group(function () {
    Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login.page');
    Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');

    Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register.submit');
});


Route::post('/logout', [App\Http\Controllers\Auth\AuthController::class, 'logout'])->name('user.logout');


// Password Reset Routes
Route::get('forgot-password', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'showLinkRequestForm'])
    ->name('password.request');

Route::post('forgot-password', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'sendResetLinkEmail'])
    ->name('password.email'); 

Route::get('reset-password/{token}', [App\Http\Controllers\Auth\ResetPasswordController::class, 'showResetBladefile'])
    ->name('password.reset'); 

Route::post('reset-password', [App\Http\Controllers\Auth\ResetPasswordController::class, 'reset'])
    ->name('password.update');



// Verification Routes
Route::get('/verify/{id}', [CustomAuthController::class, 'verify'])->name('verify');
Route::post('/verify-code', [CustomAuthController::class, 'verifyCode'])->name('verify.code');
Route::get('/resend-verification-code', [CustomAuthController::class, 'resendVerificationCode'])->name('resend.verification.code');


Route::prefix('user')->middleware('user')->group(function () {
    // Existing routes
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
    Route::post('/profile/update', [HomeController::class, 'updateProfile'])->name('profile.update');
    Route::post('/account/upgrade', [HomeController::class, 'upgradeAccount'])->name('account.upgrade');
    Route::post('/account/change_pics', [HomeController::class, 'updateProfilePic'])->name('profile.pix.update');
    Route::post('/account/changetheme', [HomeController::class, 'changeTheme'])->name('theme.change');
    Route::get('/change_password', [HomeController::class, 'changePassword'])->name('password');
    Route::post('/change_password', [HomeController::class, 'updatePassword'])->name('password.update');
    Route::get('/support', [HomeController::class, 'support'])->name('support');
    Route::get('/notification', [HomeController::class, 'notification'])->name('notification');
    Route::get('/account_details', [HomeController::class, 'accountDetails'])->name('account.details');
    Route::post('/wallets/update', [HomeController::class, 'updateWallet'])->name('user.wallets.update');
    Route::post('/bank/update', [HomeController::class, 'updateBank'])->name('user.bank.update');

    Route::get('/refer_user', [HomeController::class, 'referUser'])->name('refer.user');
    // routes/web.php
    Route::get('/referrals', [HomeController::class, 'referral'])->name('referrals.index');

    Route::get('/trading_history', [HomeController::class, 'tradingHistory'])->name('trading.history');
    Route::get('/deposits', [HomeController::class, 'deposits'])->name('deposits');
    Route::post('/deposits', [HomeController::class, 'handleDeposit'])->name('handle.deposit');
    Route::post('/payment', [HomeController::class, 'handlePayment'])->name('handle.payment');
    Route::get('/m_plans', [HomeController::class, 'mPlans'])->name('m.plans');
    Route::post('/m_plans', [HomeController::class, 'store'])->name('trade.store');
    Route::get('/my_plans', [HomeController::class, 'myPlans'])->name('my.plans');
    Route::get('/loans', [HomeController::class, 'loans'])->name('loans');
    Route::post('/loans', [HomeController::class, 'applyForLoan'])->name('loan.apply');
    Route::get('/send_funds', [HomeController::class, 'sendFundsPage'])->name('send.funds');
    Route::post('/send_funds', [HomeController::class, 'sendFunds'])->name('send.fund');
    Route::get('/withdrawals', [HomeController::class, 'withdrawals'])->name('withdrawals');
    Route::post('/withdrawals', [HomeController::class, 'withdrawal'])->name('withdrawal');
    Route::post('/documents/save', [HomeController::class, 'storeKyc'])->name('documents.save');





    Route::get('/dashboard', [HomeController::class, 'dashboard']);
    Route::get('/deposit', [HomeController::class, 'userDeposit'])->name('user.deposit');
    Route::get('/asset-balance', [HomeController::class, 'assetBalance'])->name('user.asset.balance');;
    Route::post('/get-deposit', [HomeController::class, 'getDeposit'])->name('get.deposit');
    Route::post('/make-deposit', [HomeController::class, 'makeDeposit'])->name('make.deposit');
    Route::post('/withdraw-funds', [HomeController::class, 'getWithdrawal'])->name('user.withdraw');
    Route::get('/support', [HomeController::class, 'supportTicket'])->name('user.support');
    Route::get('deposit-history', [HomeController::class, 'depositHistory'])->name('user.deposit.history');
    Route::get('investment-history', [HomeController::class, 'investmentHistory'])->name('user.investment.history');
    Route::get('/account-history', [HomeController::class, 'accountHistory'])->name('user.account.history');
    Route::get('/earnings', [HomeController::class, 'Earning'])->name('user.verify.earning');;
    Route::get('/buy-plan', [HomeController::class, 'buyplan'])->name('user.buy.plan');
    Route::get('/account-settings', [HomeController::class, 'accountSettings'])->name('user.account.settings');;
    Route::get('/my-plans', [HomeController::class, 'myplans']);
    Route::get('/settings', [HomeController::class, 'Settings'])->name('user.setting');;
    Route::get('/trading-history', [HomeController::class, 'tradingHistory'])->name('user.trading.history');
    Route::get('/refer-user', [HomeController::class, 'referUser'])->name('user.refer.user');
    Route::get('/ver-account', [HomeController::class, 'verifyAccount'])->name('user.verify.account');
    Route::post('/upload-kyc', [HomeController::class, 'uploadKyc'])->name('user.upload.kyc');
    Route::get('/withdrawals', [HomeController::class, 'withdrawals'])->name('user.withdrawals');;
    Route::get('/withdraw-funds', [HomeController::class, 'withdrawFunds'])->name('user.withdraw.funds');
    Route::get('/logout', [HomeController::class, 'perform'])->name('logout.perform');
    Route::post('/change-password', [HomeController::class, 'updatePassword'])->name('update-password');
    Route::post('/profile-update', [HomeController::class, 'profileUpdate'])->name('user.profile.update');
    Route::post('/update-wallet', [HomeController::class, 'updateWallet'])->name('user.update.wallet');
    Route::post('/support-email', [HomeController::class, 'supportEmail']);
    Route::post('/buy-plan', [HomeController::class, 'buyPlans'])->name('buy.plan');
    Route::get('/investments', [HomeController::class, 'makeInvestment'])->name('user.investments');
    Route::post('/trading', [HomeController::class, 'Trading']);
    Route::post('/make-withdrawal', [HomeController::class, 'makeWithdrawal'])->name('user.make.withdrawal');

    Route::post('/logout', [HomeController::class, 'logout'])->name('user.logout');
});





Route::get('admin/login', [AdminLoginController::class, 'adminLoginForm'])->name('admin.login');
Route::post('admin/login', [AdminLoginController::class, 'login'])->name('login.submit');



// Admin Routes
Route::prefix('admin')->group(function () {
    Route::post('logout', [AdminLoginController::class, 'logout'])->name('logout');

    // Protecting admin routes using the 'admin' middleware
    Route::middleware(['admin'])->group(function () { // Admin Profile Routes
        Route::get('/profile', [AdminController::class, 'editProfile'])->name('admin.profile');
        Route::post('/profile/update', [AdminController::class, 'updateProfile'])->name('admin.profile.update');
        Route::post('/profile/password', [AdminController::class, 'updatePassword'])->name('admin.profile.password.update');

        Route::get('/change/user/password/page/{id}', [AdminController::class, 'showResetPasswordForm'])->name('admin.change.user.password.page');
        Route::post('/user-password-reset', [AdminController::class, 'resetPassword'])->name('admin.user.password_reset');


        Route::get('/home', [AdminController::class, 'index'])->name('admin.home');
        Route::get('/payment-settings', [AdminController::class, 'paymentSettings'])->name('payment.settings');
        Route::get('/manage-users', [AdminController::class, 'manageUsersPage'])->name('manage.users.page');
        Route::get('/manage-investment-plan', [AdminController::class, 'manageInvestmentPlan'])->name('manage.investment.plan');
        Route::get('/view-deposit/{id}/', [AdminController::class, 'viewDeposit']);
        Route::get('/manage-kyc', [AdminController::class, 'manageKycPage'])->name('manage.kyc.page');
        Route::get('/accept-kyc/{id}/', [AdminController::class, 'acceptKyc'])->name('admin.accept.kyc');
        Route::get('/reject-kyc/{id}/', [AdminController::class, 'rejectKyc'])->name('admin.reject.kyc');
        Route::get('/reset-password/{user}', [AdminController::class, 'resetUserPassword'])->name('reset.password');
        Route::get('/clear-account/{id}', [AdminController::class, 'clearAccount'])->name('clear.account');

        Route::get('/{user}/impersonate',  [AdminController::class, 'impersonate'])->name('users.impersonate');
        Route::get('/leave-impersonate',  [AdminController::class, 'leaveImpersonate'])->name('users.leave-impersonate');

        Route::post('/edit-user/{user}', [AdminController::class, 'editUser'])->name('edit.user');
        Route::post('/add-new-user',  [AdminController::class, 'newUser'])->name('add.user');
        Route::get('/delete-user/{user}',  [AdminController::class, 'deleteUser'])->name('delete.user');
        Route::match(['get', 'post'], '/send-mail', [AdminController::class, 'sendMail'])->name('admin.send.mail');
        // Route for viewing user details
        Route::get('/user/{id}', [AdminController::class, 'viewUser'])->name('admin.user.view');
        Route::post('/transfer/suspend/{id}', [AdminController::class, 'suspendTransfer'])->name('transfer.suspend');
        Route::post('/transfer/unblock/{id}', [AdminController::class, 'unblockTransfer'])->name('transfer.unblock');
        Route::post('/account/suspend/{id}', [AdminController::class, 'suspendAccount'])->name('account.suspend');
        Route::post('/account/unblock/{id}', [AdminController::class, 'unblockAccount'])->name('account.unblock');

        // Define the route for opening an account
        Route::get('/user/open', [AdminController::class, 'openAccount'])->name('admin.user.open');



        // Route for viewing user details
        Route::get('/credit-user/{id}', [AdminController::class, 'creditUserPage'])->name('admin.credit.user.page');

        Route::post('credit-debit', [AdminController::class, 'creditDebit'])->name('credit-debit');


        // Route::post('/credit-user', [AdminController::class, 'creditUser'])->name('credit_user');


        // Route for updating user details
        Route::post('/user/update/{id}', [AdminController::class, 'updateUserDetail'])->name('update_user_detail');

        // Route for updating bank details
        Route::post('/user/update/bank/{id}', [AdminController::class, 'updateBankDetail'])->name('update_bank_detail');

        // Route for fund user
        Route::get('/user/fund/{accountnumber}/{id}', [AdminController::class, 'fundUser'])->name('fund_user');

        // Route for user transaction history
        Route::get('/user/transaction/{id}', [AdminController::class, 'userTransaction'])->name('user_transaction');

        // Route for user transfer tracking
        Route::get('/user/transfer/tracking/{id}', [AdminController::class, 'userTransferTracking'])->name('user_transfer_tracking');

        // Route for debit user
        Route::get('/user/debit/{accountnumber}/{id}', [AdminController::class, 'debitUser'])->name('debit_user');

        // Route for changing user photo
        Route::get('/user/photo/{id}', [AdminController::class, 'updatePhoto'])->name('update_photo');

        // Route for user activity
        Route::get('/user/activity/{id}', [AdminController::class, 'userActivity'])->name('user_activity');

        // Route for user password reset
        Route::get('/user/password/reset/{userid}', [AdminController::class, 'userPasswordReset'])->name('user_password_reset');


        // Route for changing email user
        Route::get('/send/email', [AdminController::class, 'sendEmailPage'])->name('send.email');
        Route::post('/send/email', [AdminController::class, 'sendEmail'])->name('send.mail');

        // logo favicon settings
        Route::get('/branding', [BrandingController::class, 'index'])->name('branding.index');
        Route::post('/branding/update', [BrandingController::class, 'update'])->name('branding.update');

        Route::get('/smtp-settings', [SmtpSettingController::class, 'index'])->name('smtp.settings');
        Route::post('/smtp-settings', [SmtpSettingController::class, 'update'])->name('smtp.update');

        // Wallet resource routes
        Route::resource('wallets', WalletController::class);
        // Deposit resource routes
        Route::resource('deposits', DepositController::class);
        Route::patch('deposits/{deposit}/approve', [DepositController::class, 'approve'])->name('deposits.approve');

        // Withdrawal resource routes
        Route::resource('withdrawals', WithdrawalController::class);
        Route::patch('withdrawals/{withdrawal}/approve', [WithdrawalController::class, 'approve'])->name('withdrawals.approve');

        //kyc resource routes
        Route::resource('kyc', KycController::class);
        Route::get('kyc/{id}/approve', [KycController::class, 'approve'])->name('kyc.approve');

        //trade resource routes
        Route::get('/trades', [TradeController::class, 'index'])->name('trades.index');
        Route::get('/trades/{trade}/edit', [TradeController::class, 'edit'])->name('trades.edit');
        Route::patch('/trades/{trade}', [TradeController::class, 'update'])->name('trades.update');
        Route::post('/trades/{trade}/approve', [TradeController::class, 'approve'])->name('trades.approve');
        Route::delete('/trades/{trade}', [TradeController::class, 'destroy'])->name('trades.destroy');


        //general settings
        Route::get('settings/general', [GeneralSettingsController::class, 'edit'])->name('settings.edit');
        Route::put('settings/general', [GeneralSettingsController::class, 'update'])->name('settings.update');


        Route::get('/trading-plans/create', [TradingPlanController::class, 'create'])->name('admin.create-trading-plan');
        Route::post('/trading-plans/store', [TradingPlanController::class, 'store'])->name('admin.store-trading-plan');
        Route::get('/trading-plans', [TradingPlanController::class, 'index'])->name('admin.view-trading-plans');
        Route::get('/trading-plans/edit/{id}', [TradingPlanController::class, 'edit'])->name('admin.edit-trading-plan');
        Route::post('/trading-plans/update/{id}', [TradingPlanController::class, 'update'])->name('admin.update-trading-plan');
        Route::delete('/trading-plans/delete/{id}', [TradingPlanController::class, 'destroy'])->name('admin.delete-trading-plan');


        Route::get('/manage-deposit', [DepositController::class, 'manageDepositsPage'])->name('manage.deposits.page');
        Route::get('view-deposit/{id}', [DepositController::class, 'viewDeposit'])->name('view.deposit');;
        Route::get('process-deposit/{id}', [DepositController::class, 'processDeposit'])->name('process.deposit');
        Route::get('delete-deposit/{id}', [DepositController::class, 'deleteDeposit'])->name('delete.deposit');


        Route::get('/manage-withdrawal', [WithdrawalController::class, 'manageWithdrawalsPage'])->name('manage.withdrawals.page');
        Route::get('/view-withdrawal/{user_id}/{withdrawal_id}', [WithdrawalController::class, 'viewWithdrawal'])->name('view.withdrawal');;
        Route::get('process-withdrawal/{id}', [WithdrawalController::class, 'processWithdrawal'])->name('process.withdrawal');
        Route::get('delete-withdrawal/{id}', [WithdrawalController::class, 'deleteWithdrawal'])->name('delete.withdrawal');

        Route::resource('plans', PlanController::class);
        // Wallet resource routes
        Route::resource('wallets', WalletDetailController::class);
    });
});
