import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/Container"
import { StyledLink } from "baseui/link";
import {Card, StyledBody, StyledAction} from 'baseui/card';
import { Button } from "baseui/button";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

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
      <div style={{ paddingTop: `3rem`, paddingBottom: `3rem` }}>
        <FlexGrid flexGridColumnCount={4}>
          <FlexGridItem>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              title="Minimal Design Inspired"
          >
              <StyledBody>
                Planning to build a minimalistic website? 
                This is the perfect gatsby starter for you.
                Made just for you guys!
              </StyledBody>
              <StyledAction>
              <StyledLink animateUnderline href="/elements">
                <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                    Get Started
                </Button>
              </StyledLink>
              </StyledAction>
          </Card>
          </FlexGridItem>
          <FlexGridItem>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              title="Theme Black/White"
          >
              <StyledBody>
                Have light theme and dark theme for the application you're building. Can also customize the themes.
              </StyledBody>
              <StyledAction>
              <StyledLink animateUnderline href="https://baseweb.design/guides/theming/">
                <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                    Read More
                </Button>
              </StyledLink>
              </StyledAction>
          </Card>
          </FlexGridItem>
          <FlexGridItem>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              title="More Components"
          >
              <StyledBody>
              Base Web provides a robust suite of components out of the box. 
              These include complex, ready to use components.
              </StyledBody>
              <StyledAction>
              <StyledLink animateUnderline href="https://baseweb.design/components/">
                <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                    View Components
                </Button>
              </StyledLink>
              </StyledAction>
          </Card>
          </FlexGridItem>
          <FlexGridItem>
            <Card
              overrides={{Root: {style: {width: '328px'}}}}
              title="About Base Web"
          >
              <StyledBody>
              Base Web is a foundation for initiating, evolving, and unifying web products.
              Components are built with accessibility being a first-class citizen.
              </StyledBody>
              <StyledAction>
              <StyledLink animateUnderline href="https://baseweb.design">
                <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                    Learn More
                </Button>
              </StyledLink>
              </StyledAction>
          </Card>
          </FlexGridItem>
        </FlexGrid>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
