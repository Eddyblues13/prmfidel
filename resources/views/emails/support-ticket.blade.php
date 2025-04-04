<!DOCTYPE html
    PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns:v='urn:schemas-microsoft-com:vml'>

<head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0; maximum-scale=1.0;' />
    <!--[if !mso]><!-- -->
    <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet'>
    <!--<![endif]-->
    <title>New Support Ticket - Prime Fidel Options</title>
    <style type='text/css'>
        body {
            width: 100%;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            mso-margin-top-alt: 0px;
            mso-margin-bottom-alt: 0px;
            mso-padding-alt: 0px 0px 0px 0px;
        }

        p,
        h1,
        h2,
        h3,
        h4 {
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
        }

        span.preheader {
            display: none;
            font-size: 1px;
        }

        html {
            width: 100%;
        }

        table {
            font-size: 14px;
            border: 0;
        }

        /* Responsive styles */
        @media only screen and (max-width: 640px) {
            .main-header {
                font-size: 20px !important;
            }

            .container590 {
                width: 440px !important;
            }

            .container580 {
                width: 400px !important;
            }
        }

        @media only screen and (max-width: 479px) {
            .main-header {
                font-size: 18px !important;
            }

            .container590 {
                width: 280px !important;
            }
        }
    </style>
</head>

<body class='respond' leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'>
    <!-- Preheader Text -->
    <span class='preheader' style='display: none;'>New support ticket received from {{ $data['name'] }}</span>

    <!-- Main Email Table -->
    <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='#ffffff'>
        <tr>
            <td align='center'>
                <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'>
                    <!-- Logo Section -->
                    <tr>
                        <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <table border='0' width='100%' cellpadding='0' cellspacing='0'>
                                <tr>
                                    <td align='center' height='70' style='height:70px;'>
                                        <a href='{{ config(' app.url') }}'
                                            style='display: block; border-style: none !important; border: 0 !important;'>
                                            <img width='100' border='0' style='display: block; width: 100%;'
                                                src="{{ asset('images/logo.png') }}" alt="Prime Fidel Options" />
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Content Section -->
    <table border='0' width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td align='center'>
                <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'>
                    <tr>
                        <td align='left'
                            style='color: #333333; font-size: 16px; font-family: "Work Sans", Calibri, sans-serif; line-height: 24px;'>
                            <h2 style='color: #3d3d3d; font-weight: 700;'>New Support Ticket Received</h2>
                            <br>
                            <p><strong>From:</strong> {{ $data['name'] }} ({{ $data['email'] }})</p>
                            <p><strong>Subject:</strong> {{ $data['subject'] ?? 'Support Request' }}</p>
                            <br>
                            <div style='background-color: #f8f9fa; padding: 20px; border-left: 4px solid #5caad2;'>
                                <p style='font-style: italic; color: #555;'>Message:</p>
                                <p>{{ $data['message'] }}</p>
                            </div>
                            <br>
                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                <tr>
                                    <td>
                                        <table border='0' cellspacing='0' cellpadding='0'>
                                            <tr>
                                                <td align='center' style='border-radius: 4px;' bgcolor='#5caad2'>
                                                    <a href='mailto:{{ $data[' email'] }}?subject=Re: {{
                                                        $data['subject'] ?? 'Your Support Request' }}' target='_blank'
                                                        style='font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 4px; padding: 12px 25px; border: 1px solid #5caad2; display: inline-block;'>Reply
                                                        to User</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <br><br>
                            <p style='line-height: 24px'>
                                <strong>Kind Regards,</strong><br>
                                Prime Fidel Options Support Team
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Footer Section -->
    <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='#f4f4f4'>
        <tr>
            <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td>
        </tr>
        <tr>
            <td align='center'>
                <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'>
                    <tr>
                        <td>
                            <table border='0' align='left' cellpadding='0' cellspacing='0' class='container590'>
                                <tr>
                                    <td align='left'
                                        style='color: #aaaaaa; font-size: 14px; font-family: "Work Sans", Calibri, sans-serif; line-height: 24px;'>
                                        <div style='line-height: 24px;'>
                                            <span style='color: #333333;'>Copyright {{ date('Y') }} - All Rights
                                                Reserved</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <table border='0' align='right' cellpadding='0' cellspacing='0' class='container590'>
                                <tr>
                                    <td align='center'>
                                        <table align='center' border='0' cellpadding='0' cellspacing='0'>
                                            <tr>
                                                <td align='center'>
                                                    <a style='font-size: 14px; font-family: "Work Sans", Calibri, sans-serif; line-height: 24px;color: #5caad2; text-decoration: none;font-weight:bold;'
                                                        href='{{ config(' app.url') }}/unsubscribe'>UNSUBSCRIBE</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td>
        </tr>
    </table>
</body>

</html>