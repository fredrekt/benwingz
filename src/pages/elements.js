import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Block} from 'baseui/block';
import {styled} from 'styletron-react';
import {
    Display1,
    Display2,
    Display3,
    Display4,
  } from 'baseui/typography';
import { StyledLink } from 'baseui/link';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Table } from "baseui/table";
import { Accordion, Panel } from "baseui/accordion";
import {ListItem, ListItemLabel} from 'baseui/list';
import {useStyletron} from 'baseui';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    ROLE
  } from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { Notification } from "baseui/notification";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
  } from "baseui/header-navigation";

const ElementsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [css] = useStyletron();

    const Container = styled('div', {
        paddingLeft: `3rem`,
        paddingRight: `3rem` 
    });

    const HeadingTitle = styled('h2', {
        marginTop: `3rem`,
        fontSize: `2rem`
    })

    const FlexRow = styled('div',{
        display: `flex`, 
        justifyContent: `space-between`, 
        marginTop: `1.5rem`, marginBottom: `1.5rem`
    })

    const textString =
  'We ignite opportunity by setting the world in motion.';
    const bodyString =
  'Good things happen when people can move, whether across town or towards their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology.';

    return (
        <Layout>
            <SEO title="Elements"/>
            <Container>
                <Block>
                    <HeadingTitle>Typography</HeadingTitle>
                    <h1>Heading Level 1</h1>
                    <h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>
                    <h4>Heading Level 4</h4>
                    <h5>Heading Level 5</h5>
                    <h6>Heading Level 6</h6>
                </Block>
                <Block>
                    <p>{textString}{bodyString}</p>
                </Block>
                <Block>
                    <HeadingTitle>Typography Display Blocks</HeadingTitle>
                    <Display1 marginBottom="scale500">Display 1</Display1>
                    <Display2 marginBottom="scale500">Display 2</Display2>
                    <Display3 marginBottom="scale500">Display 3</Display3>
                    <Display4>Display 4</Display4>
                </Block>
                <Block>
                    <HeadingTitle>Buttons</HeadingTitle>
                    <FlexGrid
                    flexGridColumnCount={4}
                    > 
                        <FlexGridItem>
                        <Button>Primary</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button kind={KIND.secondary}>Secondary</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button kind={KIND.minimal}>Minimal</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button kind={KIND.tertiary}>Tertiary</Button>
                        </FlexGridItem>
                    </FlexGrid>
                    <HeadingTitle>Sizes</HeadingTitle>
                    <FlexGrid
                    flexGridColumnCount={4}
                    > 
                        <FlexGridItem>
                        <Button>Default</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button size={SIZE.mini}>Mini</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button size={SIZE.large}>Large</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button size={SIZE.compact}>Compact</Button>
                        </FlexGridItem>
                    </FlexGrid>
                    <HeadingTitle>Shapes</HeadingTitle>
                    <FlexRow> 
                        <FlexGridItem>
                        <Button shape={SHAPE.pill}>Pill</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button shape={SHAPE.round}>Round</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                        <Button>Default</Button>
                        </FlexGridItem>
                    </FlexRow>
                </Block>
                <Block>
                <HeadingTitle>States</HeadingTitle>
                    <FlexRow>
                        <FlexGridItem>
                            <Button isLoading>Loading</Button>
                        </FlexGridItem>
                        <FlexGridItem>
                            <Button disabled>Disabled</Button>    
                        </FlexGridItem>
                        <FlexGridItem>
                            <Button isSelected>Selected</Button>
                        </FlexGridItem>
                    </FlexRow>
                </Block>
                <Block>
                <HeadingTitle>Forms</HeadingTitle>
                    <FormControl
                    label={() => "label"}
                    caption={() => "caption"}
                    >
                    <Input />
                    </FormControl>
                    <p>
                        For complex forms/inputs and informations visit &nbsp;
                        <StyledLink href="https://baseweb.design/components/form-control/">
                         Base Web Design
                        </StyledLink>.
                    </p>
                </Block>
                <Block>
                    <HeadingTitle>Accordion</HeadingTitle>
                    <Accordion
                    onChange={({ expanded }) => console.log(expanded)}
                    >
                    <Panel title="Panel 1">Content 1</Panel>
                    <Panel title="Panel 2">Content 2</Panel>
                    <Panel title="Panel 3">Content 3</Panel>
                    </Accordion>
                    <HeadingTitle>List</HeadingTitle>
                    <ul
                    className={css({
                        width: '375px',
                        paddingLeft: 0,
                        paddingRight: 0,
                    })}
                    >
                    <ListItem>
                        <ListItemLabel>Label One</ListItemLabel>
                    </ListItem>
                    <ListItem>
                        <ListItemLabel>Label Two</ListItemLabel>
                    </ListItem>
                    <ListItem>
                        <ListItemLabel description="description">
                        Label Three
                        </ListItemLabel>
                    </ListItem>
                    <ListItem>
                        <ListItemLabel description="description">
                        Label Four
                        </ListItemLabel>
                    </ListItem>
                    </ul>
                    <HeadingTitle>Card</HeadingTitle>
                    <Card
                        overrides={{Root: {style: {width: '328px'}}}}
                        headerImage={'https://source.unsplash.com/user/erondu/700x400'}
                        title="Example card"
                    >
                        <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                        ornare faucibus ex, non facilisis nisl.
                        </StyledBody>
                        <StyledAction>
                        <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                            Button Label
                        </Button>
                        </StyledAction>
                    </Card>
                    <HeadingTitle>Modal</HeadingTitle>
                    <Button onClick={()=>setIsOpen(!isOpen)}>Open Modal</Button>
                    <Modal
                    onClose={() => setIsOpen(false)}
                    closeable
                    isOpen={isOpen}
                    animate
                    autoFocus
                    size={SIZE.default}
                    role={ROLE.dialog}
                    >
                    <ModalHeader>Hello world</ModalHeader>
                    <ModalBody>
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                        Maecenas aliquet mauris ut tempus.
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton kind={ButtonKind.tertiary}>
                        Cancel
                        </ModalButton>
                        <ModalButton>Okay</ModalButton>
                    </ModalFooter>
                    </Modal>
                </Block>
                <Block>
                    <HeadingTitle>Notification/Alert</HeadingTitle>
                    <Notification closeable>
                    {() => "This is a notification."}
                    </Notification>
                </Block>
                <Block>
                    <HeadingTitle>Navigation</HeadingTitle>
                    <HeaderNavigation>
                    <StyledNavigationList $align={ALIGN.left}>
                        <StyledNavigationItem>Uber</StyledNavigationItem>
                    </StyledNavigationList>
                    <StyledNavigationList $align={ALIGN.center} />
                    <StyledNavigationList $align={ALIGN.right}>
                        <StyledNavigationItem>
                        <StyledLink href="#basic-link1">
                            Tab Link One
                        </StyledLink>
                        </StyledNavigationItem>
                        <StyledNavigationItem>
                        <StyledLink href="#basic-link2">
                            Tab Link Two
                        </StyledLink>
                        </StyledNavigationItem>
                    </StyledNavigationList>
                    <StyledNavigationList $align={ALIGN.right}>
                        <StyledNavigationItem>
                        <Button>Get started</Button>
                        </StyledNavigationItem>
                    </StyledNavigationList>
                    </HeaderNavigation>
                </Block>
                <Block>
                    <HeadingTitle>Table</HeadingTitle>
                    <Table
                        columns={["Name", "Age", "Job", "Address"]}
                        data={[
                            [
                            "Sarah Brown",
                            31,
                            "Developer",
                            "100 Broadway st. New York City, New York"
                            ],
                            [
                            "Jane Smith",
                            32,
                            "Tester",
                            "100 Market st. San Francisco, California"
                            ]
                        ]}
                        />
                </Block>
                <Block>
                    <p>
                        For more components and informations visit &nbsp;
                        <StyledLink href="https://baseweb.design">
                         Base Web Design
                        </StyledLink>.
                    </p>
                </Block>
            </Container>
        </Layout>
    )
}

export default ElementsPage
