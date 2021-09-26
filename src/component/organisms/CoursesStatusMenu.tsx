import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 420px) {
    padding: 1.6rem 0 5.8rem 0;
    max-width: 29.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  @media (max-width: 420px) {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding: 0.8rem 1.6rem;
    border-radius: 100px;

    :first-child {
      background-color: black;
    }
  }
`;

const CoursesStatusMenu = () => {
  return (
    <Wrapper>
      <Text>Do zrobienia</Text>
      <Text>W trakcie</Text>
      <Text>Wykonane</Text>
    </Wrapper>
  );
};

export default CoursesStatusMenu;
