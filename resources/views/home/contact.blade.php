
@include('home.header')
 <!-- TradingView Widget BEGIN -->
 <div class="tradingview-widget-container" style="background: #232733;">
    <div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="../s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async="">
    {
    "symbols": [
      {
        "title": "S&P 500",
        "proName": "OANDA:SPX500USD"
      },
      {
        "title": "Nasdaq 100",
        "proName": "OANDA:NAS100USD"
      },
      {
        "title": "EUR/USD",
        "proName": "FX_IDC:EURUSD"
      },
      {
        "title": "BTC/USD",
        "proName": "BITSTAMP:BTCUSD"
      },
      {
        "title": "ETH/USD",
        "proName": "BITSTAMP:ETHUSD"
      }
    ],
    "colorTheme": "dark",
    "isTransparent": true,
    "displayMode": "adaptive",
    "locale": "en"
  }
    </script>
  </div>
  <!-- TradingView Widget END --><section class="page_header" style="background-position: 50% -44px;">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
       <p>We'll love to hear from you</p>
       <h1>Contact Us</h1>
      </div>
    </div>
  </div>
</section>
<div class="page_linker">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
       <ul class="breadcrumb">
        <li><a href="index-2.html"><i class="icon-home6"></i>Home</a></li>
        <li class="active">Contact Us</li>
      </ul>
      </div>
    </div>
  </div>
</div>
<section class=" padding-top contact ">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
         <div class="contact_detail padding-bottom">
           <h3 class="bottom20">Contact us</h3>
           <p class="bottom30">Want to work with us or need more details about our platform, you can fill the form below to get in touch with us. We have a team of seasoned customer care agents who are there round the clock to make sure we serve you at any point in time you need our attention</p>
           <p class="bottom20">Our innovative pricing, pooled liquidity, and execution algorithm to seek the best price help remove the hassles of trading on a crypto Exchange. Our experts takes care of all the Works for you.</p>
           <h3 class="bottom20">Our Contacts</h3>
           <p>We made several channels available to make it quick and easy to get in touch with us at any given time. All of the channels are available on a 24/7 base</p>
            <div class="row">
              <div class="col-sm-6">
                <div class="address">
                <span><i class="icon-mail"></i></span>
                <div class="text">
                  <h4>Email Address</h4>
                  <p>support@globalfininvt.com</p>
                </div>
               </div>
              </div>
              <div class="col-sm-6">
                <div class="address">
                <span><i class="icon-location"></i></span>
                <div class="text">
                  <h4>Address</h4>
                  <p>3258 Polna field street, poland </p>
                </div>
                
               </div>
              </div>
            </div>
         </div>
      </div>
      <div class="col-sm-6">
        <h3 class="bottom20">Let’s Talk To Us</h3>
        <form class="callus padding-bottom" method="POST" id="contact-form">
            <div class="form-group">
              <label>Your Name *</label>
              <div class="input-group">
                <input type="text" class="form-control" required="" name="fullname" id="fullname">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
              </div>
            </div>
            <div class="form-group">
              <label>Email Addres *</label>
              <div class="input-group">
                <input type="email" class="form-control" required="" name="email" id="email">
                <span class="input-group-addon"><i class="icon-envelope2"></i></span>
              </div>
            </div>
            <div class="form-group">
              <label>Message *</label>
              <div class="input-group">
                <textarea class="form-control" name="message" id="message"></textarea>
                <span class="input-group-addon"><i class=" icon-comments"></i></span>
              </div>
            </div>
            <button type="submit" class="btn-green border_radius" id="btnContact">Send Message <i class='fa fa-rocket'></i></button>
        </form>
      </div>
    </div>
  </div>
</section>
<!--Contact Info-->
<div class="container bg_contact bg_two border_radius wow bounceInUp" data-wow-delay="500ms">
  <div class="row ">
    <div class="col-sm-6">
      <div class="contact_inner">
        <i class="icon-phone4"></i>
        <h5><strong>+447380945951</strong></h5>
        <a href="mailto:support@globalfininvt.com"><span class="__cf_email__">support@globalfininvt.com</span></a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="contact_inner">
        <i class="icon-icons20"></i>
        <h5><strong>Mon - Sun 8.00 - 20.00</strong></h5>
        <h5>Sunday Closed</h5>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="contact_inner">
        <i class="icon-location"></i>
        <h5><strong>3258 Polna field street, poland </strong></h5>
      </div>
    </div>
  </div>
</div>
                        
            
                         
		
		@include('home.footer')