<!DOCTYPE html>
<html lang="en">

<head>
    <script type="text/javascript" src="https://js.stripe.com/v3/"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="bingbot" content="noindex, nofollow">
    <meta name="scam-advisor" content="noindex, nofollow">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="Ye6bP1CNFffOxFfI70qMAgqwV6N2btDUclZ7fAGh">
    <title>Prime Fidel Options | User panel</title>
    <link rel="icon" href="user/favicon.png" type="image/png" />

    <!-- Fonts and icons -->
    <script src="{{asset('user/dash/js/plugin/webfont/webfont.min.js')}}"></script>
    <!-- Sweet Alert -->
    <script src="{{asset('user/dash/js/plugin/sweetalert/sweetalert.min.js')}}"></script>
    <!-- CSS Files -->
    <link rel="stylesheet" href="{{asset('user/dash/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('user/dash/css/fonts.min.css')}}">
    <link rel="stylesheet" href="{{asset('user/dash/css/atlantis.min.css')}}">
    <link rel="stylesheet" href="{{asset('user/dash/css/customs.css')}}">
    <link rel="stylesheet" href="{{asset('user/dash/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('user/dash/css/atlantis.min.css')}}">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.2/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/v/bs4/dt-1.10.21/af-2.3.5/b-1.6.3/b-flash-1.6.3/b-html5-1.6.3/b-print-1.6.3/r-2.2.5/datatables.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">

    <!-- Bootstrap Notify -->
    <script src="user/dash/js/plugin/bootstrap-notify/bootstrap-notify.min.js "></script>
    <script src="user/dash/js/plugin/sweetalert/sweetalert.min.js "></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.1/dist/alpine.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js"></script>
    <style>
        [wire\:loading],
        [wire\:loading\.delay],
        [wire\:loading\.inline-block],
        [wire\:loading\.inline],
        [wire\:loading\.block],
        [wire\:loading\.flex],
        [wire\:loading\.table],
        [wire\:loading\.grid] {
            display: none;
        }

        [wire\:offline] {
            display: none;
        }

        [wire\:dirty]:not(textarea):not(input):not(select) {
            display: none;
        }

        input:-webkit-autofill,
        select:-webkit-autofill,
        textarea:-webkit-autofill {
            animation-duration: 50000s;
            animation-name: livewireautofill;
        }

        @keyframes livewireautofill {
            from {}
        }
    </style>

    <!--PayPal-->
    <script>
        // Add your client ID and secret
        var PAYPAL_CLIENT = 'iidjdjdj';
        var PAYPAL_SECRET = 'jijdjkdkdk';

        // Point your server to the PayPal API
        var PAYPAL_ORDER_API = 'https://api.paypal.com/v2/checkout/orders/';
    </script>
    <script src="https://www.paypal.com/sdk/js?client-id=iidjdjdj"></script>

    <!-- toastr-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0- 
     alpha/css/bootstrap.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>

</head>


