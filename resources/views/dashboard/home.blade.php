@include('dashboard.header')
<div class="main-panel bg-light">
    <div class="content bg-light">
        <div class="page-inner">
            <div class="mt-2 mb-4">
                <h2 class="text-dark pb-2 mb-3">Welcome, {{ Auth::user()->name }}</h2>

                @if(Auth::user()->kyc_status == 1)
                <div class="d-flex align-items-center gap-2 mb-3">
                    <span class="badge bg-success rounded-pill text-white p-2 shadow-sm"
                        style="background: linear-gradient(135deg, #28a745 0%, #218838 100%);">
                        <i class="fas fa-check-circle me-2"></i>
                        <span class="fw-medium">Verified Account</span>
                    </span>
                    <small class="text-muted ms-1">Your identity is confirmed</small>
                </div>
                @endif
                <h5 id="ann" class="text-darkop-7 mb-4">Welcome to your Prime Fidel Options dashboard, control and
                    monitor
                    your
                    trading account</h5>

                <script type="text/javascript">
                    var announment = $("#ann").html();
                                        console.log(announment);
                                        swal({
                                            title: "Annoucement!",
                                            text: announment,
                                            icon: "info",
                                            buttons: {
                                                confirm: {
                                                    text: "Okay",
                                                    value: true,
                                                    visible: true,
                                                    className: "btn btn-info",
                                                    closeModal: true
                                                }
                                            }
                                        });
                </script>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-secondary">
                                <i class="fa fa-dollar-sign"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark"><b>${{number_format($total_balance, 2, '.', ',')}}</b></h5>
                                <small class="text-muted">Account Balance</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-success">
                                <i class="fa fa-coins"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark"><b>${{number_format($profit_balance, 2, '.', ',')}}</b></h5>
                                <small class="text-muted text-dark">Total Profit</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-secondary">
                                <i class="fa fa-gift"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark"><b>${{number_format($earning_balance, 2, '.', ',')}}</b>
                                </h5>
                                <small class="text-muted text-dark">Total Bonus</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-info">
                                <i class="fa fa-retweet"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark"><b>${{number_format($referral_balance, 2, '.', ',')}}</b>
                                </h5>
                                <small class="text-muted text-dark">Total Referral Bonus</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-danger">
                                <i class="fa fa-envelope"></i>
                            </span>

                            <div>
                                <h5 class="mb-1 text-dark"><b>{{ $total_investment_plans }}</b></h5>
                                <small class="text-muted text-dark">Total Investment Plans</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-success">
                                <i class="fa fa-envelope-open"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark"><b>{{ $total_active_investment_plans }}</b></h5>
                                <small class="text-muted text-dark">Total Active Investment Plans</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-warning">
                                <i class="fa fa-download"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark">${{number_format($deposit_balance, 2, '.', ',')}}</h5>

                                <small class="text-muted text-dark">Total Deposit</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="p-3 card bg-light shadow">
                        <div class="d-flex align-items-center">
                            <span class="mr-3 stamp stamp-md bg-danger">
                                <i class="fa fa-arrow-alt-circle-up"></i>
                            </span>
                            <div>
                                <h5 class="mb-1 text-dark">${{number_format($withdrawal_balance, 2, '.', ',')}}</h5>

                                <small class="text-muted text-dark">Total Withdrawals</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="pt-1 col-12">
                    <h3>Personal Trading Chart</h3>
                    <div class="tradingview-widget-container" style="margin:30px 0px 10px 0px;">
                        <div id="tradingview_f933e"></div>
                        <div class="tradingview-widget-copyright"><a href="#" rel="noopener" target="_blank"><span
                                    class="blue-text"></span> <span class="blue-text">Personal trading chart</span></a>
                        </div>
                        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                        <script type="text/javascript">
                            new TradingView.widget({
                                            "width": "100%",
                                            "height": "550",
                                            "symbol": "COINBASE:BTCUSD",
                                            "interval": "1",
                                            "timezone": "Etc/UTC",
                                            "theme": 'light',
                                            "style": "9",
                                            "locale": "en",
                                            "toolbar_bg": "#f1f3f6",
                                            "enable_publishing": false,
                                            "hide_side_toolbar": false,
                                            "allow_symbol_change": true,
                                            "calendar": false,
                                            "studies": [
                                                "BB@tv-basicstudies"
                                            ],
                                            "container_id": "tradingview_f933e"
                                        });
                        </script>
                    </div>

                </div>



                <div class="white-box" style="height: 450px; width:100%">
                    <h4 style="margin-bottom:5px;"> Forex Market Fundamental Data</h4>
                    <!-- TradingView Widget BEGIN -->

                    <span id="tradingview-copyright"><a ref="nofollow noopener" target="_blank"
                            href="http://www.tradingview.com"
                            style="color: rgb(173, 174, 176); font-family: &quot;Trebuchet MS&quot;, Tahoma, Arial, sans-serif; font-size: 13px;"></a></span>
                    <script src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js">
                        {
                                        "currencies": [
                                            "EUR",
                                            "USD",
                                            "JPY",
                                            "BTC",
                                            "ETH",
                                            "LTC",
                                            "GBP",
                                            "CHF",
                                            "AUD",
                                            "CAD",
                                            "NZD",
                                            "CNY"
                                        ],
                                        "isTransparent": false,
                                        "colorTheme": "light",
                                        "width": "100%",
                                        "height": "100%",
                                        "locale": "en"
                                    }
                    </script>

                </div>
            </div>
        </div>
        <!-- end of chart -->
    </div>
    @include('dashboard.footer')