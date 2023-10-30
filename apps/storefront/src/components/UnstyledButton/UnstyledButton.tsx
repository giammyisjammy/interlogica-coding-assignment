import type React from 'react';
import styled from 'styled-components';

interface UnstyledButtonProps {
  display?: React.CSSProperties['display'];
}
export default styled.button<UnstyledButtonProps>`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
