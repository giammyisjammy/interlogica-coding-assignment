import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

type LogoProps = React.HTMLAttributes<HTMLHeadingElement>;
function Logo(props: LogoProps) {
  return (
    <Link href="/">
      <Wrapper {...props}>DoughNuts&amp;More</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
