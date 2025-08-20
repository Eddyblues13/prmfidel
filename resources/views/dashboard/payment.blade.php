@include('dashboard.header')
<div class="main-panel bg-light">
  <div class="content bg-light">
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

    <div class="card text-center bg-light shadow-lg">
      <div class="card-header">
        <h2 class="text-dark">Payment Details</h2>
      </div>

      <div class="card-body bg-light">
        <h1 class="title1 text-dark">{{ $item }} Payment</h1>
        <p class="title1 text-primary">Send <strong>${{ $amount }}</strong> worth of {{ $item }} to the address below
        </p>

        @php
        $wallet = \App\Models\WalletDetail::where('network', $item)->first();
        @endphp

        @if($wallet)
        <!-- For XRP show both address and tag -->
        @if($item == 'Ripple')
        <div class="alert alert-warning">
          <strong>Important:</strong> You must include both the XRP address AND destination tag for this payment
        </div>

        <div class="input-group mt-3 mb-3">
          <input type="text" id="walletAddress" class="form-control bg-light text-dark" value="{{ $wallet->address }}"
            readonly>
          <button class="btn btn-primary" type="button" onclick="copyAddress()">Copy Address</button>
        </div>

        <div class="input-group mt-3 mb-3">
          <input type="text" id="xrpTag" class="form-control bg-light text-dark" value="{{ $wallet->xrp_tag }}"
            readonly>
          <button class="btn btn-primary" type="button" onclick="copyTag()">Copy Tag</button>
        </div>

        @else
        <!-- For all other cryptocurrencies -->
        <div class="input-group mt-3 mb-3">
          <input type="text" id="walletAddress" class="form-control bg-light text-dark" value="{{ $wallet->address }}"
            readonly>
          <button class="btn btn-primary" type="button" onclick="copyAddress()">Copy Address</button>
        </div>
        @endif

        <!-- QR Code -->
        <div class="mt-3 mb-3">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{ urlencode($wallet->address) }}"
            alt="QR Code">
        </div>

        <div class="alert alert-info">
          <strong>Network Type:</strong>
          @if($item == 'TRC20')
          TRC20 Network
          @elseif($item == 'Bitcoin')
          BTC Network
          @elseif($item == 'Ethereum')
          ERC20 Network
          @elseif($item == 'Dogecoin')
          DOGE Network
          @elseif($item == 'Ripple')
          XRP Network (Don't forget the destination tag!)
          @elseif($item == 'Solana')
          SOL Network
          @endif
        </div>
        @else
        <p class="text-danger">Wallet address not found for this payment method. Please contact support.</p>
        @endif
      </div>

      <div class="card-footer text-muted">
        @if($item == 'Ripple')
        <h5 class="text-danger">Warning: Payments without the correct destination tag may be lost!</h5>
        @else
        <h5 class="text-info">Ensure to copy the address properly or scan the QR code to avoid payment errors.</h5>
        @endif
        <p class="text-warning">Send only {{ $item }} to this address. Sending other assets may result in permanent
          loss.</p>
      </div>
    </div>

    <div class="col card bg-light shadow-lg mt-4">
      <div class="card-body text-center">
        <h5 class="text-dark">Upload Payment Proof After Payment</h5>
        <form action="{{ route('make.deposit') }}" method="POST" enctype="multipart/form-data">
          @csrf
          <div class="form-group">
            <input type="file" name="imageee" class="form-control bg-light text-dark" required>
            <small class="text-muted">Upload screenshot of your transaction</small>
            @if($item == 'Ripple')
            <small class="text-danger d-block">Must show both XRP address and destination tag in screenshot</small>
            @endif
          </div>
          <input type="hidden" name="amount" value="{{ $amount }}">
          <input type="hidden" name="payment_method" value="{{ $item }}">
          <div class="form-group mt-3">
            <input type="submit" class="btn btn-success" value="Submit Payment">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  function copyAddress() {
    var copyText = document.getElementById("walletAddress");
    copyText.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
    alert("{{ $item }} wallet address copied to clipboard");
  }
  
  function copyTag() {
    var copyText = document.getElementById("xrpTag");
    copyText.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
    alert("XRP destination tag copied to clipboard");
  }
</script>

@include('dashboard.footer')