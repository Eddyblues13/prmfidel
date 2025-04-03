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
				<h1 class="title1 text-dark">Request for Withdrawal</h1>
			</div>
			<div>
			</div>
			<div>
			</div>
			<div class="mb-5 row">
				<div class="col-lg-4">
					<div class="p-3 rounded card bg-light">
						<div class="card-body border-danger">
							<h2 class="card-title mb-3 text-dark"> BNB</h2>
							<h4 class="text-dark">Minimum amount: <strong style="float:right;"> $10</strong></h4><br>

							<h4 class="text-dark">Maximum amount:<strong style="float:right;"> $100000</strong></h4>
							<br>

							<h4 class="text-dark">Charge Type:<strong style="float:right;">percentage</strong></h4><br>

							<h4 class="text-dark">Charges Amount:
								<strong style="float:right;">
									0%
								</strong>
							</h4><br>

							<h4 class="text-dark">Duration:<strong style="float:right;"> Instant</strong></h4><br>
							<div class="text-center">
								<form action="{{route('user.withdraw')}}" method="post">
									@csrf
									<div class="form-group">
										<input type="hidden" value="BNB" name="method">
										<button class="btn btn-primary" type='submit'><i class="fa fa-plus"></i> Request
											withdrawal</button>
									</div>

								</form>

							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="p-3 rounded card bg-light">
						<div class="card-body border-danger">
							<h2 class="card-title mb-3 text-dark"> Doge</h2>
							<h4 class="text-dark">Minimum amount: <strong style="float:right;"> $10</strong></h4><br>

							<h4 class="text-dark">Maximum amount:<strong style="float:right;"> $10000</strong></h4><br>

							<h4 class="text-dark">Charge Type:<strong style="float:right;">percentage</strong></h4><br>

							<h4 class="text-dark">Charges Amount:
								<strong style="float:right;">
									2%
								</strong>
							</h4><br>

							<h4 class="text-dark">Duration:<strong style="float:right;"> Instant Payment</strong></h4>
							<br>
							<div class="text-center">
								<form action="{{route('user.withdraw')}}" method="post">
									@csrf
									<div class="form-group">
										<input type="hidden" value="Doge" name="method">
										<button class="btn btn-primary" type='submit'><i class="fa fa-plus"></i> Request
											withdrawal</button>
									</div>

								</form>

							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="p-3 rounded card bg-light">
						<div class="card-body border-danger">
							<h2 class="card-title mb-3 text-dark"> Bitcoin</h2>
							<h4 class="text-dark">Minimum amount: <strong style="float:right;"> $10</strong></h4><br>

							<h4 class="text-dark">Maximum amount:<strong style="float:right;"> $100000</strong></h4>
							<br>

							<h4 class="text-dark">Charge Type:<strong style="float:right;">percentage</strong></h4><br>

							<h4 class="text-dark">Charges Amount:
								<strong style="float:right;">
									0%
								</strong>
							</h4><br>

							<h4 class="text-dark">Duration:<strong style="float:right;"> Instant</strong></h4><br>
							<div class="text-center">
								<form action="{{route('user.withdraw')}}" method="post">
									@csrf
									<div class="form-group">
										<input type="hidden" value="Bitcoin" name="method">
										<button class="btn btn-primary" type='submit'><i class="fa fa-plus"></i> Request
											withdrawal</button>
									</div>

								</form>

							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Withdrawal Modal -->
			<div id="withdrawdisabled" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header bg-light">
							<h4 class="modal-title text-dark">Withdrawal Status</h4>
							<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body bg-light">
							<h4 class="text-dark">Withdrawal is Disabled at the moment, Please check back later</h4>
						</div>
					</div>
				</div>
			</div>
			<!-- /Withdrawals Modal -->
		</div>
	</div>
	@include('dashboard.footer')