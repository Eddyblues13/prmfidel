<footer class="footer bg-light text-dark">
    <div class="container-fluid">
        <div class="text-center row copyright text-align-center">
            <p>All Rights Reserved &copy; Prime Fidel Options 2025</p>
        </div>
    </div>
</footer>
</div>
</div>
</div>

<!--   Core JS Files   -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="{{asset('user/dash/js/core/popper.min.js')}}"></script>
<script src="{{asset('user/dash/js/core/bootstrap.min.js ')}}"></script>
<script src="{{asset('user/dash/js/customs.js')}}"></script>

<!-- jQuery UI -->
<script src="{{asset('user/dash/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js')}}"></script>
<script src="{{asset('user/dash/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js')}}"></script>

<!-- jQuery Scrollbar -->
<script src="{{asset('user/dash/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js')}}"></script>

<!-- jQuery Sparkline -->
<script src="{{asset('user/dash/js/plugin/jquery.sparkline/jquery.sparkline.min.js')}}"></script>

<!-- Sweet Alert -->
<script src="{{asset('user/dash/js/plugin/sweetalert/sweetalert.min.js')}}"></script>
<!-- Bootstrap Notify -->
<script src="{{asset('user/dash/js/plugin/bootstrap-notify/bootstrap-notify.min.js')}}"></script>

<script type="text/javascript"
    src="https://cdn.datatables.net/v/bs4/dt-1.10.21/af-2.3.5/b-1.6.3/b-flash-1.6.3/b-html5-1.6.3/b-print-1.6.3/r-2.2.5/datatables.min.js">
</script>

<script src="{{asset('user/dash/js/atlantis.min.js')}}"></script>
<script src="{{asset('user/dash/js/atlantis.js')}}"></script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>
<script type="text/javascript">
    function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }
</script>

<script type="text/javascript">
    var badWords = [
            '<!--Start of Tawk.to Script-->',
            '<script type="text/javascript">',
            '<!--End of Tawk.to Script-->'
        ];
        $(':input').on('blur', function() {
            var value = $(this).val();
            $.each(badWords, function(idx, word) {
                value = value.replace(word, '');
            });
            $(this).val(value);
        });
</script>
<script>
    $(document).ready(function() {
            $('#ShipTable').DataTable({
                order: [
                    [0, 'desc']
                ],
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'print', 'excel', 'pdf'
                ]
            });


            $(".dataTables_length select").addClass("bg-light text-dark");
            $(".dataTables_filter input").addClass("bg-light text-dark");
        });
</script>
<script>
    $(document).ready(function() {
            $('.UserTable').DataTable({
                order: [
                    [0, 'desc']
                ]
            });
            $(".dataTables_length select").addClass("bg-light text-dark");
            $(".dataTables_filter input").addClass("bg-light text-dark");
        });
</script>
<script src="/livewire/livewire.js?id=25f025805c3c370f7e87" data-turbo-eval="false" data-turbolinks-eval="false">
</script>
<script data-turbo-eval="false" data-turbolinks-eval="false">
    window.livewire = new Livewire();
        window.Livewire = window.livewire;
        window.livewire_app_url = '';
        window.livewire_token = 'Ye6bP1CNFffOxFfI70qMAgqwV6N2btDUclZ7fAGh';
        window.deferLoadingAlpine = function(callback) {
            window.addEventListener('livewire:load', function() {
                callback();
            });
        };
        document.addEventListener("DOMContentLoaded", function() {
            window.livewire.start();
        });
</script>

</body>

</html>