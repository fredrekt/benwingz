import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/Container"
import { MDBBtn, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact';
import Moment from 'react-moment';
import { Link } from 'gatsby';
import food from '../images/chicken_wings_banner.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <MDBView src={food}>
          <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
            <h1 className="text-uppercase display-2">Ben Wingz</h1>
            <p className="lead">
              
            </p>
          </MDBMask>
          <footer className="footer-pos py-4 w-responsive px-4 mx-5">
            <MDBContainer className="white-text">
                <MDBRow className="w-50 float-right align-items-center" end>
                  <MDBCol>
                    <p className="small">
                      <Moment format="DD MMM YYYY">
                        {Date.now()}
                      </Moment>
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <p className="small">/</p>
                  </MDBCol>
                  <MDBCol>
                    <p className="small">
                      <Moment format="hh: mm A" date={Date.now()}/>
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <p className="small">/</p>
                  </MDBCol>
                  <MDBCol>
                    <p className="small text-uppercase">
                      <Link className="white-text" to='order'>
                        <MDBBtn className="mx-0" outline size="sm" color="white">
                          Order
                        </MDBBtn>
                      </Link>
                    </p>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>
          </footer>
        </MDBView>
    </Container>
  </Layout>
)

export default IndexPage
