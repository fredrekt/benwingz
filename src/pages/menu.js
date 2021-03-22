import { MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import hero from '../images/hero_tacos.jpeg';
import { StyledLink } from "baseui/link";

const MenuPage = () => {
    return (
        <Layout>
            <SEO title="Menu"/>
            <Container>
              <MDBView src={hero}>
                <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
                  <h1 className="text-uppercase display-2">What we serve</h1>
                    <p className="lead">
                        Get hooked on our delicious chicken wings, drinks and wraps. 
                    </p>
                </MDBMask>
            </MDBView>
            <MDBContainer className="py-5 my-5">
                <section className="menu-food my-5">
                    <MDBRow center className="py-5">
                        <MDBCol className="text-center">
                            <h1 className="h3-responsive text-uppercase font-weight-bold">Chicken Wings</h1>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Buffalo Wings
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        Our famous bestseller, paired with ranch dressing! Those two tastes so well together and especially paired with a Mint Lemonade.
                                        We also have rice to be paired with this and the ranch dressing can be refilled. 
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Our sauce is homemade and created with love by our chef! This is a must taste order from our restaurant.
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://static01.nyt.com/images/2019/02/01/dining/as-baked-buffalo-wings/merlin_149955708_93f772ee-ec5e-4f4a-97fe-87f2df4a97ef-articleLarge.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Parmesan Wings
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        6pcs chicken wings and harmony of strong garlic flavors with Parmesan Cheese.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Also loved by our customers, this flavor of our wings with a ranch dressing dip or blue cheese is pretty delicious!
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://www.thekitchenmagpie.com/wp-content/uploads/images/2020/03/GarlicParmesanChickenWings.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Teriyaki Wings
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        6pcs chicken wings and have a taste of Japan with this nutty and creamy sauce made from roasted sesame seeds and soy sauce.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Love sweet chicken? This is the right order for you!
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://www.eatthelove.com/wp-content/uploads/2016/01/Teriyaki-Chicken-Wings-6.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Salted Egg Wings
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        6pcs chicken wings and luscious buttery sauce with the balance of salted egg flavor
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        If you love salted egg or even the hint taste of egg, then try this one! 
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="http://images.summitmedia-digital.com/yummyph/images/2017/04/20/salted-egg-fried-chicken-wings.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        BBQ Wings
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        Our famous bestseller, paired with ranch dressing! Those two tastes so well together and especially paired with a Mint Lemonade.
                                        We also have rice to be paired with this and the ranch dressing can be refilled. 
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Our sauce is homemade and created with love by our chef! This is a must taste order from our restaurant.
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/1/28/0/KC0103_BBQ-Wings-with-Blue-Cheese-Butter_s4x3.jpg.rend.hgtvcom.616.462.suffix/1397472589593.jpeg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section className="menu-mexican-food my-5">
                    <MDBRow center className="py-5">
                        <MDBCol className="text-center">
                            <h1 className="h3-responsive text-uppercase font-weight-bold">Mexican Food</h1>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Tacos
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        A grilled flour tortilla filled with choice of filling and topped with fresh cilantra and onions. Served with a hot or mild salsa verde and a slice of lime. Filling Choices: Minced Beef or Thin Sliced Beef, and Diced Chicken Breast.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Our sauces, fillings and our wraps are refillable. We also have a 'Make your own taco' option for your desired Taco.
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://images.pexels.com/photos/5454019/pexels-photo-5454019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Quesadilla
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        A larage flour tortilla filled with cheese, lettuce, pico de gallo and your choice of filling. Then grilled to a light golden brown and cut in quarters. Served with a side of salsa cruda and sour cream.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        If you love a creamy quesdialla this is the right order for you!
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://images.pexels.com/photos/5848702/pexels-photo-5848702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Chicken Fajitas
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        Crispy lettuce topped with shredded cheese, sauteed green peppers and onions, sliced avocado, sour cream and chicken fajita strips.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        If you're on a diet this is the right food for you!
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://images.summitmedia-digital.com/yummyph/images/ChickenFajitas.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-4">
                        <MDBCol md="6" lg="6">
                            <div className="menu-content">
                                <div className="menu-title">
                                    <h1 className="h1-responsive font-weight-bold header-font">
                                        Mexivege Roll-ups
                                    </h1>
                                </div>
                                <div className="menu-details my-4">
                                    <p className="lead">
                                        Roll fresh veggies up with a creamy filling in a make-ahead appetizer that gets a kick from taco seasoning.
                                    </p>
                                </div>
                                <div className="menu-add-details my-4">
                                    <p className="lead">
                                        Veggie lover? Then this is the right food for you!
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <img src="https://veganfoodandliving-1321f.kxcdn.com/wp-content/uploads/2020/07/Mexican-Veggie-Roll-Ups.jpg" alt="" className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-5">
                        <MDBCol>
                            <StyledLink href="/contact#order">
                                Place your order here
                            </StyledLink>
                            <br/>
                            <StyledLink animateUnderline href="/contact">
                                For more inquiries just kindly click on here.
                            </StyledLink>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-5">
                        <MDBCol>

                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
            </Container>
        </Layout>
    )
}

export default MenuPage
