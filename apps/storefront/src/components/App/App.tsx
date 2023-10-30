'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import DessertIndex from '../DessertIndex';

function App() {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <DessertIndex setSortId={setSortId} sortId={sortId} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
