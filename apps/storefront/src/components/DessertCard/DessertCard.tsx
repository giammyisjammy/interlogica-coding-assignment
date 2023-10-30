import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, isNewDessert } from '../../utils';
import Spacer from '../Spacer';
import type { Dessert } from '../../data';

type DessertCardProps = Dessert;
function DessertCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
}: DessertCardProps) {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any dessert released in the last three hours will be considered
  // `new-release`. Any dessert with a `salePrice` will be
  // on-sale. In theory, it is possible for a dessert to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewDessert(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/dessert/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
          {variant === 'new-release' && <NewFlag>Just baked!</NewFlag>}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={
              {
                // Updated to use CSS variables
                // see https://www.joshwcomeau.com/css/css-variables-for-react-devs/
                '--color': variant === 'on-sale' ? COLORS.gray[700] : undefined,
                '--text-decoration':
                  variant === 'on-sale' ? 'line-through' : undefined,
              } as React.CSSProperties
            }
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <Spacer />
          {variant === 'on-sale' && (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          )}
        </Row>
      </Wrapper>
    </Link>
  );
}

const Flag = styled.div`
  position: absolute;
  // No need to tweak with margin, just using positioned layout is fine
  top: 12px;
  right: -4px;

  // These were missing altogether, added from Figma values
  height: 32px;
  line-height: 32px;
  padding: 0 10px; // Adjusted to match Figma values

  font-size: ${14 / 16}rem; // Added responsive font size
  font-weight: ${WEIGHTS.bold}; // Adjusted to match Figma values
  color: ${COLORS.white};
  border-radius: 2px;
`;
// Code updated to use composition, looks much terser
const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;
const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 0 340px;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

// const ColorInfo = styled.p`
//   color: ${COLORS.gray[700]};
// `;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default DessertCard;
