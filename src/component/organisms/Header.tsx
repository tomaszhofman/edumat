import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import NavigationOptions from '../molecules/NavigationOptions';

const Wrapper = styled.div`
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 1.8rem 2.4rem 2.2rem 2.4rem;
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Navigation />
      </Wrapper>

      <NavigationOptions />
    </>
  );
};

export default Header;
