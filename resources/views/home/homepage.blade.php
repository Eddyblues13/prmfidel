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
<!-- TradingView Widget END -->
<!--Slider Main-->
<section class="rev_slider_wrapper">
  <div id="rev_slider" class="rev_slider top" data-version="5.0">
    <ul>
      <!-- SLIDE  -->
      <li data-transition="fade">
        <!-- MAIN IMAGE -->
        <img src="ui/images/home1-banner2.jpg" alt="" data-bgposition="center center" data-bgfit="cover">
        <!-- LAYER NR. 1 -->
        <h1 class="tp-caption  tp-resizeme uppercase" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['290','190','190','100']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000">Impeccable
          <strong class="yellow_t">Service
          </strong>
          <br>
          <strong class="yellow_t">100% Insurance.
          </strong>
        </h1>
        <div class="tp-caption  tp-resizeme" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['360','260','260','200']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1300">
          <p> Strong Affliates Defi projects. We utilize market data to derive huge revenue in the cryptocurrency
            ecosystem
          </p>
        </div>
        <div class="tp-caption  tp-resizeme" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['410','310','290','180']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1600">
          <a href="{{route('login')}}" class="btn-border text-uppercase border_radius">Login
          </a>
          <a href="{{route('register')}}" class="text-uppercase border_radius btn-yellow">Register
          </a>
        </div>
      </li>
      <li data-transition="fade">
        <img src="ui/images/home3-banner3.jpg" alt="" data-bgposition="center center" data-bgfit="cover">
        <h1 class="tp-caption  tp-resizeme uppercase" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['290','190','190','100']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000">Smart Encrypted
          <br>
          <strong class="yellow_t">Contracts
          </strong>
          <br>
          <strong class="yellow_t">with Special
          </strong>
          <br>
          <strong>Insurance
          </strong>
        </h1>
        <div class="tp-caption  tp-resizeme" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['360','260','260','200']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1300">
          <p>We offer the most secured crypto trading and investment solution on the globe
          </p>
        </div>
        <div class="tp-caption  tp-resizeme" data-x="['left','left','left','center']"
          data-hoffset="['0','15','15','15']" data-y="['410','310','290','180']" data-voffset="['0','0','0','0']"
          data-responsive_offset="on" data-transform_idle="o:1;"
          data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;"
          data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1600">
          <a href="{{route('login')}}" class="btn-border text-uppercase border_radius">Login
          </a>
          <a href="{{route('register')}}" class="text-uppercase border_radius btn-yellow">Register
          </a>
        </div>
      </li>
    </ul>

  </div>
</section>
<!--SLIDERR Ends-->

<!--Three columns text Info-->
<section id="info" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-right wow fadeInDown" data-wow-delay="500ms">
        <div id="google_translate_element" style=" max-width: 100%; "></div>
      </div>

      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="text-capitalize bottom10">features <span class="yellow_t">Fully Functional</span></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div class="text_box text-center top40 wow fadeIn" data-wow-delay="700ms">
          <span><i class="fa fa-user-plus"></i></span>
          <h4 class="bottom10">Strong Security</h4>
          <p>Protection &amp; against DDoS attacks, full data encryption.</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="text_box text-center top40 wow fadeIn" data-wow-delay="900ms">
          <span><i class="fa fa-gift"></i></span>
          <h4 class="bottom10">Invest</h4>
          <p>Make Investments &amp; earn lot of benefits with a 100% Insured Company.</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="text_box  text-center top40 wow fadeIn" data-wow-delay="1100ms">
          <span><i class="icon-bargraph"></i></span>
          <h4 class="bottom10">World Coverage</h4>
          <p>Providing services in 89% countries around the globe.</p>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-sm-4">
        <div class="text_box text-center top40 wow fadeIn" data-wow-delay="700ms">
          <span><i class="fa fa-money"></i></span>
          <h4 class="bottom10">High Liquidity</h4>
          <h5>Fast access to high liquidity orderbook for top currency pairs</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="text_box text-center top40 wow fadeIn" data-wow-delay="900ms">
          <span><i class="fa fa-history"></i></span>
          <h4 class="bottom10">Mobile Friendly</h4>
          <h5>Our User Dashboard is made to match all Mobile Resolution</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="text_box  text-center top40 wow fadeIn" data-wow-delay="1100ms">
          <span><i class="fa fa-usd"></i></span>
          <h4 class="bottom10">Payment Options</h4>
          <h5>Reasonable trading fees for traders and all market makers using popular methods:Bitcoin(BTC)
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Info Text ends-->


