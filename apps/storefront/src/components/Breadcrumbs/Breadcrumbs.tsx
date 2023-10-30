import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

function Breadcrumbs({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

type CrumbProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
function Crumb({ href, children, ...delegated }: CrumbProps) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}
Crumb.displayName = 'Crumb';

Breadcrumbs.Crumb = Crumb;

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: ${COLORS.gray[300]};
    }
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;
export default Breadcrumbs;
