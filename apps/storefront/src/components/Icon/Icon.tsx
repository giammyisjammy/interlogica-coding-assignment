import React from 'react';
import styled from 'styled-components';
import type { Icon as ReactFeatherIcon } from 'react-feather';
import { Search, Menu, ShoppingBag, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};
type Id = keyof typeof icons;

interface IconProps {
  id: Id;
  color?: React.ComponentProps<ReactFeatherIcon>['color'];
  size?: React.ComponentProps<ReactFeatherIcon>['size'];
  strokeWidth: number;
}
function Icon({ id, color, size, strokeWidth, ...delegated }: IconProps) {
  const Component = icons[id];

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ strokeWidth: number }>`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;

export default Icon;
