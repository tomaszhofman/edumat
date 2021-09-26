import React from 'react';

import styled from 'styled-components';

interface Props {
  active?: string;
}

const Wrapper = styled.div`
  @media (max-width: 420px) {
    display: flex;
    background-color: #f4f4f4;
    height: 3.2rem;
    padding: 0.9rem 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled.div<Props>`
  @media (max-width: 420px) {
    width: 50%;
    text-align: center;
    color: ${({ active }) => (active ? '#131330' : '#C1C1C1')};
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 0.01em;
  }
`;

const NavigationOptions = () => {
  return (
    <Wrapper>
      <Text active="active">Summary</Text>
      <Text>Activity</Text>
    </Wrapper>
  );
};

export default NavigationOptions;
