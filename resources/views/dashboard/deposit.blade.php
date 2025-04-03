@include('dashboard.header')
<style>
  .input-hidden {
    /* For Hiding Radio Button Circles */
    position: absolute;
    left: -9999px;
  }

  input[type="radio"]:checked+label>img {
    border: 1px solid rgb(157, 255, 0);
    box-shadow: 0 0 3px 3px #9e00e2;
  }

  input[type="radio"]+label>img {
    border: 1px rgb(0, 0, 0);
    padding: 10px;
    transition: 500ms all;
  }

  input[type="radio"]:checked+label>img {
    transform: rotateZ(-10deg) rotateX(10deg);
  }
</style>

<div class="main-panel bg-light">
  <div class="content bg-light">
    <div class="page-inner">

      <!-- Loading Alert -->
      <div id="loading" class="alert alert-success alert-dismissible fade show" role="alert" style="display: none;">
        <span id="loading-text"></span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <!-- Session Status Messages -->
      @if (session('status'))
      <div class="alert alert-success" role="alert">
        {{ session('status') }}
      </div>
      @endif

      @if($message = Session::get('success'))
      <div class="alert alert-success">
        <p>{{ $message }}</p>
      </div>
      @endif
      <div class="mt-2 mb-4">
        <h1 class="title1 text-dark">Fund Your Account</h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-light">
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                  <form method="post" action="{{route('get.deposit')}}">
                    {{csrf_field()}}
                    <div class="row">
                      <div class="mb-4 col-md-12">
                        <h5 class="card-title text-dark">Enter Amount</h5>
                        <input class="form-control text-dark bg-light" placeholder="Enter Amount" type="number"
                          name="amount" required>
                      </div>
                      <div class="mb-4 col-md-12">
                        <input type="hidden" name="payment_method" id="paymethod">
                      </div>
                      <div class="mb-4 col-md-12">
                        <input type="hidden" name="payment_address" id="paymethod"
                          value="3Dwqqvvk2q7B8gWNPRthN4hjqk4ApDTdpn">
                      </div>
                      <div class="mt-2 mb-1 col-md-12">
                        <h5 class="card-title text-dark">Choose Payment Method from the list below</h5>
                      </div>

                      <!-- Bitcoin Option -->
                      <div class="mb-2 col-md-6">
                        <div class="rounded shadow bg-light">
                          <div class="card-body">
                            <input type="radio" id="radiobtn1" name="payment_method_selection"
                              class="send-data input-hidden" value="Bitcoin">
                            <label for="radiobtn1">
                              <img src="{{asset('user/images/btc.png')}}" style="width:130px;border-radius:20px;" />
                              <br><br>
                              <span class="text-dark">
                                Bitcoin (BTC)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <!-- Ethereum Option -->
                      <div class="mb-2 col-md-6">
                        <div class="rounded shadow bg-light">
                          <div class="card-body">
                            <input type="radio" id="radiobtn2" name="payment_method_selection"
                              class="send-data input-hidden" value="Ethereum">
                            <label for="radiobtn2">
                              <img src="{{asset('user/images/eth.png')}}" style="width:130px;border-radius:20px;" />
                              <br><br>
                              <span class="text-dark">
                                Ethereum (ETH)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <!-- Dogecoin Option -->
                      <div class="mb-2 col-md-6">
                        <div class="rounded shadow bg-light">
                          <div class="card-body">
                            <input type="radio" id="radiobtn3" name="payment_method_selection"
                              class="send-data input-hidden" value="Dogecoin">
                            <label for="radiobtn3">
                              <img src="{{asset('user/images/doge.png')}}" style="width:130px;border-radius:20px;" />
                              <br><br>
                              <span class="text-dark">
                                Dogecoin (DOGE)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <!-- XRP Option -->
                      <div class="mb-2 col-md-6">
                        <div class="rounded shadow bg-light">
                          <div class="card-body">
                            <input type="radio" id="radiobtn4" name="payment_method_selection"
                              class="send-data input-hidden" value="XRP">
                            <label for="radiobtn4">
                              <img src="{{asset('user/images/xrp.png')}}" style="width:130px;border-radius:20px;" />
                              <br><br>
                              <span class="text-dark">
                                XRP
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <!-- USDT (TRC20) Option -->
                      <div class="mb-2 col-md-6">
                        <div class="rounded shadow bg-light">
                          <div class="card-body">
                            <input type="radio" id="radiobtn5" name="payment_method_selection"
                              class="send-data input-hidden" value="USDT(Trc20)">
                            <label for="radiobtn5">
                              <img src="{{asset('user/images/usdt.png')}}" style="width:130px;border-radius:20px;" />
                              <br><br>
                              <span class="text-dark">
                                USDT (TRC20)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="mt-2 mb-1 col-md-12">
                        <input type="submit" class="px-5 btn btn-primary btn-lg" value="Proceed to Payment">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
    $(document).ready(function () {
      // Handle payment method selection
      $(".send-data").on('change', function () {
        var selectedMethod = $("input[name='payment_method_selection']:checked").val();
        
        if (selectedMethod) {
          // Set the hidden payment_method input
          $("#paymethod").val(selectedMethod);

          // Show loading indicator with selected method
          $("#loading-text").text("You have chosen to pay with " + selectedMethod);
          $("#loading").show();

          // Display spinner
          $("#loading").html(
            '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> You have chosen to pay with ' + selectedMethod
          );
        }
      });

      // Handle form submission
      $("form").on('submit', function () {
        if ($("input[name='payment_method_selection']:checked").length == 0) {
          alert("Please select a cryptocurrency payment method.");
          return false;
        } else {
          // Optionally, show a processing message
          $("#loading").html(
            '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing your request...'
          ).show();
        }
      });
    });
  </script>

  @include('dashboard.footer')