<body data-background-color="dark">
    <div id="app">

        <!--/PayPal-->

        <!--Start of Tawk.to Script-->
        <script type="text/javascript">
            {
                tawk to codess
            }
        </script>
        <!--End of Tawk.to Script-->
        <div class="wrapper">
            <div class="main-header">
                <!-- Logo Header -->
                <div class="logo-header" data-background-color="blue">
                    <a href="{{url('user/home')}}" class="logo" style="font-size: 27px; color:#fff;">
                        <img src="{{ asset('images/logo.png') }}" alt="" width="200" height="50">
                    </a>
                    <button class="ml-auto navbar-toggler sidenav-toggler" type="button" data-toggle="collapse"
                        data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    <button class="topbar-toggler more"><i class="fas fa-ellipsis-v"></i></button>
                    <div class="nav-toggle">
                        <button class="btn btn-toggle toggle-sidebar">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                <!-- End Logo Header -->

                <!-- Navbar Header -->
                <nav class="navbar navbar-header navbar-expand-lg" data-background-color="blue">

                    <div class="container-fluid">
                        <div class="text-center d-md-block d-none">
                            <a href="{{route('user.deposit')}}"
                                class="pricing-action btn btn-warning btn-sm">Deposit</a> &nbsp;
                            <a href="{{route('user.withdrawals')}}"
                                class="pricing-action btn btn-danger btn-sm">Withdraw
                                Funds</a>

                        </div>
                        <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">

                            {{-- <li class="nav-item hidden-caret">
                                <form action="javascript:void(0)" method="post" id="styleform" class="form-inline">

                                    <div class="form-group">
                                        <label class="style_switch">
                                            <input name="style" id="style" type="checkbox" value="true" class="modes">
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <input type="hidden" name="_token" value="Ye6bP1CNFffOxFfI70qMAgqwV6N2btDUclZ7fAGh">
                                </form>
                            </li> --}}
                            <li class="nav-item hidden-caret">
                                <div id="google_translate_element"></div>
                            </li>

                            <li class="nav-item dropdown hidden-caret">
                                <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <i class="fas fa-layer-group"></i><strong style="font-size:8px;">KYC</strong>
                                </a>
                                <div class="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                    <div class="quick-actions-header">
                                        <span class="mb-1 title">KYC verification</span>
                                        <span class="subtitle op-8"><a>KYC status: </a></span>
                                    </div>
                                    <div class="quick-actions-scroll scrollbar-outer">
                                        <div class="quick-actions-items">
                                            <div class="m-0 row">
                                                <a href="{{route('user.verify.account')}}"
                                                    class="btn btn-success">Verify
                                                    Account </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown hidden-caret">
                                <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <i class="fas fa-user"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user animated fadeIn">
                                    <div class="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div class="user-box">

                                                <div class="u-text">
                                                    <h4>{{Auth::user()->name}}</h4>
                                                    <p class="text-muted">{{Auth::user()->email}}</p><a
                                                        href="{{route('user.account.settings')}}"
                                                        class="btn btn-xs btn-secondary btn-sm">Account Settings</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="{{route('user.deposit')}}">Deposit</a>
                                            <a class="dropdown-item" href="{{route('user.withdrawals')}}">Withdraw</a>
                                            <a class="dropdown-item" href="{{route('user.buy.plan')}}">Buy Plan</a>
                                            <div class="dropdown-divider"></div>


                                            <form id="logout-form" action="{{ route('user.logout') }}" method="POST"
                                                style="display: none;">
                                                @csrf
                                            </form>

                                            <a href="#" class="dropdown-item"
                                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                                Logout
                                            </a>

                                        </li>

                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
            <script type="text/javascript">
                //create investment
                $("#styleform").on('change', function() {
                    $.ajax({
                        url: "user/dashboard/changetheme",
                        type: 'POST',
                        data: $("#styleform").serialize(),
                        success: function(data) {
                            location.reload(true);
                        },
                        error: function(data) {
                            console.log(data);
                        },

                    });
                });
            </script>
            <!-- Stored in resources/views/child.blade.php -->

            <!-- Sidebar -->
            <div class="sidebar sidebar-style-2" data-background-color="light">
                <div class="sidebar-wrapper scrollbar scrollbar-inner">
                    <div class="sidebar-content">
                        <div class="user">
                            <div class="info">
                                <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                    <span>
                                        {{Auth::user()->name}}

                                        <span class="caret"></span>
                                    </span>
                                </a>
                                <div class="clearfix"></div>
                                <div class="collapse in" id="collapseExample">
                                    <ul class="nav">
                                        <li>
                                            <a href="{{route('user.account.settings')}}">
                                                <span class="link-collapse">Account Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-primary">
                            <li class="nav-item active">
                                <a href="{{route('home')}}">
                                    <i class="fa fa-home"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('user.deposit')}}">
                                    <i class="fa fa-download "></i>
                                    <p>Deposit</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('user.withdrawals')}}">
                                    <i class="fa fa-arrow-alt-circle-up "></i>
                                    <p>Withdraw Funds</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{route('user.verify.account')}}">
                                    <i class="fa fa-user " aria-hidden="true"></i>
                                    <p>Verify Account</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{route('user.account.history')}}">
                                    <i class="fa fa-briefcase " aria-hidden="true"></i>
                                    <p>Transactions history</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{route('user.account.history')}}">
                                    <i class="fa fa-coins" aria-hidden="true"></i>
                                    <p>Crypto Exchange</p>
                                </a>
                            </li>

                            <li class="nav-item  ">
                                <a data-toggle="collapse" href="#mpack">
                                    <i class="fas fa-cubes"></i>
                                    <p>Purchase Contract</p>
                                    <span class="caret"></span>
                                </a>
                                <div class="collapse" id="mpack">
                                    <ul class="nav nav-collapse">
                                        <li>
                                            <a href="{{route('user.buy.plan')}}">
                                                <span class="sub-item">Subscribe to a Plan</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{{route('user.account.history')}}">
                                                <span class="sub-item">My Investment</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item ">
                                <a href="{{route('user.refer.user')}}">
                                    <i class="fa fa-recycle " aria-hidden="true"></i>
                                    <p>Refer Users</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{route('user.support')}}">
                                    <i class="fa fa-life-ring" aria-hidden="true"></i>
                                    <p>Help/Support</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{ route('user.logout') }}">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <p>Logout</p>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <!-- End Sidebar -->