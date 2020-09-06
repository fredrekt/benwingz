import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/Container"
import { StyledLink } from "baseui/link";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Base Web Starter</h1>
      <p>A gatsby starter made by <StyledLink href="http://github.com/fredrekt">Fred Garingo</StyledLink>.</p>
      <p>If you love Minimalistic Designs, then you're gonna love this starter. If you need to read more about the
        documentation of Base Web - <StyledLink href="https://baseweb.design/">learn more here</StyledLink>. Base Web is made by Uber.
      </p>
      <p>Can be used for your Landing Page, Blog, Portfolio, E-Commerce and etc. Check out elemets to see the components, there are lots of 
        components and elements from the documentation, <StyledLink href="https://baseweb.design/">see more here</StyledLink>.
      </p>
      <p>Base Web uses Styletron, It is an universal toolkit for component-oriented styling. It falls into the CSS in JS category. Styletron works great with React but can be used with other frameworks or plain JS as well.</p>
    </Container>
  </Layout>
)

export default IndexPage
