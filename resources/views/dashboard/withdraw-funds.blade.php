@include('dashboard.header')
<div class="main-panel bg-light">
    <div class="content bg-light">
        <div class="page-inner">
            @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
            @endif
            @if($message = Session::get('success'))
            <div class="alert alert-success">
                <p>{{$message}}</p>
            </div>
            @endif
            <div class="mt-2 mb-4">
                <h1 class="title1 d-inline text-dark">Request for Withdrawal</h1>
            </div>
            <div>
                <div class="row">
                    <div class="col-lg-12">
                    </div>
                </div>
                <div>
                </div>
                <div class="mb-5 row">
                    <div class="col-lg-8 offset-md-2">
                        <div class="p-md-4 p-2 rounded card bg-light">
                            <div class="card-body">
                                <div class="mb-3 alert alert-success">
                                    <h4 class="text-dark">Your Payment Method is <strong>{{$method}}</strong></h4>
                                </div>
                                <form action="{{route('user.make.withdrawal')}}" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <h5 class="text-dark">Enter Amount to withdraw</h5>
                                        <input class="form-control text-dark bg-light" placeholder="Enter Amount"
                                            type="number" name="amount" required>
                                    </div>
                                    <input value="{{$method}}" type="hidden" name="mode">
                                    <div class="form-group">
                                        <h5 class="text-dark">Enter {{$method}} Address </h5>
                                        <input class="form-control text-dark bg-light"
                                            placeholder="Enter {{$method}} Address" type="text" name="wallet_address"
                                            required>
                                        <small class="text-dark">{{$method}} is not a default withdrawal option in your
                                            account, please enter the correct wallet address to recieve your
                                            funds.</small>
                                    </div>

                                    <div class="form-group">
                                        <button class="btn btn-primary" type='submit'>Complete Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('dashboard.footer')