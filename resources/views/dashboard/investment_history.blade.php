@include('dashboard.header')
<div class="content">
	<div class="container">
		<div class="page-title">
			<h3>Investment History</h3>
		</div>
		<div class="row">
			<div class="col-md-12 col-lg-12">
				<div class="card">
					<a href="{{url('investments')}}"><button type="button"
							class="btn btn-icon icon-left btn-info mb-2"><i class="fas fa-info-circle"></i>Make new
							Investment</button></a>
					<div class="card-body">
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr>

										<th>Investment Package</th>
										<th>Amount</th>
										<th>Plan Duration</th>
										<th>Percentage</th>
										<th>Profit</th>
										<th>Expeted Return</th>
										<th>Status</th>
										<th>Date</th>

									</tr>
								</thead>
								<tbody>
									@foreach($investment as $investment)
									<tr>
										<td>{{$investment->plan_name}}</td>
										<td>${{number_format($investment->amount, 2, '.', ',')}}</td>
										<td>{{$investment->plan_duration}}</td>
										<td>{{$investment->plan_percentage * 100}}%</td>
										<td>${{number_format($investment->plan_percentage * $investment->amount, 2, '.',
											',')}}</td>
										<td>${{number_format($investment->plan_percentage * $investment->amount +
											$investment->amount, 2, '.', ',')}}
										</td>
										@if($investment->status=='0')
										<td style="color: red">Active</td>
										@elseif($investment->status== '1')
										<td style="color: green">Completed</td>
										@endif
										<td>
											{{ \Carbon\Carbon::parse($investment->created_at)->format('D, M j, Y g:i A')
											}}
										</td>


									</tr>
									@endforeach

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

@include('dashboard.footer')