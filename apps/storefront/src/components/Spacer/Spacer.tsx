import styled from 'styled-components';

function getHeight({ axis, size }: SpacerProps) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: SpacerProps) {
  return axis === 'vertical' ? 1 : size;
}

interface SpacerProps {
  axis?: 'horizontal' | 'vertical';
  size?: number;
}
const Spacer = styled.span<SpacerProps>`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
