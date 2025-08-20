<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Models\User;
use App\Models\Trade;
use App\Models\Profit;
use App\Models\Wallet;
use App\Models\Deposit;
use App\Models\Document;
use App\Models\Earnings;
use App\Models\Referral;
use App\Models\Transfer;
use App\Models\Investment;
use App\Models\Withdrawal;
use App\Mail\SupportTicket;
use App\Models\TradingPlan;
use App\Models\Transaction;
use App\Models\TradeHistory;
use App\Models\WalletDetail;
use Illuminate\Http\Request;
use App\Models\AccountBalance;
use App\Models\AccountDetails;
use App\Models\InvestmentPlan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data['credit_withdrawal'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Withdrawal')->where('transaction', 'credit')->sum('credit');
        $data['debit_withdrawal'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Withdrawal')->where('transaction', 'debit')->sum('debit');
        $data['withdrawal_balance'] = $data['debit_withdrawal'];

        $data['credit_deposit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Deposit')->where('transaction', 'credit')->sum('credit');
        $data['debit_deposit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Deposit')->where('transaction', 'debit')->sum('debit');
        $data['deposit_balance'] = $data['credit_deposit'] - $data['debit_deposit'];

        $data['credit_profit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Profit')->where('transaction', 'credit')->sum('credit');
        $data['debit_profit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Profit')->where('transaction', 'debit')->sum('debit');
        $data['profit_balance'] = $data['credit_profit'] - $data['debit_profit'];

        $data['credit_earning'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Earning')->where('transaction', 'credit')->sum('credit');
        $data['debit_earning'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Earning')->where('transaction', 'debit')->sum('debit');
        $data['earning_balance'] = $data['credit_earning'] - $data['debit_earning'];





        $data['credit_Investment'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Investment')->where('transaction', 'credit')->sum('credit');
        $data['debit_Investment'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Investment')->where('transaction', 'debit')->sum('debit');
        $data['Investment_balance'] = $data['credit_Investment'] - $data['debit_Investment'];

        $data['credit_referral'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Referral')->where('transaction', 'credit')->sum('credit');
        $data['debit_referral'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Referral')->where('transaction', 'debit')->sum('debit');
        $data['referral_balance'] = $data['credit_referral'] - $data['debit_referral'];


        $data['credit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'credit')->sum('credit');
        $data['debit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'debit')->sum('debit');
        $data['total_balance'] = $data['credit_balance'] - $data['debit_balance'];

        // Fetch total investment plans for the user
        $data['total_investment_plans'] = Investment::where('user_id', Auth::user()->id)->count();

        // Fetch total active investment plans for the user
        $data['total_active_investment_plans'] = Investment::where('user_id', Auth::user()->id)
            ->where('status', 'active') // Assuming 'active' is the status for active plans
            ->count();

        return view('dashboard.home', $data);
    }


    public function referral()
    {
        $referrals = auth()->user()->referrals()->with('parent')->get();

        return view('referrals.index', compact('referrals'));
    }

    public function supportEmail(Request $request)

    {

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];




        Mail::to('support@s9tradingnetwork.com')->send(new SupportEmail($data));

        return back()->with('status', 'Email Successfully sent');
    }

    public function dashboard()
    {
        if (Auth::check()) {
            if (Auth::user()->user_type == '0') {


                $data['credit_withdrawal'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Withdrawal')->where('transaction', 'credit')->sum('credit');
                $data['debit_withdrawal'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Withdrawal')->where('transaction', 'debit')->sum('debit');
                $data['withdrawal_balance'] = $data['debit_withdrawal'];

                $data['credit_deposit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Deposit')->where('transaction', 'credit')->sum('credit');
                $data['debit_deposit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Deposit')->where('transaction', 'debit')->sum('debit');
                $data['deposit_balance'] = $data['credit_deposit'] - $data['debit_deposit'];

                $data['credit_profit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Profit')->where('transaction', 'credit')->sum('credit');
                $data['debit_profit'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Profit')->where('transaction', 'debit')->sum('debit');
                $data['profit_balance'] = $data['credit_profit'] - $data['debit_profit'];

                $data['credit_earning'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Earning')->where('transaction', 'credit')->sum('credit');
                $data['debit_earning'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Earning')->where('transaction', 'debit')->sum('debit');
                $data['earning_balance'] = $data['credit_earning'] - $data['debit_earning'];





                $data['credit_Investment'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Investment')->where('transaction', 'credit')->sum('credit');
                $data['debit_Investment'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Investment')->where('transaction', 'debit')->sum('debit');
                $data['Investment_balance'] = $data['credit_Investment'] - $data['debit_Investment'];

                $data['credit_referral'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Referral')->where('transaction', 'credit')->sum('credit');
                $data['debit_referral'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction_type', 'Referral')->where('transaction', 'debit')->sum('debit');
                $data['referral_balance'] = $data['credit_referral'] - $data['debit_referral'];


                $data['credit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'credit')->sum('credit');
                $data['debit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'debit')->sum('debit');
                $data['total_balance'] = $data['credit_balance'] - $data['debit_balance'];

                return view('dashboard.dashboard', $data);
            } else {
                $users    = User::where('user_type', '0')->get();
                $user_transactions = Transaction::orderBy('id', 'desc')->get();
                return view('manager.home', compact('users', 'user_transactions'));
            }
        } else {
            return redirect()->back();
        }
    }
    public function userDeposit()
    {

        return view('dashboard.deposit');
    }
    public function assetBalance()
    {

        return view('dashboard.asset-balance');
    }
    public function supportTicket()
    {

        return view('dashboard.support');
    }



    public function Earning()
    {
        $data['earning'] =  Earnings::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();

        return view('dashboard.earnings');
    }

    public function buyPlan()
    {
        // Fetch all investment plans from the database
        $data['plans'] = InvestmentPlan::all();
        return view('dashboard.buy-plan', $data);
    }

    public function  investmentHistory()
    {


        $data['investment'] =  Investment::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        return view('dashboard.investment_history', $data);
    }

    public function  makeInvestment()
    {


        $data['investment'] =  Investment::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        return view('dashboard.investmentHistory', $data);
    }


    public function referUser()
    {
        // $data['referrals'] =  Referral::where('referrer_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        // return view('dashboard.referuser', $data);
        return view('dashboard.referuser');
    }

    public function Settings()
    {

        return view('dashboard.settings');
    }


    public function accountSettings()
    {

        return view('dashboard.account-settings');
    }

    public function withdrawals()
    {

        return view('dashboard.withdrawals');
    }
    public function getWithdrawal(Request $request)
    {

        $data['credit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'credit')->sum('credit');
        $data['debit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'debit')->sum('debit');
        $data['total_balance'] = $data['credit_balance'] - $data['debit_balance'];
        $withdrawal_amount = $request->input('amount');

        if ($data['total_balance'] <= '0') {
            return back()->with('status', 'Your Balance Is Insufficient');
        }

        if ($data['total_balance'] <= $withdrawal_amount) {
            return back()->with('status', 'Your Balance Is Insufficient');
        }
        $method = $request->input('method');
        $data['method'] = $method;

        if ($method == 'Bank') {
            return view('dashboard.withdraw-bank', $data);
        } else {
            return view('dashboard.withdraw-funds', $data);
        }
    }



    public function depositHistory()
    {

        $data['deposit'] =  Deposit::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        return view('dashboard.deposit_history', $data);
    }
    public function accountHistory()
    {

        $data['deposit'] =  Deposit::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        $data['withdrawal'] =  Withdrawal::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        $data['earning'] =  Earnings::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();

        return view('dashboard.accounthistory', $data);
    }

    public function getDeposit(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'amount' => 'required|numeric|min:1',
            'payment_method_selection' => 'required|string',
            'payment_address' => 'required|string',
        ]);

        // Retrieve validated input data
        $amount = $validatedData['amount'];
        $paymentMethod = $validatedData['payment_method_selection'];
        $paymentAddress = $validatedData['payment_address'];

        // Prepare data to pass to the payment view
        $data = [
            'amount' => $amount,
            'address' => $paymentAddress,
            'item' => $paymentMethod,
        ];

        // Retrieve the authenticated user
        $user = auth()->user();
        if (!$user) {
            return redirect()->back()->with('status', 'User not authenticated.');
        }
        $data['payments'] = WalletDetail::all();

        // Handle different payment methods
        if ($paymentMethod === 'Bank') {
            return back()->with('status', 'Bank Deposit is not available at the moment, please contact live support.');
        } else {
            return view('dashboard.payment', $data);
        }
    }




    public function makeDeposit(Request $request)
    {
        // ✅ 1. Strict Validation
        $validatedData = $request->validate([
            'amount' => 'required|numeric|min:1|max:1000000', // put an upper limit
            'payment_method' => 'required|string|in:Bank,Bitcoin,Ethereum,USDT(Trc20)', // whitelist allowed values
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // ✅ 2. Unique Transaction ID
        $transaction_id = strtoupper(uniqid('TXN', true)); // stronger uniqueness

        // ✅ 3. Create Deposit
        $deposit = new Deposit();
        $deposit->user_id = Auth::id();
        $deposit->transaction_id = $transaction_id;
        $deposit->amount = $validatedData['amount'];
        $deposit->payment_method = $validatedData['payment_method'];

        // ✅ 4. Map Payment Method to Wallet IDs (strictly defined, no user input)
        $paymentMethodToWallet = [
            'Bank' => 'BANK123456',
            'Bitcoin' => 'BTCWALLET78910',
            'Ethereum' => 'ETHWALLET111213',
            'USDT(Trc20)' => 'USDTWALLET141516',
        ];
        $deposit->wallet_id = $paymentMethodToWallet[$validatedData['payment_method']] ?? null;

        // ✅ 5. Safe Image Upload (if provided)
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // generate unique secure filename
            $filename = uniqid('deposit_', true) . '.' . $file->getClientOriginalExtension();

            // store in storage/app/public/uploads/deposits
            $path = $file->storeAs('public/uploads/deposits', $filename);

            // save relative path (avoid exposing full server path)
            $deposit->image = 'uploads/deposits/' . $filename;
        }

        // ✅ 6. Save Deposit
        $deposit->save();

        // ✅ 7. Log Transaction (immutable history)
        $transaction = new Transaction();
        $transaction->user_id = Auth::id();
        $transaction->transaction_id = $transaction_id;
        $transaction->transaction_type = "Deposit";
        $transaction->transaction = "credit";
        $transaction->credit = $validatedData['amount'];
        $transaction->debit = 0;
        $transaction->status = 0; // pending
        $transaction->save();

        // ✅ 8. Notifications
        $user = Auth::user();
        $full_name = e($user->name); // escape output to prevent XSS
        $email = e($user->email);
        $payment_method = e($validatedData['payment_method']);
        $amount = number_format($validatedData['amount'], 2);

        $adminNotification = "{$full_name} ({$email}) has made a {$payment_method} deposit of \${$amount}.";
        $userNotification = "Your \${$amount} {$payment_method} deposit is under review. Please wait for approval.";

        // If using Mailables, wrap in try/catch
        /*
    try {
        Mail::to($email)->send(new UserDepositEmail($userNotification));
        Mail::to('support@s9tradingnetwork.com')->send(new MakeDepositEmail($adminNotification));
    } catch (\Exception $e) {
        \Log::error('Deposit email failed: ' . $e->getMessage());
    }
    */

        // ✅ 9. Redirect
        return redirect()->route('user.deposit')
            ->with('status', 'Deposit created successfully and is under review.');
    }











    public function updatePassword(Request $request)
    {
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);


        #Match The Old Password
        if (!Hash::check($request->old_password, auth()->user()->password)) {
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("status", "Password changed successfully!");
    }

    public function buyPlans(Request $request)
    {



        $data['credit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'credit')->sum('credit');
        $data['debit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'debit')->sum('debit');
        $data['total_balance'] = $data['credit_balance'] - $data['debit_balance'];

        $plan_amount = $request->input('amount');

        if ($data['total_balance'] <= '0') {
            return back()->with('status', 'Your Balance Is Insufficient');
        }

        if ($data['total_balance'] < $plan_amount) {
            return back()->with('status', 'Your Balance Is Insufficient');
        }



        $transaction_id = rand(76503737, 12344994);

        $buy = new Investment;
        $buy->user_id = Auth::user()->id;
        $buy->email = Auth::user()->email;
        $buy->transaction_id = $transaction_id;
        $buy->amount = $request['amount'];
        $buy->plan_name = $request['plan_name'];
        $buy->plan_percentage = $request['plan_percent'];
        $buy->plan_duration = $request['plan_duration'];
        $plan_amount = $request->input('amount');
        $plan_duration = $request->input('plan_duration');
        $plan_name = $request->input('plan_name');
        $plan_percentage = $request->input('plan_percentage');
        $plan_percent = $request->input('plan_percent');
        $buy->status = '0';
        $startDate = date('Y-m-d');
        $buy->plan_start =  $startDate;


        $endDate = date('Y-m-d H:i:s', strtotime($startDate . '+ 24 hours'));
        $buy->plan_end = $endDate;

        $data = "You have successfully purchased contract " . $plan_name . " $" . $plan_amount . " @ " . $plan_percentage . " interest daily 
        with an estimate daily interest of " . $plan_percentage . " starting from " . $startDate . " to " . $endDate . ".";

        $buy->save();


        $transaction = new Transaction;
        $transaction->user_id = Auth::user()->id;
        $transaction->transaction_id = $transaction_id;
        $transaction->transaction_type = "Investment";
        $transaction->transaction = "debit";
        $transaction->credit = "0";
        $transaction->debit = $request['amount'];
        $transaction->status = 1;
        $transaction->save();

        $email = Auth::user()->email;


        //Mail::to($email)->send(new primary($data));

        //Mail::to('support@s9tradingnetwork.com ')->send(new planEmail($data));

        return back()->with('status', 'Plan Has Been Purchased Successfully');
    }










    public function makeWithdrawal(Request $request)
    {

        $transaction_id = rand(76503737, 12344994);

        $method = $request->input('mode');
        $data['method'] = $method;

        $data['credit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'credit')->sum('credit');
        $data['debit_balance'] = Transaction::where('user_id', Auth::user()->id)->where('status', '1')->where('transaction', 'debit')->sum('debit');
        $data['total_balance'] = $data['credit_balance'] - $data['debit_balance'];
        $plan_amount = $request->input('amount');

        if ($data['total_balance'] <= '0') {
            return redirect('withdrawals')->with('error', 'Your Balance Is Insufficient');
        }

        if ($data['total_balance'] < $plan_amount) {
            return redirect('withdrawals')->with('error', 'Your Balance Is Insufficient');
        }

        $with = new Withdrawal;
        $with->user_id = Auth::user()->id;
        $with->transaction_id = $transaction_id;
        $with->amount = $request['amount'];
        $with->status = 0;
        $with->withdrawal_method = $request['mode'];
        $with->wallet_address = $request['wallet_address'];
        $with->save();

        $transaction = new Transaction;
        $transaction->user_id = Auth::user()->id;
        $transaction->transaction_id = $transaction_id;
        $transaction->transaction_type = "Withdrawal";
        $transaction->transaction = "debit";
        $transaction->credit = "0";
        $transaction->debit = $request['amount'];
        $transaction->status = 0;
        $transaction->save();



        $full_name =  Auth::user()->name;
        $email =  Auth::user()->email;
        $payment_method = $request->input('withdrawal_method');
        $amount = $request->input('amount');
        $wallet = $request->input('wallet_address');


        $data =  $full_name . " " . $email . " just made a " . $payment_method . " deposit of $" . $amount . "with this wallet address: " . $wallet . "";
        $user = "Your $" . $amount . " " . $payment_method . " Withdrawal is under review, please wait for approval from the administrator";
        //Mail::to($email)->send(new UserWithdrawalEmail($user));
        //Mail::to('support@s9tradingnetwork.com')->send(new MakeWithdrawalEmail($data));

        return redirect('/user/withdrawals')->with('status', 'Withdrawal Successfully, Please wait for approval');
    }

    public function verifyAccount()
    {
        $data['kycStatus'] = User::where('id', Auth::user()->id)->get();
        $data['kyc'] = User::where('id', Auth::user()->id)->get();
        return view('dashboard.verify-account', $data)->with('status', 'Documents updated successfully, please wait for approval');
    }
    public function adminLogin()
    {
        return view('admin.login');
    }

    public function uploadKyc(Request $request)
    {
        $user = Auth::user();

        // Validate inputs strictly
        $request->validate([
            'card' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048', // 2MB limit
            'pass' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048'
        ]);

        // Store files using Laravel's storage system (not public root)
        $file_id_card = $request->file('card');
        $file_passport = $request->file('pass');

        $filename_id_card = uniqid('idcard_') . '.' . $file_id_card->getClientOriginalExtension();
        $filename_passport = uniqid('passport_') . '.' . $file_passport->getClientOriginalExtension();

        // Save in secure storage path (storage/app/kyc), not directly public
        $path_id_card = $file_id_card->storeAs('kyc', $filename_id_card, 'local');
        $path_passport = $file_passport->storeAs('kyc', $filename_passport, 'local');

        // Update user record
        $user->kyc_status = 0;
        $user->card = $path_id_card;
        $user->pass = $path_passport;
        $user->save();

        return redirect('user/ver-account')
            ->with('status', 'Document updated successfully, please wait for approval');
    }





    public function sendSupportEmail(Request $request)
    {
        $request->validate([
            'message' => 'required|string|min:1|max:2000',
        ]);

        try {
            $user = Auth::user();
            $data = [
                'name' => $user->name,
                'email' => $user->email,
                'message' => $request->message,
                'subject' => 'New Support Ticket from ' . $user->name
            ];

            // Send email to support
            Mail::to('support@primefideloptions.com')->send(new SupportTicket($data));

            return back()->with('success', 'Your support ticket has been submitted successfully! We will respond shortly.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to submit your support ticket. Please try again later.');
        }
    }








    public function perform()
    {
        Session::flush();
        Auth::guard('web')->logout();
        return redirect('login');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login')->with('status', 'You have been logged out successfully.');
    }
}
