import React from 'react';
import styled from 'styled-components';
import { Input } from '../component/atoms/Input';
import { Select } from '../component/atoms/Select';
import CoursesPreviews from '../component/organisms/CoursesPreviews';
import CoursesStatusMenu from '../component/organisms/CoursesStatusMenu';

const Wrapper = styled.div`
  @media (max-width: 420px) {
    flex: 1;
    padding: 3.2rem 2.4rem 0 2.4rem;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      color: #131330;
      padding-bottom: 2.4rem;
    }

    ${Select} {
      flex: 1;
    }
    ${Input} {
      width: 24rem;
    }
  }
`;

const SearchWrapper = styled.div`
  @media (max-width: 420px) {
    display: inline-flex;
    gap: 0.8rem;
    width: 100%;
  }
`;

const CoursesView = () => {
  return (
    <Wrapper>
      <h1>Zapisane kursy</h1>
      <SearchWrapper>
        <Input placeholder="Jakiego kursu szukasz?" search="search" />
        <div>
          <Select>
            <option value="" disabled selected>
              Poziom
            </option>
          </Select>
        </div>
      </SearchWrapper>
      <CoursesStatusMenu />
      <CoursesPreviews />
    </Wrapper>
  );
};

export default CoursesView;
