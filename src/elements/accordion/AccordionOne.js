import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is <span class="theme-gradient">DEEPLYNK</span> ? How does it work?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>DEEPLYNK is a URL shortener with Mobile Apps deeplinking capability, its seems like a simple tool, but it is a 
                               service that can have a dramatic impact on your marketing efforts. DEEPLYNK work by transforming 
                               any long URL into a shorter,memorable and more readable link. When a user clicks the shortened version, they’re 
                               automatically forwarded to the destination URL based on the platform its clicked on like inside Mobile Apps or Webpage.
                               </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    How you can earn using DEEPLYNK?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Yes you can earn using our services, If you’re contributing and sharing content to the online world then by creating DEEPLINKS urls you can EARN with our Free Account.
                    All links created using Free account will be added with an ad layer. Your visitors will see an ad before reaching a destination page and you will make money. We only use Google Ads and 
                    Ads from Brands and Influencers only. No pop-up or inappropriate Ads will be shown on page. 
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Why Brands and Influencer choose us ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>If you are a Brand or Influencer dont rely on free services. You get all the services to grow your brand in our Premium Account. In Premium account no Ads will be 
                               shown to visitor, he will redirect instantly to the destination URL.
                               We are using AWS backend to achieve a robust degree of high availability for the service, so hassle free make one or millions of DEEPLINKS.
                               We have custom domain,links,QR-Code all to increase your brand identity and online presence .
                               Influencers can also earn by running ad campign for brand and services. We always prefer organic growth for Influencers .
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                   What are Auto Update links?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>DEEPLINKS provide a feature that makes Influencer and Social Media Stars life much easy. Auto Update links are set once you dont need to worry 
                               about updating them again and again . For example - you create a DEEPLYNK for your latest published youtube video and put it on Instagram profile 
                               like - deeplynk.com/xyz and set it to auto update. Now next time if you publish a new video on Youtube the same link will redirect to the latest video 
                               on your Youtube channel isn't that amazing. You can also make use of custom domain like - john.deeplynk.com for auto update
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

