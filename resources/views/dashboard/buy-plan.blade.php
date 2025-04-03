@include('dashboard.header')

<script>
    // Show and hide the duration select based on input length
    $(document).on('keyup', "[id^='field']", function() {
        var val = $(this).val();
        var planId = $(this).attr('id').replace('field', '');
        if(val.length == 0) {
            $("#field" + planId).hide();
        } else {
            $("#field" + planId).show();
        }
    });
</script>

<div class="main-panel bg-light">
    <div class="content bg-light">
        <div class="page-inner">
            @if (session('error'))
            <div class="alert alert-danger" role="alert">
                <b>Error!</b> {{ session('error') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @elseif (session('status'))
            <div class="alert alert-success" role="alert">
                <b>Success!</b> {{ session('status') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @elseif (session('message'))
            <div class="alert alert-success" role="alert">
                <b>Success!</b> {{ session('message') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif

            <div class="col-lg-8 offset-lg-2 card bg-light shadow-lg p-lg-3 p-sm-5">
                <h1 class="text-dark">Investment Plans Just For You</h1>
                <br>
                <!--<img src="../ui/images/security.jpg" height="300" width="600" align="right" style="padding:5px;">-->
                <p class="text-justify text-dark">
                    In Bitmain Mining Options you will receive profit every hour. You will enjoy perpetual profits each
                    hour of the day. Our system automatically sends the profit directly to your account through which
                    you invested here. Compounding is available in all plans, maximizing your profits with minimal risk.
                </p>
                <a href="{{ url('/investmenthistory') }}" class="mb-2 text-white btn btn-warning">Investment History</a>
            </div>

            <div class="row mb-5">
                @foreach($plans as $plan)
                <div class="col-lg-4 p-4 card bg-light shadow-lg">
                    <div class="pricing-table purple border bg-light shadow-lg">
                        <!-- BTC Label -->
                        <!--<h2 style="color: gold;">{{ $plan->btc }} BTC</h2>-->

                        <!-- Table Head -->
                        <h2 style="color: blue;">{{ $plan->name }}</h2>

                        <!-- Price -->
                        <h4 style="color: blueviolet;">Pays {{ $plan->returns }}% daily</h4>

                        <!-- Additional Data -->
                        <div class="pricing-features">
                            <div class="featured text-dark">Weekly Interest: <span class="text-dark">{{
                                    $plan->weekly_interest }}</span></div>
                            <div class="featured text-dark">Investment Sum: <span class="text-dark">{{
                                    $plan->investment_sum }}</span></div>
                            <div class="featured text-dark">Withdrawal Commission: <span class="text-dark">{{
                                    $plan->withdrawal_commision }}</span></div>
                            <div class="featured text-dark">Referral Bonus: <span class="text-dark">{{
                                    $plan->referral_bonus }}</span></div>
                        </div>

                        <!-- Features -->
                        <div class="pricing-features">
                            <div class="featured text-dark">Minimum Deposit: <span class="text-dark">${{
                                    number_format($plan->min_deposit, 2) }}</span></div>
                            <div class="featured text-dark">Maximum Deposit: <span class="text-dark">${{
                                    number_format($plan->max_deposit, 2) }}</span></div>
                        </div>
                        <br>

                        <!-- Button -->
                        <div>
                            <form style="padding:3px;" action="{{ route('buy.plan') }}" method="post">
                                @csrf
                                <input type="hidden" name="plan_name" value="{{ $plan->name }}">
                                <input type="hidden" name="plan_percent" value="{{ $plan->returns / 100 }}">
                                <input type="hidden" name="plan_percentage" value="{{ $plan->returns }}%">

                                <h5 class="text-dark">Amount to invest:</h5>
                                <input type="number" min="{{ $plan->min_deposit }}" max="{{ $plan->max_deposit }}"
                                    name="amount" placeholder="Amount" class="form-control text-dark bg-light" required
                                    id="field{{$plan->id}}"> <br>

                                <select class="form-control text-dark bg-light" id="field{{$plan->id}}"
                                    name="plan_duration" required>
                                    <option value="none" selected>Select Duration of your investment</option>
                                    <option value="14 Days">14 Days</option>
                                    <option value="1 month">1 month</option>
                                    <option value="2 months">2 months</option>
                                    <option value="3 months">3 months</option>
                                    <option value="4 months">4 months</option>
                                    <option value="6 months">6 months</option>
                                    <option value="12 months">12 months</option>
                                    <option value="2 years">2 years</option>
                                </select>
                                <br>
                                <input type="submit" name="stocks"
                                    class="btn btn-block pricing-action btn-warning nav-pills" value="join"
                                    style="border-radius: 40px;">
                            </form>
                        </div>
                    </div>
                </div>
                @endforeach


            </div>
        </div>
    </div>
</div>