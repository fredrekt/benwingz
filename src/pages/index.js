import React from "react"
import Layout from "../components/layout"
import { Button } from "baseui/button";
import SEO from "../components/seo"
import {Grid, Cell} from 'baseui/layout-grid';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <Cell>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <Button>Button</Button>
      </Cell>
    </Grid>
  </Layout>
)

export default IndexPage
