@include('dashboard.header')
<div class="main-panel   bg-light ">
    <div class="content   bg-light ">
        <div class="page-inner">

            @if (session('status'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('status') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            @endif



            <div class="mt-2 mb-5">
                <script>
                    @if(Auth::user()->kyc_status==='1')
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  		toastr.success("Kyc status verified");

  @else
  toastr.options =
  {
  	"closeButton" : true,
  	"progressBar" : true
  }
  toastr.warning("kyc not verified, please verify your kyc documents");
  @endif
                </script>
                <h1 class="title1 text-dark">Account Verification</h1> <br> <br>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div class="mb-5 row">
                <div class="col-lg-8 offset-lg-2 card p-4 shadow-lg   bg-light ">
                    <div class="py-3">
                        <h5 class=" text-dark">KYC verification - Upload documents below to get verified.</h5>
                    </div>
                    <form action="{{ route('user.upload.kyc')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <h5 class="text-dark">Valid identity card. (e.g. Drivers license, international passport or any
                            government approved document).</h5>
                        <input type="file" class="form-control   bg-light  text-dark" name="card" required><br>
                        <h5 class="text-dark">Selfie Photo</h5>
                        <input type="file" class="form-control   bg-light  text-dark" name="passsssss" required><br>
                        <input type="submit" class="btn btn-dark" value="Submit documents">
                    </form>
                </div>
            </div>
        </div>
    </div>
    @include('dashboard.footer')