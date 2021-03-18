import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Button, SIZE } from "baseui/button";
import Container from '../components/Container';
import { MDBCol, MDBContainer, MDBRow, MDBView, MDBMask } from 'mdbreact';
import ArrowRight from 'baseui/icon/arrow-right';
import { StarRating } from "baseui/rating";

const ContactPage = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '',
        review: '',
        rating: 0
    });

    const { name, email, review, rating } = formData

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        alert(name, email, review, rating)
    }

    return (
        <Layout>
            <SEO title="Contact"/>
            <Container>
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol className="px-0">
                            <MDBView className="h-100" src={"https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&dpr=1&w=500"}>
                                <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
                                
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                        <MDBCol className="black px-0">
                            <MDBContainer id="order" className="py-5 px-5 my-5">
                                <h1 className="h1-responsive header-font mb-5 font-weight-bold white-text">Contact Us</h1>
                                <div className="content my-5">

                                    <div className="connected mb-4 white-text">
                                        <h4 className="h4-responsive text-uppercase">Stay Connected / ORDER</h4>
                                        <p className="lead m-0"><span className="font-weight-bold">P, </span><a href="callto:+639958401502">+63 995 8401 502</a></p>
                                        <p className="lead m-0"><span className="font-weight-bold">E, </span><a href="mailto:benwingz.cebu@gmail.com">benwingz.cebu@gmail.com</a></p>
                                        <p className="lead m-0"><span className="font-weight-bold">F, </span><a href="https://www.facebook.com/benwingztaco">fb.com/benwingztaco</a></p>
                                    </div>
                                    
                                    <div className="connected mb-4 white-text">
                                        <h4 className="h4-responsive text-uppercase">For Developer inquiries please contact</h4>
                                        <p className="lead m-0"><span className="font-weight-bold">E, </span><a href="mailto:fredrickjohng6@gmail.com">fredrickjohng6@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className="hours-operation my-5">
                                    <div className="hours-details white-text">
                                    <h4 className="h4-responsive font-weight-bold">Hours of Operation</h4>
                                    <p className="lead m-0">Monday – Sunday, 11:00am – 10:00pm</p>
                                    </div>
                                </div>

                                <div className="location my-5">
                                    <div className="location-details white-text">
                                        <p className="lead m-0">Yared Compound</p>
                                        <p className="lead m-0">Maghaway Road, Upper Lawaan I</p>
                                        <p className="lead m-0">Talisay City, 6045</p>
                                    </div>
                                </div>
                                
                                <div className="location-maps my-5">
                                    <div className="location-details white-text">
                                        <a href="https://www.google.com/maps/dir/10.256989,123.8299632/10.2654315,123.8227844/@10.2655307,123.8233134,18.76z/data=!4m10!4m9!1m6!3m4!1m2!1d123.824593!2d10.2646069!3s0x33a99d097926675d:0xddabcb5ff40a4a73!4e1!1m0!3e0" className="lead text-uppercase m-0">Google Map</a>
                                    </div>
                                </div>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className="py-5">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <MDBRow center className="text-center mt-5">
                            <MDBCol>
                                <h1 className="h1-responsive header-font mb-5 font-weight-bold">Submit Review</h1>
                            </MDBCol> 
                        </MDBRow>
                        <MDBRow center className="mb-4">
                            <MDBCol md="6">
                                <Input
                                    name="name"
                                    value={name}
                                    type="text"
                                    onChange={e => onChange(e)}
                                    placeholder="Your Name"
                                    clearOnEscape
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center className="my-4">
                            <MDBCol md="6">
                                <Input
                                    name="email"
                                    value={email}
                                    type="email"
                                    onChange={e => onChange(e)}
                                    placeholder="Your Email"
                                    clearOnEscape
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center className="my-4">
                            <MDBCol md="6">
                                <Textarea
                                    name="review"
                                    value={review}
                                    onChange={e=>onChange(e)}
                                    size={SIZE.large}
                                    placeholder="Your Review"
                                    required
                                    clearable
                                    clearOnEscape
                                    type="text"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center className="my-4 text-center">
                            <MDBCol>
                                <StarRating
                                    numItems={5}
                                    onChange={data => setFormData({ rating: data.value })}
                                    size={22}
                                    value={rating}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center className="my-4 pb-5 text-center">
                            <MDBCol>
                                <Button type="submit" endEnhancer={() => <ArrowRight size={24} />}>
                                    Send Message
                                </Button>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>
            </Container>
        </Layout>
    )
}

export default ContactPage
