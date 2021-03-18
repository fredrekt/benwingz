import { MDBCard, MDBCardBody, MDBRow, MDBCardText, MDBCardTitle, MDBCol, MDBContainer } from 'mdbreact'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StarRating } from "baseui/rating";
import Moment from 'react-moment'

const ReviewsPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <Layout>
            <SEO title="Reviews"/>
            <Container>
                <section className="py-5 grey lighten-2">
                    <MDBContainer className="py-5 my-5">
                        <div className="py-3">
                        <div className="review-header mb-4">
                            <h1 className="h4-repsonsive font-weight-bold text-center">
                                What People are Saying
                            </h1>
                            <p className="lead w-responsive mx-auto text-center grey-text">
                                We strive to serve our customers with our delicious food and drink. We cook and aim to please each and everyone of our customers.
                            </p>
                        </div>
                        <div className="slider-container py-3">
                            <Slider {...settings}>
                                <MDBCol className="py-4">
                                    <MDBCard>
                                        <MDBCardBody>
                                        <MDBCardTitle>
                                            <MDBRow className="align-items-center">
                                                <MDBCol size="7">
                                                    <div className="review-name">
                                                        <p className="lead m-0 font-weight-bold">
                                                            Fred Garingo
                                                        </p>
                                                    </div>
                                                </MDBCol>
                                                <MDBCol size="5">
                                                    <div className="content-rating my-2">
                                                        <StarRating
                                                            numItems={5}
                                                            size={12}
                                                            value={3}
                                                        />
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <div className="review-content">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </div>
                                            <div className="review-date">
                                                <p className="small m-0 grey-text text-right">
                                                    <Moment format="MM/DD/YY">{Date.now()}</Moment>
                                                </p>
                                            </div>                                        
                                        </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol className="py-4">
                                    <MDBCard>
                                        <MDBCardBody>
                                        <MDBCardTitle>
                                            <MDBRow className="align-items-center">
                                                <MDBCol size="7">
                                                    <div className="review-name">
                                                        <p className="lead m-0 font-weight-bold">
                                                            Mark Anthony
                                                        </p>
                                                    </div>
                                                </MDBCol>
                                                <MDBCol size="5">
                                                    <div className="content-rating my-2">
                                                        <StarRating
                                                            numItems={5}
                                                            size={12}
                                                            value={3}
                                                        />
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <div className="review-content">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </div>
                                            <div className="review-date">
                                                <p className="small m-0 grey-text text-right">
                                                    <Moment format="MM/DD/YY">{Date.now()}</Moment>
                                                </p>
                                            </div>                                        
                                        </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol className="py-4">
                                    <MDBCard>
                                        <MDBCardBody>
                                        <MDBCardTitle>
                                            <MDBRow className="align-items-center">
                                                <MDBCol size="7">
                                                    <div className="review-name">
                                                        <p className="lead m-0 font-weight-bold">
                                                            Karlo Ledesma
                                                        </p>
                                                    </div>
                                                </MDBCol>
                                                <MDBCol size="5">
                                                    <div className="content-rating my-2">
                                                        <StarRating
                                                            numItems={5}
                                                            size={12}
                                                            value={3}
                                                        />
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <div className="review-content">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </div>
                                            <div className="review-date">
                                                <p className="small m-0 grey-text text-right">
                                                    <Moment format="MM/DD/YY">{Date.now()}</Moment>
                                                </p>
                                            </div>                                        
                                        </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </Slider>
                        </div>
                        </div>
                    </MDBContainer>
                </section>
            </Container>
        </Layout>
    )
}

export default ReviewsPage
