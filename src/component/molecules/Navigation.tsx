import React from 'react';

import magnifier from '../../assets/icons/magnifier.svg';
import heart from '../../assets/icons/heart-btn.svg';
import notification from '../../assets/icons/notifications.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <img src={magnifier} alt="" />
      <img src={heart} alt="" />
      <img src={notification} alt="" />
    </Wrapper>
  );
};

export default Navigation;