<!--Good Plan-->
<section id="plans" class="padding light">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 content_left">
        <figure>
          <img src="ui/images/good-plans.jpg" alt="Good Plans" class="img-responsive">
        </figure>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 content_right shadow  margin-bottom">
        <div id="plan_slider" class="owl-carousel">
          <div class="item">
            <span class="count bottom20 blue_bg">1</span>
            <p class="bottom10">SAFE AND SECURE</p>
            <p class="bottom20">Trade with 100% peace of mind as we have the best system security team onboard.</p>
            <a href="about.html" class="btn-border text-uppercase border_radius">Read More</a>
          </div>
          <div class="item">
            <span class="count bottom20 blue_bg">2</span>
            <p class="bottom10">INSTANT TRADING</p>
            <p class="bottom20">With our lightning speed servers, you are sure to get the best out of your investments.
            </p>
            <a href="about.html" class="btn-border text-uppercase border_radius">Read More</a>
          </div>
          <div class="item">
            <span class="count bottom20 blue_bg">3</span>
            <p class="bottom10">PROGRESSIVE REVENUE</p>
            <p class="bottom20">Watch your account grow in real time and monitor how much revenue is being generated
              from your investment.</p>
            <a href="about.html" class="btn-border text-uppercase border_radius">Read More</a>
          </div>
          <div class="item">
            <span class="count bottom20 blue_bg">4</span>
            <p class="bottom10">COVERED BY INSURANCE</p>
            <p class="bottom20">You have zero chances of losing your investments as all our assets are duly covered by
              inssurance.</p>
            <a href="about.html" class="btn-border text-uppercase border_radius">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--GOOD PLANS-->



<!--Facts Counter & Grid-->
<section id="facts" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="wow fadeInDown" data-wow-delay="500ms">
          <h2 class="bottom10 text-capitalize">We’ll help you to grow <span class="yellow_t">your money</span></h2>
          <p class="tagline heading_space">Prime Fidel Options innovative trading platforms and tools provide the power
            and
            reliability you need to feel more confident in your trading.
          </p>
        </div>
        <div class="number-counters">
          <div class="counters-item heading_space wow fadeIn" data-wow-delay="700ms">
            <p class="data"><strong data-to="6">0</strong></p>
            <!-- Set Your Number here. i,e. data-to="56" -->
            <p>Years of Experience</p>
          </div>
          <div class="counters-item heading_space wow fadeIn" data-wow-delay="900ms">
            <p class="data"><strong data-to="875">0</strong><sub>k</sub></p>
            <p>Happy Clients</p>
          </div>
          <div class="counters-item heading_space wow fadeIn" data-wow-delay="1100ms">
            <p class="data"><strong data-to="100">0</strong><sub>%</sub></p>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
    <div id="grid_layout" class="cbp cbp-l-grid-mosaic-flat">
      <div class="cbp-item">
        <a href="images/grid1.html" class="cbp-lightbox">
          <img src="ui/images/grid1.jpg" alt="">
          <div class="overlay">
            <div class="overlay_inner">
              <h4>Prime Fidel Options</h4>
              <p>Number 1 investment platform</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cbp-item">
        <a href="images/grid3.html" class="cbp-lightbox">
          <img src="ui/images/grid3.jpg" alt="">
          <div class="overlay">
            <div class="overlay_inner">
              <h4>Prime Fidel Options</h4>
              <p>Number 1 investment platform</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cbp-item">
        <a href="images/grid2.html" class="cbp-lightbox">
          <img src="ui/images/grid2.jpg" alt="">
          <div class="overlay">
            <div class="overlay_inner">
              <h4>Prime Fidel Options</h4>
              <p>Number 1 investment platform</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cbp-item">
        <a href="images/grid4.html" class="cbp-lightbox">
          <img src="ui/images/security.jpg" alt="" style="width: 269px; height: 180px;">
          <div class="overlay">
            <div class="overlay_inner">
              <h4>Prime Fidel Options</h4>
              <p>Number 1 investment platform</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cbp-item">
        <a href="images/grid5.html" class="cbp-lightbox">
          <img src="ui/images/grid5.jpg" alt="">
          <div class="overlay">
            <div class="overlay_inner">
              <h4>Prime Fidel Options</h4>
              <p>Number 1 investment platform</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
