import React from 'react';
import CoursePreview from '../molecules/CoursePreview';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4.4rem;
    column-gap: 1.4rem;
    overflow-y: scroll;
    height: 250px;
    -webkit-overflow-scrolling: touch;
  }
`;

const CoursesPreviews = () => {
  return (
    <Wrapper>
      <CoursePreview />
      <CoursePreview />
      <CoursePreview />
      <CoursePreview />
    </Wrapper>
  );
};

export default CoursesPreviews;
