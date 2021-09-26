import React from 'react';
import styled from 'styled-components';
import courseIcon from '../../assets/course.png';

import likeIcon from '../../assets/icons/like.svg';
import levelIcon from '../../assets/icons/level.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.01em;
  padding-top: 2.4rem;
  color: #131330;
`;

const TextContent = styled.p`
  padding-top: 2.4rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 16px;
  padding-top: 0.8rem;
  color: #c1c1c1;
`;

const StyledImg = styled.img`
  @media (max-width: 420px) {
    width: 9rem;
  }
`;

const Header = styled.div`
  @media (max-width: 420px) {
    display: flex;

    align-items: center;
    gap: 2.4rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;

const LevelIcon = styled.img`
  @media (max-width: 420px) {
    width: 2rem;
  }
`;

const LikeIcon = styled.img`
  @media (max-width: 420px) {
    width: 2rem;
  }
`;

const BreakLine = styled.span`
  @media (max-width: 420px) {
    width: 2.5rem;
    height: 2px;
    background-color: #f0f0f0;
  }
`;

const CoursePreview = () => {
  return (
    <Wrapper>
      <Header>
        <StyledImg src={courseIcon} />
        <div>
          <LevelIcon src={levelIcon} alt="" />
          <BreakLine />
          <LikeIcon src={likeIcon} alt="" />
        </div>
      </Header>
      <Heading>Ten kurs jest ciekawy, odpal i zrozumiesz</Heading>
      <TextContent>
        Stretch your analytic muscles with knights, knaves, Kukpon logic gates,
        and more!
      </TextContent>
    </Wrapper>
  );
};

export default CoursePreview;