<!--Facts & Fun ends-->

<!--Video-->
<section id="bg-video" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 video wow fadeInLeft" data-wow-delay="500ms">
        <img src="ui/images/video-img.jpg" alt="video">

      </div>
      <div class="col-sm-6 right_content top40 bottom40 wow fadeInRight" data-wow-delay="500ms">
        <h2 class="bottom30 text-capitalize">About <span class="yellow_t">Prime Fidel Options</span></h2>
        <p class="bottom30">Prime Fidel Options is an Asian asset management and investment firm in partnership with
          Poland, specializing in profit generation from various financial markets in Singapore and other fast rising
          investments and manufacturing sectors of production ,financial institutions and development companies
          globally.
        </p>
        <p class="bottom30">Prime Fidel Options Company is a distinctive investment company offering our investors
          access
          to high-growth investment opportunities in Bitcoin markets and other services.
          We implement best practices of trading & mining of Crypto through our operations, while offering flexibility
          in our investment plans.
          Our company benefits from an extensive network of global clients.
          Prime Fidel Options has an ever growing organization of advisors, financial specialists and national thought
          leaders committed to delivering on the promise of true wealth management.
          At Prime Fidel Options we break down all possible means of generating income and put it in an affordable
          package
          for our users to access, We this tactic all invested assests are truely managed and paid duely, We do not only
          tag crypto as our source of revenue the unique feature about us is <b>"DIVERSITY"</b> we make out every
          possible means for your assest to be of great value to you.</p>
        <a href="about.html" class="btn-white text-uppercase border_radius">More About us</a>
      </div>
    </div>
  </div>
</section>
<!--Video Ends-->

<section id="info" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown">
        <h2 class="text-capitalize bottom10">Why <span class="yellow_t">Chose us</span></h2>
        <p class="heading_space">With our innovative traders, you have many more reasons to chose us.</p>
      </div>
    </div>
    <div class="row info">
      <div class="col-sm-4 icon_box text-center first wow fadeIn" data-wow-delay="500ms">
        <i class="icon-lock bottom20"></i>
        <h4 class="bottom10">SAFE AND SECURE</h4>
        <p>Trade with 100% peace of mind as we have the best system security team onboard.</p>
      </div>
      <div class="col-sm-4 icon_box text-center wow fadeIn" data-wow-delay="600ms">
        <i class="fa fa-bolt bottom20"></i>
        <h4 class="bottom10">INSTANT TRADING</h4>
        <p>With our lightning speed servers, you are sure to get the best out of your investments.</p>
      </div>
      <div class="col-sm-4 icon_box text-center wow fadeIn" data-wow-delay="700ms">
        <i class="icon-layers bottom20"></i>
        <h4 class="bottom10">PROGRESSIVE REVENUE</h4>
        <p>Watch your account grow in real time and monitor how much revenue is being generated for you..</p>
      </div>
      <div class="col-sm-4 icon_box text-center first wow fadeIn" data-wow-delay="800ms">
        <i class="fa fa-users bottom20"></i>
        <h4 class="bottom10">INVESTMENT FOR ALL</h4>
        <p>With different packages, Our system is modelled to accommodate everyone no matter how much you have to
          invest.</p>
      </div>
      <div class="col-sm-4 icon_box text-center wow fadeIn" data-wow-delay="900ms">
        <i class="fa fa-shield bottom20"></i>
        <h4 class="bottom10">COVERED BY INSURANCE</h4>
        <p>You have zero chances of losing your investments as all our assets are duly covered by inssurance..</p>
      </div>
      <div class="col-sm-4 icon_box text-center wow fadeIn" data-wow-delay="1000ms">
        <i class="fa fa-bitcoin bottom20"></i>
        <h4 class="bottom10">BITCOIN TRANSACTION</h4>
        <p>Invest in the world's most popular cryptocurrency and enjoy all the benefits that come with it..</p>
      </div>
    </div>
  </div>
