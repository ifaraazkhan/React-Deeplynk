import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FiCheck, FiCircle } from "react-icons/fi";
import './pricing_style.css';
import ReactTooltip from 'react-tooltip';


const PricingThree = () => {
    return (
        
        <div className="row">
            <ReactTooltip />
            <div className="col-lg-8 offset-lg-2">
                <div className="row row--0">
                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Basic</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">0</span>
                                            <span className="strikethrough" style={{fontSize:"20px",marginTop:"25px"}}>$8</span>
                                        </div>
                                        <span className="subtitle">Free forever</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                                <span className="subtitle">For Individuals</span>
                                    <ul className="list-style--1">
                                        <li><FiCheck /> Short URLS</li>
                                        <li><FiCheck /> Deep Link URLS</li>
                                        <li><FiCheck /> Auto Update links</li>
                                        <li><FiCheck /> Link to QR Code</li>
                                        <li><FiCheck /> Ads & Referral Earning </li>
                                       
                                       
                                        <li><FiCheck /> Weekly Payouts</li>
                                        <li><FiCheck /> Analytics</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a className="btn-default btn-border" href="#pricing">Create Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}

                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2 active">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Premium</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">5</span>
                                            <span className="strikethrough" style={{fontSize:"20px",marginTop:"25px"}}>$18</span>
                                        </div>
                                        <span className="subtitle">USD Per Month</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                               
                                <span className="subtitle">For influencers & Brands</span>
                
                                    <ul className="list-style--1">
                                        <li><FiCheck /> Auto update links  <FaInfoCircle data-tip='DEEPLYNK short url automatically updates with new video published on YOUTUBE channel' /></li>
                                        <li><FiCheck /> Custom domains  <FaInfoCircle data-tip='You can get unique sub-domains like john.deeplynk.com with dynamic redirection' /></li>
                                        <li><FiCheck /> Custom page <FaInfoCircle data-tip='You can customise your backpage with the content you like' /></li>
                                        <li><FiCheck /> Custom Links <FaInfoCircle data-tip='You can customise the backhalf of link generated like deeplynk.com/abcdzx to deeplynk.com/fanfest' /></li>
                                        <li><FiCheck /> Custom QR Code</li>
                                        <li><FiCheck /> Ads Campaigns</li>
                                        <li><FiCheck /> Custom Analytics</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a className="btn-default" href="#pricing">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}
                   
                </div>
            </div>
        </div>
    )
}
export default PricingThree;
