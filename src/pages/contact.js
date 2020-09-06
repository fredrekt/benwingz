import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {styled} from 'styletron-react';
import {Grid, Cell} from 'baseui/layout-grid';
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Button } from "baseui/button";

const ContactPage = () => {
    const Container = styled('div', {
        paddingLeft: `3rem`,
        paddingRight: `3rem` 
    });

    const HeadingTitle = styled('h2', {
        marginTop: `3rem`,
        fontSize: `2rem`
    });

    const CustomMargins = styled('div', {
        marginTop: `1.5rem`,
        marginBottom: `1.5rem`
    });

    return (
        <Layout>
            <SEO title="Contact"/>
            <Container>
                <Grid>
                    <Cell span={6}>
                        <HeadingTitle>Get in Touch</HeadingTitle>
                    </Cell>
                </Grid>
            <CustomMargins>
                <Grid>
                    <Cell span={6}>
                        <Input placeholder="Your Name"/>
                    </Cell>
                </Grid>
            </CustomMargins>
            <CustomMargins>
                <Grid>
                    <Cell span={6}>
                        <Input placeholder="Your Email"/>
                    </Cell>
                </Grid>
            </CustomMargins>
            <CustomMargins>
                <Grid>
                    <Cell span={6}>
                        <Input placeholder="Your Subject"/>
                    </Cell>
                </Grid>
            </CustomMargins>
            <CustomMargins>
                <Grid>
                    <Cell span={6}>
                        <Textarea
                            placeholder="Your Message"
                            clearOnEscape
                            />
                    </Cell>
                </Grid>
            </CustomMargins>
            <CustomMargins>
                <Grid>
                    <Cell span={4}>
                        <Button>Send Message</Button>
                    </Cell>
                </Grid>
            </CustomMargins>
            </Container>
        </Layout>
    )
}

export default ContactPage