</section>

<!--People Saying-->
<section id="people" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="bottom10 text-capitalize">What people are <span class="yellow_t">Saying</span></h2>
        <p class="heading_space">We are trusted by thousands of users across the globe.</p>
      </div>
    </div>
    <div id="people_slider" class="owl-carousel" style="background: url('images/testimonials-bg.jpg') no-repeat;
    background-position: center center;
background-size: cover;
position: relative;">

      <div class="item">
        <div class="people_wrap border_radius right">
          <i class="icon-quotes-right"></i>
          <p>Am Allen from North Carolina, Thanks to the working team inprimefideloptions.com doing everything possible
            to see the smile on people’s face.</p>
        </div>
        <div class="testinomial_pic text-right pull-right">
          <div class="pic"><img alt="testinomial" src="images/testimonials-5.jpg" style="width: 58px;"></div>
          <div class="testinomial_body">
            <span class="name" style="color:white;">- Allen Brewer</span>
            <span class="post_img">Entrepreneur</span>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="people_wrap border_radius right">
          <i class="icon-quotes-right"></i>
          <p>I want to say a big thank you toprimefideloptions.com Just got my profit of $7500 in my Bank account. This
            is indeed a trust worthy platform to invest</p>
        </div>
        <div class="testinomial_pic text-right pull-right">
          <div class="pic"><img alt="testinomial" src="images/testimonials-2.jpg" style="width: 58px;"></div>
          <div class="testinomial_body">
            <span class="name" style="color:white;">- Carly Jones</span>
            <span class="post_img">Entrepreneur</span>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="people_wrap border_radius right">
          <i class="icon-quotes-right"></i>
          <p>It's really wonderful. I would also like to say thank you to all your staff. Prime Fidel Options did
            exactly
            what you said it does.</p>
        </div>
        <div class="testinomial_pic text-right pull-right">
          <div class="pic"><img alt="testinomial" src="images/testimonials-1.jpg" style="width: 58px;"></div>
          <div class="testinomial_body">
            <span class="name" style="color:white;">- John Larson</span>
            <span class="post_img">Entrepreneur</span>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="people_wrap border_radius right">
          <i class="icon-quotes-right"></i>
          <p>Thanks to mr Alex stahlke and his company for giving me my profit and I will keep investment with you
            people.</p>
        </div>
        <div class="testinomial_pic text-right pull-right">
          <div class="pic"><img alt="testinomial" src="images/testimonials-3.jpg" style="width: 58px;"></div>
          <div class="testinomial_body">
            <span class="name" style="color:white;">- Fikile jan</span>
            <span class="post_img">Entrepreneur</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<!--People Saying ends-->

