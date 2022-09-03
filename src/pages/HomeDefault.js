import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import { FiArrowRight } from "react-icons/fi";
import { FaInfoCircle } from 'react-icons/fa';
import Separator from "../elements/separator/Separator";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import CalltoActionSix from "../elements/calltoaction/CalltoActionSix";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import hero_bg from '../assets/images/dy-1.png';
import ServiceThree from '../elements/service/ServiceThree';
import AccordionOne from '../elements/accordion/AccordionOne';
import PricingThree from '../elements/pricing/PricingThree';
import Typed from 'react-typed';
import ScrollTop from "../common/footer/ScrollTop";
import ReactTooltip from 'react-tooltip';




const HomeDefault = () => {
    
    return (
        <>
          <ReactTooltip />
            <SEO title="DeepLynk - Fast and Secure Deep Links for Free" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" />

               {/* Start Hero Area  */}
          <main>
            <section class="hero text-center text-light">
              <div class="hero-bg"></div>
              <div class="hero-particles-container">
                <canvas id="hero-particles"></canvas>
              </div>
              <div class="container-sm">
                <div class="hero-inner">
                  <div class="hero-copy">
                    <div className="row row--30 align-items-center">
                      <div className="order-1 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <br></br>
                        <div className="inner text-left">
                        <h1 className="title theme-gradient">Fast & Powerful links <br /> That {" "}
                                        <Typed
                                            strings={[
                                                "Earns",
                                                "Open Apps",
                                                "Auto Update",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                          {/* <h1 className="title color-white">
                            Fast & Powerful links that earn & grow Brands
                          </h1> */}
                          <p className="description color-white">
                            Create short links that open apps and update automatically with latest content.
                          </p>
                          <div className="button-group mt--30 mt_sm--20">
                            <a
                              className="btn-default btn-medium btn-icon btn-border"
                              target="_blank"
                              href="#"
                            >
                              Purchase Now{" "}
                              <i className="icon">
                                <FiArrowRight />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 order-2 order-lg-2">
                        <div className="thumbnail hero_bg_img">
                          <img src={hero_bg} alt="Banner Images" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* End Slider Area  */}
          <CalltoActionSix />
          <Separator />
          <div className="rwt-timeline-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Get Started"
                    title="More than a free link shortener"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 mt--50">
                  <TimelineTwo classVar="" />
                </div>
              </div>
            </div>
          </div>
          <Separator />
              {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="What we can do for you"
                    title="Services Offered"
                    description='<b class="theme-gradient">DEEPLYNK</b> is the best URL shortener for everyone, from influencers to small brands to large enterprises <br/> who are looking for a simple way to create, track and manage their links.'
                  />
                </div>
              </div>
              <ServiceThree
                serviceStyle="service__style--2"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}
          <Separator />

               {/* Start Elements Area  */}
<div className="rwt-pricing-area rn-section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <SectionTitle
          textAlign="text-center"
          radiusRounded=""
          subtitle="We have something for everyone"
          title="Our Pricing Plan."
          description=""
        />
      </div>
    </div>
    <PricingThree />
  </div>
</div>
{/* End Elements Area  */}
<Separator />

                {/* Start Accordion Area  */}
          <div className="rn-accordion-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="understand us better"
                    title="FAQ"
                    description=""
                  />
                </div>
              </div>
              <div className="row mt--35 row--20">
                <div className="col-lg-10 offset-lg-1">
                  <AccordionOne customStyle="rn-accordion-02" />
                </div>
              </div>
            </div>
          </div>
          {/* End Accordion Area  */}

               


                <Separator />

               
              

                <footer class="site-footer">
            <div class="footer-particles-container" style={{backgroundColor:"#0B0D19"}}>
              <canvas id="footer-particles"></canvas>
            </div>
            <div class="site-footer-top">
              <section class="cta section text-light">
               
                <div className="copyright-area copyright-style-one">
                <div class="container">
                <br></br>
                  <div class="row row--0 align-items-center content-wrapper">
                    <div class="col-lg-8 col-md-8">
                      <div class="inner">
                        <div class="content text-left">
                          <div class="logo">
                            <a href="/">
                              <img
                                class="logo-light"
                                src="/images/logo/logo.png"
                                alt="Corporate Logo"
                              />
                              <img
                                class="logo-dark"
                                src="/images/logo/logo-dark.png"
                                alt="Corporate Logo"
                              />
                            </a>
                          </div>
                          <div
                            class="animated fadeInUp"
                            style={{ "animation-duration": "1s;" }}
                          >
                            
                          </div>
                        </div>
                        <br></br>
                        <h6 className="subtitle">Get Premium Account for free  Use PromoCode - <span class="theme-gradient">WELCOME </span> 
                        <FaInfoCircle data-tip='Valid for New Users only, Get full featured Premium Account. No Credit card Required at any time' /></h6>
                      
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Stay with us</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">Subscribe Newsletter for updates on new features and offers</h6>
                                        <form className="newsletter-form" action="#">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter Your Email Here" />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn-default" type="submit">Submit Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                  </div>
                </div>
                  <div className="container">
                  <br></br>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                          <ul className="ft-menu link-hover">
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="#">Terms And Condition</a>
                            </li>
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-right">
                          <p className="copyright-text">
                            © Deeplynk {new Date().getFullYear()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </footer>

               

            </main>
            <ScrollTop />
            
        </>
    )
}
export default HomeDefault

