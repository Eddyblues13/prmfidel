@include('dashboard.header')
<div class="main-panel   bg-light  ">
    <div class="content   bg-light  ">
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
                        <div class="p-md-4 p-2 rounded card   bg-light  ">
                            <div class="card-body">
                                <div class="mb-3 alert alert-success">
                                    <h4 class="text-dark">Your Payment Method is <strong>{{$method}} Transfer</strong>
                                    </h4>
                                </div>
                                <form action="{{url('/make-withdrawal')}}" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <h5 class="text-dark">Enter Amount to withdraw</h5>
                                        <input class="form-control text-dark   bg-light  " placeholder="Enter Amount"
                                            type="number" name="amount" required>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="text-dark">Account Name</h5>
                                        <input class="form-control text-dark   bg-light  "
                                            placeholder="Enter Account Name" type="text" name="account_name"
                                            value="{{Auth::user()->name}}" readonly>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="text-dark">Account Number</h5>
                                        <input class="form-control text-dark   bg-light  "
                                            placeholder="Enter Account Number" type="number" name="account_number"
                                            required>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="text-dark">Bank Name</h5>
                                        <select class="form-control text-dark   bg-light  " name="bank_name"
                                            id="sourceasset">

                                            <option value="Bank Chase">Bank Chase</option>
                                            <option value="Wells Fargo">Wells Fargo</option>
                                            <option value="Bank of America">Bank of America</option>
                                            <option value="PNC Bank">PNC Bank</option>
                                            <option value="U.S. Bank">U.S. Bank</option>
                                            <option value="Truist Bank">Truist Bank</option>
                                            <option value="Regions Bank">Regions Bank</option>
                                            <option value="Huntington">Huntington</option>
                                            <option value="Citizens Bank">Citizens Bank</option>
                                            <option value="TD Bank">TD Bank</option>
                                            <option value="M&T Bank">M&T Bank</option>
                                            <option value="JPMorgan Chase Bank, National Association">JPMorgan Chase
                                                Bank, National Association</option>
                                            <option value="Navy Federal Credit Union">Navy Federal Credit Union</option>
                                            <option value="Bank of America, National Association">Bank of America,
                                                National Association</option>
                                            <option value="Alliant">Alliant</option>
                                            <option value="Wells Fargo Bank, National Association">Wells Fargo Bank,
                                                National Association</option>
                                            <option value="American Airlines">American Airlines</option>
                                            <option value="Eastman">Eastman</option>
                                            <option value="Ally Bank">Ally Bank</option>
                                            <option value="Star One">Star One</option>
                                            <option value="Tinker">Tinker</option>
                                            <option value="Desert Financial">Desert Financial</option>
                                            <option value="KeyBank National Association">KeyBank National Association
                                            </option>
                                            <option value=" Wings Financial"> Wings Financial</option>
                                            <option value="Police and Fire">Police and Fire</option>
                                            <option value="Axos Bank">Axos Bank</option>
                                            <option value="Logix">Logix</option>
                                            <option value=" GreenState"> GreenState</option>
                                            <option value="Patelco">Patelco</option>
                                            <option value="Tinker">Tinker</option>
                                            <option value="Pennsylvania State Employees">Pennsylvania State Employees
                                            </option>
                                            <option value="Fifth Third Bank, National Association">Fifth Third Bank,
                                                National Association</option>
                                            <option value="U.S. Bank National Association">U.S. Bank National
                                                Association</option>
                                            <option value="Hudson Valley">Hudson Valley</option>
                                            <option value="Citizens Equity First">Citizens Equity First</option>
                                            <option value="Kinecta">Kinecta</option>
                                            <option value="Redstone">Redstone</option>
                                            <option value="Ent">Ent</option>
                                            <option value="Truist Bank">Truist Bank</option>
                                            <option value="TIAA, FSB">TIAA, FSB</option>
                                            <option value="Discover Bank">Discover Bank</option>
                                            <option value="First Internet Bank">First Internet Bank</option>
                                            <option value="Huntington National Bank">Huntington National Bank</option>
                                            <option value="State Employees Credit Union">State Employees Credit Union
                                            </option>
                                            <option value="Redwood">Redwood</option>
                                            <option value="Space Coast">Space Coast</option>
                                            <option value="Members 1st">Members 1st</option>
                                            <option value="BMO Harris Bank National Association">BMO Harris Bank
                                                National Association</option>
                                            <option value="VyStar">VyStar</option>
                                            <option value="First Technology">First Technology</option>
                                            <option value="Lake Michigan">Lake Michigan</option>
                                            <option value="PNC Bank, National Association">PNC Bank, National
                                                Association</option>
                                            <option value="Bellco">Bellco</option>
                                            <option value="First Citizens Bank & Trust Company">First Citizens Bank &
                                                Trust Company</option>
                                            <option value="Bank Fund Staff">Bank Fund Staff</option>
                                            <option value="Regions Bank">Regions Bank</option>
                                            <option value="Teachers Federal Credit Union">Teachers Federal Credit Union
                                            </option>
                                            <option value="Valley National Bank">Valley National Bank</option>
                                            <option value="Security Service">Security Service</option>
                                            <option value="Randolph-Brooks">Randolph-Brooks</option>
                                            <option value="Flagstar Bank, FSB">Flagstar Bank, FSB</option>
                                            <option value="OnPoint Community">OnPoint Community</option>
                                            <option value="Michigan State University">Michigan State University</option>
                                            <option value="Suncoast">Suncoast</option>
                                            <option value="Manufacturers And Traders Trust Company">Manufacturers And
                                                Traders Trust Company</option>
                                            <option value="Alaska USA">Alaska USA</option>
                                            <option value="Arvest Bank">Arvest Bank</option>
                                            <option value="ESL">ESL</option>
                                            <option value="LendingClub Bank">LendingClub Bank</option>
                                            <option value="Capital One, National Association">Capital One, National
                                                Association</option>
                                            <option value="Zions Bancorporation, N.A.">Zions Bancorporation, N.A.
                                            </option>
                                            <option value="Bethpage">Bethpage</option>
                                            <option value="America First">America First</option>
                                            <option value="SchoolsFirst">SchoolsFirst</option>
                                            <option value="Atlantic Union Bank">Atlantic Union Bank</option>
                                            <option value="Bank of the West">Bank of the West</option>
                                            <option value="DFCU Financial">DFCU Financial</option>
                                            <option value="Golden 1">Golden 1</option>
                                            <option value="Fulton Bank, National Association">Fulton Bank, National
                                                Association</option>
                                            <option value="First Horizon Bank">First Horizon Bank</option>
                                            <option value="Boeing Employees">Boeing Employees</option>
                                            <option value="Firstbank">Firstbank</option>
                                            <option value="Idaho Central">Idaho Central</option>
                                            <option value="Pentagon Federal">Pentagon Federal</option>
                                            <option value="Digital">Digital</option>
                                            <option value="San Diego County">San Diego County</option>
                                            <option value="Citi">Citi</option>
                                            <option value="HSBC Bank USA, National Association">HSBC Bank USA, National
                                                Association</option>
                                            <option value="Quontic Bank">Quontic Bank</option>
                                            <option value="BOKF, National Association">BOKF, National Association
                                            </option>
                                            <option value="Associated Bank, National Association">Associated Bank,
                                                National Association</option>
                                            <option value="Comerica Bank">Comerica Bank</option>
                                            <option value="Investors Bank">Investors Bank</option>
                                            <option value="First National Bank of Pennsylvania">First National Bank of
                                                Pennsylvania</option>
                                            <option value="Cathay Bank">Cathay Bank</option>
                                            <option value="TAB Bank">TAB Bank</option>
                                            <option value="MUFG Union Bank, National Association">MUFG Union Bank,
                                                National Association</option>
                                            <option value="First National Bank of Omaha">First National Bank of Omaha
                                            </option>
                                            <option value="Synchrony Bank">Synchrony Bank</option>
                                            <option value="USAA Federal Savings Bank">USAA Federal Savings Bank</option>
                                            <option value="MidFlorida">MidFlorida</option>
                                            <option value="Washington Federal Bank, National Association">Washington
                                                Federal Bank, National Association</option>
                                            <option value="Mountain America">Mountain America</option>
                                            <option value="IncredibleBank">IncredibleBank</option>
                                            <option value="Webster Bank, National Association">Webster Bank, National
                                                Association</option>
                                            <option value="First Hawaiian Bank">First Hawaiian Bank</option>


                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="text-dark">Account Type</h5>
                                        <select class="form-control text-dark   bg-light  " name="account_type"
                                            id="sourceasset">
                                            <option value="Savings">Savings</option>
                                            <option value="Online Savings">Online Savings</option>
                                            <option value="Current">Current</option>
                                            <option value="Checking">Checking</option>

                                        </select>
                                    </div>
                                    <input value="{{$method}}" type="hidden" name="mode">


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