<!--News & Thoughts-->
<section id="news" class="padding light layout_third">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="bottom10 text-capitalize">What We <span class="yellow_t">Offer </span></h2>
        <p class="heading_space">We’re building a new standard for crypto trading. One account, one balance, streamlined
          access to multiple liquidity venues.</p>
      </div>
    </div>
    <div class="row">
      <div id="news_slider" class="owl-carousel">
        <div class="item">
          <div class="news">
            <div class="image"><img src="ui/images/news3.jpg" alt="News"></div>
            <div class="news_text">
              <h4 class="bottom10"><a href="news_detail.html">Trading</a></h4>
              <p class="bottom30">Our goal is to provide one of the deepest and widest liquidity pools in the crypto
                market. We strive to accomplish this by aggregating liquidity from multiple connected venues like
                exchanges.</p>

            </div>
          </div>
        </div>
        <div class="item">
          <div class="news">
            <div class="image"><img src="ui/images/news2.jpg" alt="News"></div>
            <div class="news_text">
              <h4 class="bottom10"><a href="news_detail.html">Investment</a></h4>
              <p class="bottom30">For the crypto assets in your account, we use Prime Fidel Options custodial services
                and
                applications. Prime Fidel Options is trusted by institutions in the digital assets industry for
                security,
                compliance and custodial solutions</p>

            </div>
          </div>
        </div>
        <div class="item">
          <div class="news">
            <div class="image"><img src="ui/images/cryptoexchange.jpg" alt="News" style="width: 360px; height: 210px;">
            </div>
            <div class="news_text">
              <h4 class="bottom10"><a href="#">Exchange</a></h4>
              <p class="bottom30">We also buy bitcoins from our investors. We provide several payment methods to enable
                you quickly convert your cash to coin without any hassle. </p>

            </div>
          </div>
        </div>

        <div class="item">
          <div class="news">
            <div class="image"><img src="ui/images/news1.jpg" alt="News" style="width: 360px; height: 210px;"></div>
            <div class="news_text">
              <h4 class="bottom10"><a href="news_detail.html">Loan</a></h4>
              <p class="bottom30">Our aim is to simplify access to the crypto markets by letting our brokerage customers
                use the buying power from a single account to access liquidity from all of our connected venues.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--News & Thoughts ends-->

<section style="background-color: #2E2E30;">
  <div class="container">
    <div class="row step-list">
      <div class="col-md-6 step-list__item">
        <h3>LATEST DEPOSIT</h3>
        <div class="step-body table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="text-center">Gateway</th>
                <th class="text-center">Name</th>
                <th class="text-center">Amount</th>
                <th class="text-center">Time</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Chas Driscoll</td>
                <td style="white-space: nowrap;" class="text-center">$1,883</td>
                <td class="text-center">3 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Florene Shurgot</td>
                <td style="white-space: nowrap;" class="text-center">$1,166</td>
                <td class="text-center">4 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Completed</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Yolande Ziska</td>
                <td style="white-space: nowrap;" class="text-center">$360</td>
                <td class="text-center">2 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Santana Lagroon</td>
                <td style="white-space: nowrap;" class="text-center">$1,456</td>
                <td class="text-center">6 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Completed</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Apolonia Zinsmeister</td>
                <td style="white-space: nowrap;" class="text-center">$962</td>
                <td class="text-center">5 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Completed</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Basilia Bossie</td>
                <td style="white-space: nowrap;" class="text-center">$3,100</td>
                <td class="text-center">4 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Completed</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Isadora Betenbaugh</td>
                <td style="white-space: nowrap;" class="text-center">$781</td>
                <td class="text-center">4 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">8</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Andreas Gayo</td>
                <td style="white-space: nowrap;" class="text-center">$622</td>
                <td class="text-center">1 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Completed</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">9</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Belinda Tillman</td>
                <td style="white-space: nowrap;" class="text-center">$4,111</td>
                <td class="text-center">2 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">10</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Charlyn Prawl</td>
                <td style="white-space: nowrap;" class="text-center">$4,420</td>
                <td class="text-center">2 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 step-list__item">
        <h3>LATEST WITHDRAWAL</h3>
        <div class="step-body table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="text-center">Gateway</th>
                <th class="text-center">Name</th>
                <th class="text-center">Amount</th>
                <th class="text-center">Time</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Lenard Zhanel</td>
                <td style="white-space: nowrap;" class="text-center">$58,563</td>
                <td class="text-center">1 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Williams Landsberry</td>
                <td style="white-space: nowrap;" class="text-center">$42,706</td>
                <td class="text-center">7 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Susie Flavell</td>
                <td style="white-space: nowrap;" class="text-center">$23,270</td>
                <td class="text-center">2 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Orville Frontiero</td>
                <td style="white-space: nowrap;" class="text-center">$34,236</td>
                <td class="text-center">7 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">Ethereum</td>
                <td class="text-center">Rosalinda Ranson</td>
                <td style="white-space: nowrap;" class="text-center">$61,596</td>
                <td class="text-center">2 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td class="text-center">Bitcoin</td>
                <td class="text-center">Randolph Dockstader</td>
                <td style="white-space: nowrap;" class="text-center">$40,287</td>
                <td class="text-center">4 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Marion Vanostberg</td>
                <td style="white-space: nowrap;" class="text-center">$7,504</td>
                <td class="text-center">5 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">8</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Daisey Polack</td>
                <td style="white-space: nowrap;" class="text-center">$66,469</td>
                <td class="text-center">7 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">9</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Soo Voshell</td>
                <td style="white-space: nowrap;" class="text-center">$45,479</td>
                <td class="text-center">3 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-warning btn-rounded btn-sm"><i
                      class="fa fa-exclamation-triangle"></i> Pending</button>
                </td>
              </tr>
              <tr>
                <td class="text-center">10</td>
                <td class="text-center">Bank Transfer</td>
                <td class="text-center">Arlen Borglum</td>
                <td style="white-space: nowrap;" class="text-center">$22,846</td>
                <td class="text-center">3 day(s) ago </td>
                <td class="text-center" style="white-space: nowrap;">
                  <button type="button" class="btn btn-outline-success btn-rounded btn-sm"><i
                      class="fa fa-check-circle"></i> Successful</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
