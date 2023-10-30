import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

function Header() {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">Home&nbsp;Delivery</NavLink>
          <NavLink href="/men">Gluten&nbsp;Free</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Allergens&nbsp;List</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  min-height: 72px;

  display: flex;
  align-items: baseline;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
