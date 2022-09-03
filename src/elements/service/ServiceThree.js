import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import service1 from '../../assets/images/dy-4.png';
import service2 from '../../assets/images/dy-2.png';
import service3 from '../../assets/images/dy-3.png';

const ServiceList = [
    {
        image: service1,
        title: 'Brand Identity',
        description: 'You can create links with a <b class="theme-gradient">custom domain</b>, build <b class="theme-gradient">QR codes</b>, <b class="theme-gradient">deep link </b>apps, <b class="theme-gradient">redirect links</b>, build <b class="theme-gradient">campaigns</b> and increase your Brand Visibility'
    },
    {
        image: service2,
        title: 'All in One',
        description: ' Individual Creators, Influencers  and Businesses we have curated tools for everyone – <b class="theme-gradient">DEEPLYNK</b> has a plan with the features you need.'
    },
    {
        image: service3,
        title: 'Create money-making links',
        description: 'Enable your short links to <b class="theme-gradient">earn</b> for you. By default free account will <b class="theme-gradient">show ads</b> on backpage before redirecting to the original link'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <center>
                                    <img src={`${val.image}`} alt="card Images" />
                                    </center>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;