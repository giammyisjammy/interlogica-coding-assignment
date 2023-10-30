import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

function Sidebar() {
  return (
    <Wrapper>
      <ActiveLink href="all">All Desserts</ActiveLink>
      <Link href="pizzas-and-buns">Pizzas &amp; Buns</Link>
      <Link href="pies">Pies</Link>
      <Link href="pastries">Pastries</Link>
      <Link href="savory Pies">Savory Pies</Link>
      <Link href="asian-sweets">Asian Sweets</Link>
      <Link href="quick-pies">Quick Pies</Link>
      <Link href="sweet-salads">Sweet Salads</Link>
    </Wrapper>
  );
}

const Wrapper = styled.aside``;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  line-height: 2;
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default Sidebar;