<!--How to work -->
<section id="partner" class="padding-top">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="bottom10 text-capitalize">How to Work With <span class="yellow_t">Prime Fidel Options</span></h2>
        <h4>Register, Deposit, </h4>
        <h4>Purchase Plan and Earn, </h4>
        <h4>Withdraw</h4>
        <br>
        <p>Download Bitcoin Wallet:</p>
        <h4>Get it On PC or Mobile to</h4>
        <h4>Purchase, Send and recieve</h4>
        <h4>bitcoins.</h4>
        <br>
        <p>Add Funds & start Investment:</p>
        <h4>Add bitcoins you've purchased or exchaged.</h4>
        <br>
        <p>Withdraw Your profit:</p>
        <h4>Request for withdrawal and</h4>
        <h4>recieve it within 5-7 mins.</h4>
        <br>
        <h4>Up to 12% Referral Bonus</h4>
        <h4>on every new investment</h4>
        <h4>from your downline.</h4>
        <br>
      </div>
    </div>

  </div>
</section>
<!--Partner Ends-->

<!--Partners-->
<section id="partner" class="padding-top">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="bottom10 text-capitalize">Be Our <span class="yellow_t">Partners</span></h2>
        <p class="heading_space">Are you passionate about working with us? We are glad to let you know that we will
          always welcome you with an open arm ready to work with you in the best way</p>
      </div>
    </div>

  </div>
</section>
<!--Partner Ends-->

<!--Account managers-->
<section id="partner" class="padding-top">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
        <h2 class="bottom10 text-capitalize">Account <span class="yellow_t">Managers</span></h2>
      </div>
      <div class="col-sm-6 padding-bottom">

        <img src="images/gp2.jpg" alt="About Us" class="img-responsive">
        <h2 class="bottom10"><b>Aisoon </b><span class="blue_t">Sangthong</span></h2>
        <p class="bottom30">Business Adviser And Account Manager London, United Kingdom</p>

      </div>
      <div class="col-sm-6 padding-bottom">

        <img src="images/gp1.jpg" alt="About Us" class="img-responsive">
        <h2 class="bottom10"><b>Magrete </b><span class="blue_t">Campbell</span></h2>
        <p class="bottom30">Financial Advisor And Account Manager. Knoxville Tennessee USA</p>

      </div>
    </div>

  </div>
</section>
<!--Account Manager Ends-->


<!--Contact Info-->
<div class="container bg_contact bg_two border_radius wow bounceInUp" data-wow-delay="500ms">
  <div class="row ">
    <div class="col-sm-6">
      <div class="contact_inner">
        <i class="icon-phone4"></i>
        <h5><strong></strong></h5>
        <a href="mailto:support@primefideloptions.com"><span
            class="__cf_email__">support@primefideloptions.com</span></a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="contact_inner">
        <i class="icon-icons20"></i>
        <h5><strong>Mon - FRI 8.00 - 20.00</strong></h5>
        <h5>Always Here For You!</h5>
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