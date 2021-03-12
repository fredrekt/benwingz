import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/Container'
import { MDBCol, MDBContainer, MDBRow, MDBMask, MDBView } from 'mdbreact'
import food from '../images/hero_about_food.jpeg';
import hero from '../images/hero_2.jpg';
import hero3 from '../images/hero_about_review.jpeg';
import space from '../images/hero_about_space.jpeg';
import { Tabs, Tab, FILL } from "baseui/tabs-motion";
import { Link } from 'gatsby'

const AboutPage = () => {
    const [activeKey, setActiveKey] = useState("0");

    const heroBanner = (key) => {
        if(parseInt(key) === 1){
            return hero
        }
        else if(parseInt(key) === 2){
            return space;
        }
        else if(parseInt(key) === 3){
            return hero3;
        }
        else{
            return food;
        }
    }
    
    return (
        <Layout>
            <SEO title="About"/>
            <Container>
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol className="px-0">
                            <MDBView className="h-100" src={heroBanner(activeKey)}>
                                <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
                                    
                                    </MDBMask>
                                </MDBView>
                        </MDBCol>
                        <MDBCol className="black px-0">
                            <MDBContainer className="py-5 px-4 my-5">
                                <Tabs
                                    activeKey={activeKey}
                                    onChange={({ activeKey }) => {
                                        setActiveKey(activeKey);
                                    }}
                                    activateOnFocus
                                    fill={FILL.fixed}
                                    overrides={{
                                        Root: {
                                        style: () => ({
                                            marginTop: `3rem`,
                                            marginBottom: `3rem`
                                        })
                                        }
                                    }}
                                >
                                    <Tab title="Food & Drinks">
                                        <div className="my-5 py-5">
                                            <h1 className="h1-responsive header-font mb-5 font-weight-bold white-text">What food we serve</h1>
                                            <p className="lead white-text">
                                                Our bestseller is our famous Buffallo Wings with a ranch dip. It taste's very good and pair it with a nice Mint Lemonade. We also have make your tacos, and many more other food and drinks you'll enjoy. Do check out our menu. 
                                            </p>
                                        </div>
                                    </Tab>
                                    <Tab title="The Chef">
                                        <div className="my-5 py-5">
                                            <h1 className="h1-responsive header-font mb-5 font-weight-bold white-text">Hi <span role="img" aria-label="wave">👋</span>, my name is Pierre Sipalay and i am the cook.</h1>
                                            <p className="lead white-text">
                                                I've always loved cooking and as people say that i am a natural. Come taste my cooking straight from the heart. I do hope you guys enjoy my cooking especially my chicken wings! Cooking is kind of hard especially with heat, if you do come to our restaurtant you can grab a drink with me.
                                            </p>
                                        </div>
                                    </Tab>
                                    <Tab title="Space">
                                        <div className="my-5 py-5">
                                            <h1 className="h1-responsive header-font mb-5 font-weight-bold white-text">We got you covered</h1>
                                            <p className="lead white-text">
                                                We are currently located at lawaan just beside Anna Migs, if you do come here bring some of your friends. It is a very windy place and very sunny and just along the road. If you need directions we can provide you. Just kindly <Link to="/contact#location">click here</Link> to navigate where we are located.
                                            </p>
                                        </div>
                                    </Tab>
                                    <Tab title="Reviews">
                                        <div className="my-5 py-5">
                                            <h1 className="h1-responsive header-font mb-5 font-weight-bold white-text">Don't take our word for it!</h1>
                                            <p className="lead white-text">
                                                What our customers say about us and our food. You can also submit your review here and we'll showcase it in no time! We do hope you don't just take their word for it and just come over and try it for yourselves.
                                            </p>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Container>
        </Layout>
    )
}

export default AboutPage
