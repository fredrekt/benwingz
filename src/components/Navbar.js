import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";

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
      <StyledNavigationList style={{ marginRight: `1.5rem` }} $align={ALIGN.right}>
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
        <StyledNavigationItem>
          <StyledLink href="/contact">
            Contact
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}