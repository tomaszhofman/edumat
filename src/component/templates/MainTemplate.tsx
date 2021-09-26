import React from 'react';
import styled from 'styled-components';
import BottomNav from '../organisms/BottomNav';
import Header from '../organisms/Header';

const Wrapper = styled.div`
  /* styles for desktop version  */
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <BottomNav />
    </Wrapper>
  );
};

export default MainTemplate;
