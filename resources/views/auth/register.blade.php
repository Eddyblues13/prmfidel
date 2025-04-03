<!DOCTYPE html>
<html lang="en" class="js">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Register | Prime Fidel Options</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="{{ asset('assets/css/appsf488f488.css?ver=1.1.0') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body class="nk-body npc-cryptlite pg-auth is-dark">
    <div class="nk-app-root">
        <div class="nk-wrap">
            <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                <div class="card card-bordered">
                    <div class="card-inner card-inner-lg">
                        <div class="nk-block-head">
                            <div class="nk-block-head-content">
                                <h4 class="nk-block-title">Create an Account</h4>
                                <div class="nk-block-des mt-2">
                                    <p>Sign up with your email and get started with your free account.</p>
                                </div>
                            </div>
                        </div>
                        <form action="{{ route('register') }}" method="POST" id="registerForm"
                            class="form-validate is-alter" autocomplete="off">
                            @csrf
                            <input type="hidden" name="honeypot" style="display:none;">
                            <input type="hidden" name="timestamp" value="{{ now()->timestamp }}">

                            @isset($referred_by)
                            <input type="hidden" name="referred_by" value="{{ $referred_by }}">
                            @endisset

                            <div class="form-group">
                                <label class="form-label" for="username">Username <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="text" id="username" name="username" value="{{ old('username') }}"
                                        class="form-control form-control-lg" placeholder="Enter your username"
                                        minlength="3" required>
                                    <span class="text-danger error" id="username_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="full-name">Full Name <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="text" id="full-name" name="name" value="{{ old('name') }}"
                                        class="form-control form-control-lg" placeholder="Enter your full name"
                                        minlength="3" required>
                                    <span class="text-danger error" id="name_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email-address">Email Address <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="email" id="email-address" name="email" value="{{ old('email') }}"
                                        class="form-control form-control-lg" placeholder="Enter your email" required>
                                    <span class="text-danger error" id="email_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="phone-number">Phone Number <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="tel" id="phone-number" name="phone_number"
                                        value="{{ old('phone_number') }}" class="form-control form-control-lg"
                                        placeholder="Enter your phone number" required>
                                    <span class="text-danger error" id="phone_number_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="country">Country <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <select name="country" id="country" class="form-control form-control-lg" required>
                                        <option value="">Select Country</option>
                                        @foreach($countries as $country)
                                        <option value="{{ $country }}" {{ old('country')==$country ? 'selected' : '' }}>
                                            {{ $country }}
                                        </option>
                                        @endforeach
                                    </select>
                                    <span class="text-danger error" id="country_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="password">Password <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="password" id="password" name="password"
                                        class="form-control form-control-lg" minlength="8" required>
                                    <span class="text-danger error" id="password_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="password_confirmation">Confirm Password <span
                                        class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <input type="password" id="password_confirmation" name="password_confirmation"
                                        class="form-control form-control-lg" minlength="8" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" name="confirmation" class="custom-control-input"
                                        id="checkbox" {{ old('confirmation') ? 'checked' : '' }} required>
                                    <label class="custom-control-label" for="checkbox">I agree to the <a href="#"
                                            target="_blank">Terms & Conditions</a></label>
                                    <span class="text-danger error" id="confirmation_error"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" id="registerBtn"
                                    class="btn btn-lg btn-primary btn-block">Register</button>
                            </div>
                        </form>
                        <div class="form-note-s2 text-center pt-4">
                            Already have an account? <a href="{{ route('login') }}"><strong>Sign in instead</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "timeOut": "5000",
        };

        $(function() {
            $('#registerForm').on('submit', function(e) {
                e.preventDefault();
                var $btn = $('#registerBtn');
                $btn.prop('disabled', true).html('Registering...');
                $('.error').text('');

                $.ajax({
                    url: $(this).attr('action'),
                    method: $(this).attr('method'),
                    data: new FormData(this),
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    success: function(response) {
                        if(response.success && response.redirect) {
                            // Immediately redirect without showing spinner
                            window.location.href = response.redirect;
                        } else {
                            toastr.error(response.message || 'Registration failed. Please try again.');
                            $btn.prop('disabled', false).html('Register');
                        }
                    },
                    error: function(xhr) {
                        $btn.prop('disabled', false).html('Register');
                        
                        if(xhr.status === 422) {
                            var errors = xhr.responseJSON.errors;
                            $.each(errors, function(key, value) {
                                $('#' + key + '_error').text(value[0]);
                            });
                            toastr.error('Please fix the highlighted errors and try again.');
                        } else {
                            var errorMessage = xhr.responseJSON && xhr.responseJSON.message 
                                ? xhr.responseJSON.message 
                                : 'An unexpected error occurred. Please try again.';
                            toastr.error(errorMessage);
                        }
                    }
                });
            });
        });
    </script>
</body>

</html>