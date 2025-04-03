<footer class="footer_top padding-top">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 footer_panel heading_space">
        <a href="index-2.html" class="footer_logo bottom30"><img src="{{ asset('images/logo.png') }}" alt="envas"></a>
        <p class="bottom30">Prime Fidel Options LTD is a financial investment company established by a group of
          professional traders and investors, who have fore seen the future of International Capital Market. The company
          has direct contracts with professional traders and miners around the world that guarantees the best services
          and ensures profits are made and remitted to investors daily.</p>
      </div>
      <div class="col-sm-4 footer_panel heading_space">
        <h3 class="heading bottom30">Useful <span class="yellow_t">Links</span></h3>
        <ul class="links">
          <li><a href="{{url('/')}}"><i class="icon-chevron-small-right"></i>Home</a></li>
          <li><a href="{{url('/about')}}"><i class="icon-chevron-small-right"></i>Company</a></li>
          <li><a href="{{url('/faq')}}"><i class="icon-chevron-small-right"></i>FAQ</a></li>
          <li><a href="{{url('/contact')}}"><i class="icon-chevron-small-right"></i>Contact Us</a></li>
          <li><a href="{{url('/about')}}"><i class="icon-chevron-small-right"></i>Terms & Conditions</a></li>
          <li><a href="{{url('/about')}}"><i class="icon-chevron-small-right"></i>AML Policy</a></li>
          <li><a href="{{url('/about')}}"><i class="icon-chevron-small-right"></i>Privacy Policy</a></li>
          <li><a href="{{url('/about')}}"><i class="icon-chevron-small-right"></i>Payment Policy</a></li>
          <li><a href="/login"><i class="icon-chevron-small-right"></i>Login</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<div class="copyright">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <p>Copyright &copy; 2025 <a href="#">Prime Fidel Options</a>. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
<script src="ui/js/jquery-2.2.3.js"></script>
<script src="ui/js/bootstrap.min.js"></script>
<script src="ui/js/jquery.parallax-1.1.3.js"></script>
<script src="ui/js/jquery.appear.js"></script>
<script src="ui/js/jquery-countTo.js"></script>
<script src="ui/js/bootsnav.js"></script>
<script src="ui/js/jquery.cubeportfolio.min.js"></script>
<script src="ui/js/owl.carousel.min.js"></script>
<script src="ui/js/viedobox_video.js"></script>
<script src="ui/js/jquery.themepunch.tools.min.js"></script>
<script src="ui/js/jquery.themepunch.revolution.min.js"></script>
<script src="ui/js/jquery.themepunch.revolution.min.js"></script>
<script src="ui/js/revolution.extension.layeranimation.min.js"></script>
<script src="ui/js/revolution.extension.navigation.min.js"></script>
<script src="ui/js/revolution.extension.parallax.min.js"></script>
<script src="ui/js/revolution.extension.slideanims.min.js"></script>
<script src="ui/js/revolution.extension.video.min.js"></script>
<script src="ui/js/wow.min.js"></script>
<script src="ui/js/functionsaed0.js?u=1587912412"></script>
<script type="text/javascript" src="alert/js/jquery.fake-notification.min.js"></script>
<script>
  $(document).ready(function() {
    $('#notification-1').Notification({
      // Notification varibles
      Varible1: ["Dirk", "Johnny", "Watkin ", "Alejandro",  "Vina",  "Tony",   "Ahmed","Jackson",  "Noah", "Aiden",  "Darren", "Isabella", "Aria", "John", "Greyson", "Peter", "Mohammed", "William",
      "Lucas", "Amelia", "Mason", "Mathew", "Richard", "Chris", "Mia", "Oliver"],
      Varible2: ["USA","UAE","ITALY", "FLORIDA",  "MEXICO",  "INDIA",  "CHINA",  "CAMBODIA",  "UNITED KINGDOM",  "GERMANY", "AUSTRALIA",  "BANGLADESH", "SWEDEN", "PAKISTAN", "MALDIVES", "SEYCHELLES", 
      "BOLIVIA",
       "SOUTH AFRICA", "ZAMBIA", "ZIMBABWE", "LEBANESE", "SAUDI ARABIA", "CHILE", "PEUTO RICO"],
      
      Amount: [9000, 2500,5000,6669,4440,7989,7052],          
      Content: '[Varible1] from [Varible2] has just Earned <b>$[Amount]</b>',
      // Timer
      Show: ['stable', 5, 10],
      Close: 5,
      Time: [0, 23],
      // Notification style 
      LocationTop: [true, '50%'],
      LocationBottom:[false, '10%'],
      LocationRight: [false, '10%'],            
      LocationLeft:[true, '10px'],
      Background: '#000000',
      BorderRadius: 5,
      BorderWidth: 1,
      BorderColor: '#ff9900',
      TextColor: 'white',
      IconColor: '#ffffff',
      // Notification Animated   
      AnimationEffectOpen: 'slideInUp',
      AnimationEffectClose: 'slideOutDown',
      // Number of notifications
      Number: 40,
      // Notification link
      Link: [false, 'index.html', '_blank']
      
    });     
  });
  $("form#contact-form").submit(function(e) {
      e.preventDefault();    
      var formData = new FormData(this);
      $.ajax({
          url: 'process-contact.php',
          type: 'POST',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          beforeSend:function(){
              $('#btnContact').html("Sending Message <i class='fa fa-spinner fa-spin'></i>").attr("disabled", true);
          },
          success: function (data) {
              $('#btnContact').html("Send Message <i class='fa fa-rocket'></i>").attr("disabled", false);
              if (data == "Done") {
                  swal("Message Sent", "You message was successfully sent to support. You will get a feedback soon", "success");
                  $("form#contact-form").trigger("reset");
              } else {
                  swal("Error", data, "warning");
              }   
          },
          error:function(){
              swal("Network Unavailable", "Please check your internet connection", "warning");
              $('#btnContact').html("Send Message <i class='fa fa-rocket'></i>").attr("disabled", false);
          }
      });
  });
</script>
<!-- GetButton.io widget -->
<script type="text/javascript">
  (function () {
          var options = {
              whatsapp: ". ", // WhatsApp number
              call_to_action: "Message us", // Call to action
              position: "left", // Position may be 'right' or 'left'
          };
          var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
          var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
          s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
          var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
      })();
</script>
<!-- /GetButton.io widget -->
</body>

<!-- Mirrored fromprimefideloptions.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Dec 2021 09:04:53 GMT -->

</html>