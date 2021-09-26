import React from 'react';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const Image = styled.img`
  height: 21px;
`;

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="" />
    </div>
  );
};

export default Logo;
