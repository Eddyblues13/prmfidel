@include('dashboard.header')
<div class="content">
	<div class="container">
		@if (session('error'))
		<div class="alert alert-danger" role="alert">
			<b>Error!</b>{{ session('error') }}
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
		<div class="page-title">
			<h3>Investment Plans</h3>
			<div class="footer">
				<hr />
				<div class="stats"></div>
			</div>
		</div>
		<div class="row">
			<div class="page-title" style="text-align: center;">
				<h3>Start Your New Investment</h3>
				<h3>Today</h3>
				<h3>Choose any of the Investment plans and start with</h3>

			</div>
			<div class="col-md-12 col-lg-12">
				<div class="card" style="text-align: center;">
					<div class="card-header">BASIC PACKAGE</div>
					<div class="card-body">
						<h1><b>5%</b></h1>
						<p>returns daily</p>
						<p>After 24 hours</p>
					</div>
					<hr>
					<p>Minimum Deposit: $20 USD</p>
					<p>Maximum Deposit: $499 USD</p>
					<b style="color: blue;">Expected Returns:$18500 USD- $184998.15 USD</b>


					<form action="{{url('/buy-plan')}}" method="post">
						@csrf
						<h5 class="text-dark">Amount to invest: ($20 default)</h5>

						<input type="hidden" value="0.05" name="plan_percent">
						<input type="hidden" value="5%" name="plan_percentage">
						<input type="number" min="20" max="499" name="amount" placeholder="$20" value="20"
							class="form-control"> <br>
						<input type="hidden" name="plan_name" value="BASIC PACKAGE">
						<input type="hidden" name="plan_duration" value="24 Hours">
						<button type="submit" class="btn btn-secondary mb-2"
							style="margin: 40px; color: white; padding: 20px;">
							<h6>SELECT PLAN</h6>
						</button>
					</form>
				</div>

			</div>
			<div class="col-md-12 col-lg-12">
				<div class="card" style="text-align: center;">
					<div class="card-header">SUPER PACKAGE</div>
					<div class="card-body">
						<h1><b>15%</b></h1>
						<p>returns daily</p>
						<p>After 24 hours</p>
					</div>
					<hr>
					<p>Minimum Deposit: $500 USD</p>
					<p>Maximum Deposit: $3999 USD</p>
					<b style="color: blue;">Expected Returns:$47000 USD- 0 USD</b>
					<form action="{{url('/buy-plan')}}" method="post">
						@csrf
						<h5 class="text-dark">Amount to invest: ($500 default)</h5>

						<input type="hidden" value="0.15" name="plan_percent">
						<input type="hidden" value="15%" name="plan_percentage">
						<input type="number" min="500" max="3999" name="amount" placeholder="$500" value="500"
							class="form-control"> <br>
						<input type="hidden" name="plan_name" value="SUPER PACKAGE">
						<input type="hidden" name="plan_duration" value="24 Hours">
						<button type="submit" class="btn btn-secondary mb-2"
							style="margin: 40px; color: white; padding: 20px;">
							<h6>SELECT PLAN</h6>
						</button>
					</form>
				</div>

			</div>
			<div class="col-md-12 col-lg-12">
				<div class="card" style="text-align: center;">
					<div class="card-header">STANDARD</div>
					<div class="card-body">
						<h1><b>20%</b></h1>
						<p>returns daily</p>
						<p>After 24 hours</p>
					</div>
					<hr>
					<p>Minimum Deposit: $4000 USD</p>
					<p>Maximum Deposit: $5999 USD</p>
					<b style="color: blue;">Expected Returns:$622.5 USD - $6223.755 USD</b>
					<form action="{{url('/buy-plan')}}" method="post">
						@csrf
						<h5 class="text-dark">Amount to invest: ($4000 default)</h5>

						<input type="hidden" value="0.20" name="plan_percent">
						<input type="hidden" value="20%" name="plan_percentage">
						<input type="number" min="4000" max="5999" name="amount" placeholder="$4000" value="4000"
							class="form-control"> <br>
						<input type="hidden" name="plan_name" value="STANDARD PACKAGE">
						<input type="hidden" name="plan_duration" value="24 Hours">
						<button type="submit" class="btn btn-secondary mb-2"
							style="margin: 40px; color: white; padding: 20px;">
							<h6>SELECT PLAN</h6>
						</button>
					</form>

				</div>

			</div>
			<div class="col-md-12 col-lg-12">
				<div class="card" style="text-align: center;">
					<div class="card-header">EXPERT</div>
					<div class="card-body">
						<h1><b>30%</b></h1>
						<p>returns daily</p>
						<p>After 24 hours</p>
					</div>
					<hr>
					<p>Minimum Deposit: $6000 USD</p>
					<p>Maximum Deposit: $100000 USD</p>
					<b style="color: blue;">Expected Returns:$7450 USD- $14898.51 USD</b>
					<form action="{{url('/buy-plan')}}" method="post">
						@csrf
						<h5 class="text-dark">Amount to invest: ($6000 default)</h5>

						<input type="hidden" value="0.30" name="plan_percent">
						<input type="hidden" value="30%" name="plan_percentage">
						<input type="number" min="6000" max="100000" name="amount" placeholder="$6000" value="6000"
							class="form-control"> <br>
						<input type="hidden" name="plan_name" value="EXPERT PACKAGE">
						<input type="hidden" name="plan_duration" value="24 Hours">
						<button type="submit" class="btn btn-secondary mb-2"
							style="margin: 40px; color: white; padding: 20px;">
							<h6>SELECT PLAN</h6>
						</button>
					</form>
				</div>

			</div>




		</div>



	</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

@include('dashboard.footer')