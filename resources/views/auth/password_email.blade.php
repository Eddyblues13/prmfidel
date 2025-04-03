<!DOCTYPE html>
<html lang="en" class="js">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Reset Password | Prime Fidel Options</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/appsf488f488.css?ver=1.1.0') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <style>
        .spinner-border {
            vertical-align: middle;
            margin-right: 5px;
        }

        .error-text {
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

        .is-invalid {
            border-color: #f44336 !important;
        }
    </style>
</head>

<body class="nk-body npc-cryptlite pg-auth is-dark">
    <div class="nk-app-root">
        <div class="nk-wrap">
            <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                <div class="brand-logo text-center mb-2 pb-4">
                    <a class="logo-link" href="{{ url('/') }}">
                        <img class="logo-img logo-light logo-img-lg" src="{{ asset('images/logo.png') }}"
                            alt="Prime Fidel" style="max-height: 50px;">
                    </a>
                </div>

                <div class="card card-bordered">
                    <div class="card-inner card-inner-lg">
                        <div class="nk-block-head">
                            <div class="nk-block-head-content">
                                <h4 class="nk-block-title">Reset Password</h4>
                                <div class="nk-block-des mt-2">
                                    <p>Enter your email to receive a password reset link.</p>
                                </div>
                            </div>
                        </div>

                        <form action="{{ route('password.email') }}" method="POST" id="passwordResetForm"
                            class="form-validate is-alter">
                            @csrf
                            <div class="form-group">
                                <label class="form-label" for="email">Email Address <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input name="email" type="email"
                                        class="form-control form-control-lg @error('email') is-invalid @enderror"
                                        id="email" placeholder="Enter your email address" value="{{ old('email') }}"
                                        required>
                                    <span class="text-danger error-text email_error"></span>
                                    @error('email')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" id="submitBtn" class="btn btn-lg btn-primary btn-block">
                                    Send Reset Link
                                </button>
                            </div>
                        </form>

                        <div class="form-note-s2 text-center pt-4">
                            Remember your password? <a href="{{ route('login') }}"><strong>Sign in instead</strong></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nk-footer nk-auth-footer-full">
                <div class="container wide-lg">
                    <div class="row g-3">
                        <div class="col-lg-6 order-lg-last">
                            <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ url('/') }}">Return to Homepage</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <div class="nk-block-content text-center text-lg-left">
                                <p class="text-soft">Prime Fidel Options &copy; {{ date('Y') }}. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <script>
        toastr.options = {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
            timeOut: 5000,
            extendedTimeOut: 2000,
            preventDuplicates: true
        };

        $(document).ready(function () {
            $('#passwordResetForm').on('submit', function (e) {
                e.preventDefault();
                var form = $(this);
                var submitBtn = $('#submitBtn');
                
                submitBtn.prop('disabled', true).html(
                    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
                );
                $('.error-text').text('');

                $.ajax({
                    url: form.attr('action'),
                    method: form.attr('method'),
                    data: form.serialize(),
                    dataType: 'json',
                    success: function (response) {
                        toastr.success(response.message || 'Password reset link sent successfully!');
                        form[0].reset();
                    },
                    error: function (xhr) {
                        if (xhr.status === 422) {
                            var errors = xhr.responseJSON.errors;
                            $.each(errors, function (key, value) {
                                $('.' + key + '_error').text(value[0]);
                                $('#' + key).addClass('is-invalid');
                            });
                            toastr.error('Please fix the errors in the form.');
                        } else if (xhr.status === 400) {
                            toastr.error(xhr.responseJSON.message || 'An error occurred. Please try again.');
                        } else {
                            toastr.error('An unexpected error occurred. Please try again.');
                        }
                    },
                    complete: function() {
                        submitBtn.prop('disabled', false).html('Send Reset Link');
                    }
                });
            });

            // Remove error class when user starts typing
            $('input').on('input', function() {
                $(this).removeClass('is-invalid');
                $('.' + $(this).attr('name') + '_error').text('');
            });
        });
    </script>
</body>

</html>