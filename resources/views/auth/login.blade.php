<!DOCTYPE html>
<html lang="en" class="js">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Login | Prime Fidel Options</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/appsf488f488.css?ver=1.1.0') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <script>
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });
    </script>
</head>

<body class="nk-body npc-cryptlite pg-auth is-dark">
    <div class="nk-app-root">
        <div class="nk-wrap">
            <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                <div class="brand-logo text-center mb-2 pb-4">
                    <a class="logo-link" href="{{ url('/') }}">
                        <img class="logo-img logo-light logo-img-lg" src="{{ asset('images/logo.png') }}"
                            alt="Coinrave">
                    </a>
                </div>

                <div class="card card-bordered">
                    <div class="card-inner card-inner-lg">
                        <div class="nk-block-head">
                            <div class="nk-block-head-content">
                                <h4 class="nk-block-title">Login into Account</h4>
                                <div class="nk-block-des mt-2">
                                    <p>Sign in using your email and password.</p>
                                </div>
                            </div>
                        </div>

                        <form action="{{ route('login') }}" method="POST" id="loginForm" class="form-validate is-alter">
                            @csrf
                            <div class="form-group">
                                <label class="form-label" for="email">Email Address <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input name="email" type="email" class="form-control form-control-lg" id="email"
                                        placeholder="Enter your email" value="{{ old('email') }}" required>
                                    <span class="text-danger error-text email_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="password">Password <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <a href="#" class="form-icon form-icon-right passcode-switch"
                                        data-target="password">
                                        <em class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                        <em class="passcode-icon icon-hide icon ni ni-eye"></em>
                                    </a>
                                    <input name="password" type="password" class="form-control form-control-lg"
                                        id="password" placeholder="Enter your password" required>
                                    <span class="text-danger error-text password_error"></span>
                                </div>
                            </div>

                            <div class="form-group d-flex justify-content-between mt-2">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" name="remember" id="remember-me"
                                        {{ old('remember') ? 'checked' : '' }}>
                                    <label class="custom-control-label text-soft" for="remember-me">Remember Me</label>
                                </div>
                                <a class="link link-primary" href="{{ route('password.request') }}">Forgot Password?</a>
                            </div>

                            <div class="form-group">
                                <button type="submit" id="loginBtn" class="btn btn-lg btn-primary btn-block">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div class="form-note-s2 text-center pt-4">
                            New here? <a href="{{ route('register') }}"><strong>Create an account</strong></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nk-footer nk-auth-footer-full">
                <div class="container wide-lg">
                    <div class="row g-3">
                        <div class="col-lg-6 order-lg-last">
                            <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                                <li class="nav-item"><a class="nav-link" href="{{ url('/') }}">Return to Homepage</a>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-soft text-center text-lg-left">Prime Fidel Options &copy; {{ date('Y') }}.
                                All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        toastr.options = {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
            timeOut: 3000,
        };

        $(function() {
            $('#loginForm').on('submit', function(e) {
                e.preventDefault();
                var $btn = $('#loginBtn');
                $btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> Logging in...');

                $('.error-text').text('');

                $.ajax({
                    url: $(this).attr('action'),
                    method: $(this).attr('method'),
                    data: $(this).serialize(),
                    dataType: 'json',
                    success: function(response) {
                        if (response.success && response.redirect) {
                            toastr.success(response.message);
                            window.location.replace(response.redirect);
                        } else {
                            toastr.error(response.message || 'Login failed');
                            $btn.prop('disabled', false).html('Login');
                        }
                    },
                    error: function(xhr) {
                        $btn.prop('disabled', false).html('Login');
                        if (xhr.status === 422) {
                            $.each(xhr.responseJSON.errors, function(key, value) {
                                $('.' + key + '_error').text(value[0]);
                            });
                            toastr.error('Please fix the form errors');
                        } else {
                            toastr.error(xhr.responseJSON.message || 'An error occurred');
                        }
                    }
                });
            });
        });

        $(document).on('click', '.passcode-switch', function(e) {
            e.preventDefault();
            var target = $(this).data('target');
            var input = $('#' + target);
            var icon = $(this).find('.passcode-icon');

            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                icon.removeClass('icon-show').addClass('icon-hide');
            } else {
                input.attr('type', 'password');
                icon.removeClass('icon-hide').addClass('icon-show');
            }
        });
    </script>
</body>

</html>