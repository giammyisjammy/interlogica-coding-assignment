import React from 'react';
import styled from 'styled-components';
import DESSERTS from '../../data';
import DessertCard from '../DessertCard';

function DessertGrid() {
  return (
    <Wrapper>
      {DESSERTS.map((dessert) => (
        <DessertCard key={dessert.slug} {...dessert} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export default DessertGrid;
