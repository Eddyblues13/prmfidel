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
				<h1 class="title1 text-dark">Available packages</h1>
			</div>
			<div>
			</div>
			<div>
			</div>
			<div class="mb-5 row">
				<div class="col-lg-4">
					<div class="pricing-table card purple border bg-light shadow p-4">
						<!-- Table Head -->

						<h2 class="text-dark">Starter</h2>
						<!-- Price -->
						<div class="price-tag">
							<span class="symbol text-dark">$</span>
							<span class="amount text-dark">20</span>
						</div>
						<!-- Features -->
						<div class="pricing-features">
							<div class="feature text-dark">Minimum Possible Deposit:<span class="text-dark">$20</span>
							</div>
							<div class="feature text-dark">Maximum Possible Deposit:<span class="text-dark">$50</span>
							</div>
							<div class="feature text-dark">Minimum Return:<span class="text-dark">$230</span></div>
							<div class="feature text-dark">Maximum Return:<span class="text-dark">$60</span></div>
							<div class="feature text-dark">Gift Bonus:<span class="text-dark">$0</span></div>
							<div class="feature text-dark">Duration:<span class="text-dark">4 Hours</span></div>
						</div> <br>
						<!-- Button -->
						<div class="">

							<h5 class="text-dark">Amount to invest: ($20 default)</h5>
							<input type="number" min="20" max="50" name="iamount" placeholder="$20"
								class="form-control text-dark bg-light"> <br>
							<input type="hidden" name="duration" value="4 Hours">
							<input type="hidden" name="id" value="2">
							<input type="hidden" name="_token" value="ogzkTdBowZhWHB4Jh2kIiBoUYPA3CcWd2NGLP8G0">
							<input type="submit" class="btn btn-block pricing-action btn-primary" value="Join plan">
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="pricing-table card purple border bg-light shadow p-4">
						<!-- Table Head -->

						<h2 class="text-dark">Premium</h2>
						<!-- Price -->
						<div class="price-tag">
							<span class="symbol text-dark">$</span>
							<span class="amount text-dark">30</span>
						</div>
						<!-- Features -->
						<div class="pricing-features">
							<div class="feature text-dark">Minimum Possible Deposit:<span class="text-dark">$20</span>
							</div>
							<div class="feature text-dark">Maximum Possible Deposit:<span class="text-dark">$20</span>
							</div>
							<div class="feature text-dark">Minimum Return:<span class="text-dark">$40</span></div>
							<div class="feature text-dark">Maximum Return:<span class="text-dark">$60</span></div>
							<div class="feature text-dark">Gift Bonus:<span class="text-dark">$0</span></div>
							<div class="feature text-dark">Duration:<span class="text-dark">2 Months</span></div>
						</div> <br>
						<!-- Button -->
						<div class="">
							<form method="post"
								action="https://trader.digitalcryptocurrencytrade.com/dashboard/joinplan">
								<h5 class="text-dark">Amount to invest: ($30 default)</h5>
								<input type="number" min="20" max="20" name="iamount" placeholder="$30"
									class="form-control text-dark bg-light"> <br>
								<input type="hidden" name="duration" value="2 Months">
								<input type="hidden" name="id" value="3">
								<input type="hidden" name="_token" value="ogzkTdBowZhWHB4Jh2kIiBoUYPA3CcWd2NGLP8G0">
								<input type="submit" class="btn btn-block pricing-action btn-primary" value="Join plan">
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="pricing-table card purple border bg-light shadow p-4">
						<!-- Table Head -->

						<h2 class="text-dark">Professional</h2>
						<!-- Price -->
						<div class="price-tag">
							<span class="symbol text-dark">$</span>
							<span class="amount text-dark">1000</span>
						</div>
						<!-- Features -->
						<div class="pricing-features">
							<div class="feature text-dark">Minimum Possible Deposit:<span class="text-dark">$950</span>
							</div>
							<div class="feature text-dark">Maximum Possible Deposit:<span class="text-dark">$1000</span>
							</div>
							<div class="feature text-dark">Minimum Return:<span class="text-dark">$230</span></div>
							<div class="feature text-dark">Maximum Return:<span class="text-dark">$500</span></div>
							<div class="feature text-dark">Gift Bonus:<span class="text-dark">$0</span></div>
							<div class="feature text-dark">Duration:<span class="text-dark">5 Months</span></div>
						</div> <br>
						<!-- Button -->
						<div class="">
							<form method="post"
								action="https://trader.digitalcryptocurrencytrade.com/dashboard/joinplan">
								<h5 class="text-dark">Amount to invest: ($1000 default)</h5>
								<input type="number" min="950" max="1000" name="iamount" placeholder="$1000"
									class="form-control text-dark bg-light"> <br>
								<input type="hidden" name="duration" value="5 Months">
								<input type="hidden" name="id" value="5">
								<input type="hidden" name="_token" value="ogzkTdBowZhWHB4Jh2kIiBoUYPA3CcWd2NGLP8G0">
								<input type="submit" class="btn btn-block pricing-action btn-primary" value="Join plan">
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	@include('dashboard.footer')