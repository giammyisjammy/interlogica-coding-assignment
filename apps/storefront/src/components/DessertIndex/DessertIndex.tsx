import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';
import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import DessertSidebar from '../DessertSidebar';
import DessertGrid from '../DessertGrid';

interface DessertIndexProps {
  sortId?: string;
  setSortId: React.Dispatch<React.SetStateAction<string>>;
}
function DessertIndex({ sortId, setSortId }: DessertIndexProps) {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Our desserts</Title>
          <Select
            label="Sort"
            onChange={(ev) => {
              setSortId(ev.target.value);
            }}
            value={sortId}
          >
            <option value="newest">Last Baked</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <DessertGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/desserts">Desserts</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <DessertSidebar />
      </LeftColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  /* flex: 1; */
`;

const MainColumn = styled.div`
  /* flex: 3; */
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default DessertIndex;
