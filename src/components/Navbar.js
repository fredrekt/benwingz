import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";

export default () => {
  return (
    <HeaderNavigation style={{ padding: `1.5rem` }}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
            <StyledLink animateUnderline href="/">
                <h2>Gatsby Starter Base Web</h2>
            </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="/about">
            About
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="/elements">
            Elements
          </StyledLink>
        </StyledNavigationItem>
        {/* <StyledNavigationItem>
          <StyledLink href="#basic-link2">
            Typography
          </StyledLink>
        </StyledNavigationItem> */}
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Get started</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}